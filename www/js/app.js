'use strict';

angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('detail', {
                url: '/detail',
                templateUrl: 'templates/detail.html',
                controller: 'DetailCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });
