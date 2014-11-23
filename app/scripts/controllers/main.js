'use strict';

function MainCtrl() {
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
}

angular.module('angtais').controller('MainCtrl', MainCtrl);
