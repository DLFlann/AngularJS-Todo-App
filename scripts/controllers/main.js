'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
    
    $scope.todos = dataService.getTodosLocalStorage();

    $scope.addTodo = function() {
        let todo = {name: "This is a new todo."};
        $scope.todos.push(todo);
    };

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
});