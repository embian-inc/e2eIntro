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
  .controller('appController', function ($scope, $location, $anchorScroll){
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.goTop = function (){
      $location.hash('body');
      $anchorScroll.yOffset=200;
      $anchorScroll();
    }

    $(window).scroll(function(){
      var height = $(window).scrollTop();
      var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if (height > 150 && scrollBottom > 40 ){
        $(".nav-top").addClass("show");
      } else {
        $(".nav-top").removeClass("show");
      }


    });
  });
