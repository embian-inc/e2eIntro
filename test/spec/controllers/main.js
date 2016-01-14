'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('e2eIntroApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

<<<<<<< HEAD
  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.todos.length).toBe(3);
  });
=======
  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(MainCtrl.awesomeThings.length).toBe(3);
  //});
>>>>>>> d5228a247fb672406e7f61cc99e1a8a8d6210447
});
