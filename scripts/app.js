angular.module('todoListApp', []).controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log('Hello there! This is the helloWorld controller function, in the mainCtrl!');
    };

    function supportsLocalStorage() {
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
            return false;
        }
    }

    function getTodos() {
        let todos = localStorage.todos;
        if (todos) {
            return JSON.parse(todos);
        } else {
            return [];
        }
    }

    $scope.todos = getTodos();
});