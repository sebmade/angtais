'use strict';

describe('Service: sliderService', function () {

  // load the service's module
  beforeEach(module('angtaisApp'));

  // instantiate service
  var sliderService;
  beforeEach(inject(function (_sliderService_) {
    sliderService = _sliderService_;
  }));

  it('should do something', function () {
    expect(!!sliderService).toBe(true);
  });

});
