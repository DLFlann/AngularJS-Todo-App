angular.module('todoListApp', []).controller('mainCtrl', function($scope, dataService) {

    $scope.todos = dataService.getTodosLocalStorage();

    // dataService.getTodosAPI(function(response) {
    //     console.log(response.data);
    //     $scope.todos =  response.data;
    // });

    // $scope.saveTodo = function(todo) {
    //     dataService.saveTodo(todo);
    // };

    $scope.saveTodos = function() {
        try {
            dataService.saveTodosLocalStorage($scope.todos);
        } catch (e) {
            console.log(e.message);
        }
    };

    $scope.deleteTodo = function(todo, $index) {
        // dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
        $scope.saveTodos();
    };
}).service('dataService', function($http) {
    function supportsLocalStorage() {
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
            return false;
        }
    }

    this.getTodosLocalStorage = function() {
        if (supportsLocalStorage()) {
            let todos = localStorage.todos;
            if (todos) {
                return JSON.parse(todos);
            } else {
                return [];
            }
        }
        return [];
    };

    // this.getTodosAPI = function(callback) {
    //     $http.get('mock/todos.json')
    //     .then(callback);
    // };

    // this.deleteTodo = function(todo) {
    //     console.log(`Deleting ${todo.name}...`);
    // };

    // this.saveTodo = function(todo) {
    //     console.log(`Saving ${todo.name}...`);
    // };

    this.saveTodosLocalStorage = function(todos) {
        if (supportsLocalStorage()) {
            localStorage.todos = JSON.stringify(todos);
        } else {
            new Error("Local storage not supported. Todos won't be saved.");
        }
    };
});