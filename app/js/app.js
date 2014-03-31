'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ui.router',
    'MyAppServices',
    'myAppControllers',
     'ui.bootstrap'

    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1");
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/partial1.html"
             })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/partial2.html",
                controller: 'state2Controller'
            })
            .state('state2.detail', {
                url: "/{anotherid}",
                templateUrl: "partials/partial2detail.html",
                controller: 'state2DetailController'
            })
            .state('state3', {
                url: '/state3',
                templateUrl: 'partials/partial3.html',
                controller: 'state3Controller'
            })
            .state('state3.detail', {
                url: '/{testid}',
                views: {
                    detail: {
                        controller: 'state3DetailController',
                        templateUrl: 'partials/partial4.html'
                    },
                    extradetail: {
                        controller: 'state3DetailController',
                        templateUrl: 'partials/partial5.html'
                    }

                }
            })
    }]);
