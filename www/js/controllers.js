'use strict';

angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope) {

        $scope.leftButtons = [{
            type: 'button-positive',
            content: '<i class="icon ion-navicon"></i>',
            tap: function(e) {

            }
        }];

        $scope.rightButtons = [{
            type: 'button-clear',
            content: '<i class="icon ion-navicon"></i>',
            tap: function(e) {

            }
        }];

        $scope.items = [
            'one',
            'two',
            'three'
        ];

    })

    .controller('DetailCtrl', function($scope, $stateParams) {

    });
