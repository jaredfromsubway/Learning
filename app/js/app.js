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
                abstract: true,
                url: '/home',
                templateUrl: 'partials/home.html'
            })
            .state('home.details', {
                url: '', //active when home is active
                views: {
                   'userStatList': {
                        templateUrl: 'partials/userStatList.html',
                        controller: 'userStatListController'
                    }
                }
            })
    }]);