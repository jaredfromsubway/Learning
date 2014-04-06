'use strict';

angular.module('coffeeTime', [
    'ui.router',
    'ui.bootstrap',
    'coffeeTimeControllers',
    'coffeeTimeServices'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'partials/home.html'
                    },
                    'userStatList@home': {
                        templateUrl: 'partials/userStatList.html',
                        controller: 'userStatListController'
                    }
                }
            })
    }]);