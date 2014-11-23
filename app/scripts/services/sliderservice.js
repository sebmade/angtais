'use strict';

angular.module('angtais')
  .factory('sliderService', sliderService);

function sliderService($http) {
  return {
    getSlides: getSlides
  }
  function getSlides() {
    return $http.get('/data/slides.json').then(function(results) {
      return results.data;
    });

  }
}
