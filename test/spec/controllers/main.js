'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angtais'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MainCtrl = $controller('MainCtrl');
  }));

  it('should increment to next slide', function () {
    expect(MainCtrl.slideIndex).toBe(1);
  });
});
