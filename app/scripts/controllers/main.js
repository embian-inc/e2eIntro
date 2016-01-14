'use strict';

/**
 * @ngdoc function
 * @name e2eIntroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the e2eIntroApp
 */
angular.module('e2eIntroApp').controller('MainCtrl', function () {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  this.addTodo = function() {
    this.todos.push(this.todo);
  };


  this.todos = ['item1', 'item2', 'item3'];
});
