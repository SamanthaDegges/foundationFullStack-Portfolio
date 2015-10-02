'use strict';

angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('portfolio', {url: '/', templateUrl: 'views/index.html'})
  .state('about', {url: '/about', templateUrl: 'views/about.html'})
  .state('contact', {url: '/contact', templateUrl: 'views/contact.html'})


});
