'use strict';

angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('pet-index', {
            url: '/pets',
                views: {
                    'pets-tab': {
                        templateUrl: 'templates/pet-index.html',
                        controller: 'PetIndexCtrl'
                    }
                }
            })
            .state('pet-detail', {
            url: '/pet/',
                views: {
                    'pets-tab': {
                        templateUrl: 'templates/pet-detail.html',
                        controller: 'PetDetailCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/pets');
    });
