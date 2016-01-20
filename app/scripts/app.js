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
      .otherwise({
        redirectTo: '/'
      });
  });
