'use strict';

MainCtrl.$inject = ['$scope', '$document', 'slides'];

function MainCtrl($scope, $document, slides) {
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
  vm.addSlide = function(title, content) {
    vm.slides.push({
      title: title,
      content: content
    })
  };

  vm.slides = slides;

  activate();

  function activate() {
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
