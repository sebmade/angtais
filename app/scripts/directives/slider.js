'use strict';

function Slider() {
  return {
    templateUrl: 'views/slider.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {

    }
  };
}

angular.module('angtais').directive('slider', Slider);
