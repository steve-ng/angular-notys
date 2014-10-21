'use strict';

angular.module('staticApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'angular-noty'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/quickstart.html',
        controller: 'MainCtrl'
      })
      .when('/api/showNoty', {
        templateUrl: 'views/api/showNoty.html',
        controller: 'ShowNotyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
