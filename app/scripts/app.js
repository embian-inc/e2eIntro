'use strict';

/**
 * @ngdoc overview
 * @name e2eIntroApp
 * @description
 * # e2eIntroApp
 *
 * Main module of the application.
 */
angular
  .module('e2eIntroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'fancyboxplus'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/document', {
        templateUrl: 'views/document.html',
        controller: 'DocumentCtrl',
        controllerAs: 'document'
      })
      .when('/feature', {
        templateUrl: 'views/feature.html',
        controller: 'FeatureCtrl',
        controllerAs: 'feature'
      })
      .when('/architecture', {
        templateUrl: 'views/architecture.html',
        controller: 'ArchitectureCtrl',
        controllerAs: 'architecture'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('appController', function ($scope, $location){
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
