'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ui.router',
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
            .state('state3', {
                url: '/state3',
                templateUrl: 'partials/partial3.html',
                controller: 'state3Controller'
            })
            .state('state3.detail', {
                url: '/{testid}',
                templateUrl: 'partials/partial4.html',
                controller: 'state3DetailController'
//                views: {
//                    'detail': {
//                        url: '/{id}',
//                        templateUrl: 'partials/partial4.html'
//                    }
//                }
            })
    }]);
