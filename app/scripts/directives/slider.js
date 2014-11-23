'use strict';

function Slider() {
  return {
    templateUrl: 'views/main.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {

    }
  };
}

angular.module('angtais').directive('slider', Slider);
