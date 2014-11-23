'use strict';

function MainCtrl() {
  this.slideIndex = 0;
  this.nextSlide = function () {
    this.slideIndex++;
  };
  this.previousSlide = function() {
    this.slideIndex--;
  };
  this.currentSlide = function () {
    return "slide"+this.slideIndex+".html";
  };
}

angular.module('angtais').controller('MainCtrl', MainCtrl);
