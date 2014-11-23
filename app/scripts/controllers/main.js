'use strict';

MainCtrl.$inject = ['$scope', '$document', '$http'];

function MainCtrl($scope, $document, $http) {
  var vm = this;
  vm.slideIndex = 0;
  vm.nextSlide = function () {
    vm.slideIndex++;
  };
  vm.previousSlide = function() {
    vm.slideIndex--;
  };
  vm.currentSlide = function () {
    return vm.slides[vm.slideIndex].content;
  };
  vm.gotoSlide = function(s) {
    vm.slideIndex = vm.slides.indexOf(s);
  };
  vm.now = new Date();

  vm.slides = [];

  activate();

  function activate() {
    $http.get('/data/slides.json').success(function(data) {
      vm.slides = data;
    });

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

}

angular.module('angtais').controller('MainCtrl', MainCtrl);
