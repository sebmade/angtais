'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angtais'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MainCtrl = $controller('MainCtrl', {$scope: scope});
  }));

  it('should increment to next slide', function () {
    MainCtrl.slideIndex = 0;
    MainCtrl.nextSlide();
    expect(MainCtrl.slideIndex).toBe(1);
  });

  it('should decrement to next slide', function () {
    MainCtrl.slideIndex = 1;
    MainCtrl.previousSlide();
    expect(MainCtrl.slideIndex).toBe(0);
  });
});
