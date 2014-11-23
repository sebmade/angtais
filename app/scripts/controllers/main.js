'use strict';

MainCtrl.$inject = ['$scope', '$document'];

function MainCtrl($scope, $document) {
  var vm = this;
  vm.slideIndex = 0;
  vm.nextSlide = function () {
    vm.slideIndex++;
  };
  vm.previousSlide = function() {
    vm.slideIndex--;
  };
  vm.currentSlide = function () {
    return "slide"+vm.slideIndex+".html";
  };

  $document.keydown(function(event) {
    if (event.keyCode == 37) {
      $scope.$apply(function() {
        vm.previousSlide();
      });
    } else if (event.keyCode == 39) {
      $scope.$apply(function () {
        vm.nextSlide();
      });
    }
  });
}

angular.module('angtais').controller('MainCtrl', MainCtrl);
