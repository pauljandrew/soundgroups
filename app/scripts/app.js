'use strict';

angular.module('soundgroupsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/callback', {
        templateUrl: 'callback.html'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
