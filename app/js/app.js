'use strict';

angular.module('coffeeTime', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'coffeeTimeControllers',
    'coffeeTimeServices'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('root',{
                url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'partials/header.html'
                    }
                }
            })

            .state('root.home', {
                url: '/home',
                resolve: {
                    userStatList: ['userStatListService', function (userStatListService) {
                        return userStatListService.read().$promise;
                    }]
                },
                views: {
                    'container@': {
                        templateUrl: 'partials/home.html'
                    },
                    'coffeeCarousel@root.home':{
                        templateUrl: 'partials/coffeeCarousel.html',
                        controller: 'coffeeCarousel'
                    },
                    'userStatList@root.home': {
                        templateUrl: 'partials/userStatList.html',
                        controller: 'userStatListController'
                    }
                }
            })

            .state('root.auth', {
                abstract: true,
                views: {
                    'container@': {
                        templateUrl: 'partials/auth.html'
                    }
                }
            })

            .state('root.auth.login', {
                url: '/login',
                views: {
                    'authHeader': {
                        templateUrl: 'partials/auth/login/header.html'
                    },
                    'authFooter': {
                        templateUrl: 'partials/auth/login/footer.html'
                    }
                }
            })

            .state('root.auth.signup', {
                url: '/singup',
                views: {
                    'authHeader': {
                        templateUrl: 'partials/auth/signup/header.html'
                    }
                }
            })

            .state('root.about', {
                url: '/about',
                views: {
                    'container@': {
                        templateUrl: 'partials/about.html'
                    }
                }
            })
    }]);