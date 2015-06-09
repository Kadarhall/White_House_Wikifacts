'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['leaflet-directive', 'ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'MainController',
    	templateUrl: 'views/main.html'
  	})
  	.when('/about', {
    	controller: 'AboutController',
    	templateUrl: 'views/about.html'
  	})
  	.otherwise({
      redirectTo: '/'
    });
});