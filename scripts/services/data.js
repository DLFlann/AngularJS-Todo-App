'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
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