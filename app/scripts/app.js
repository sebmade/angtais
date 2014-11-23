'use strict';

angular.module('angtais', ['ngSanitize', 'ngAnimate', 'ngRoute'])
  .config(config);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
}
