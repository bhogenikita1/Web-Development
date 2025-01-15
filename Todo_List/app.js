// Define AngularJS app module
var app = angular.module('todoApp', []);

// Define Controller
app.controller('TodoController', function ($scope) {
  // Initialize to-do list
  $scope.todos = [];

  // Add a new to-do
  $scope.addTodo = function () {
    if ($scope.newTodo) {
      $scope.todos.push({ text: $scope.newTodo, editing: false });
      $scope.newTodo = ""; // Clear input
    }
  };

  // Delete a to-do
  $scope.deleteTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  // Edit a to-do
  $scope.editTodo = function (todo) {
    todo.editing = true;
  };

  // Save edited to-do
  $scope.saveEdit = function (todo) {
    todo.editing = false;
  };
});
