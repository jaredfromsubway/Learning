'use strict';

angular.module('coffeeTimeServices', ['ngResource'])
    .factory('userStatList', ['$resource', '$stateParams', function($resource, $stateParams){
        return $resource('data/userStatItems.json', {}, {
            read: {method:'GET', isArray: true}
        });
    }])
    .factory('userStatItem', ['$resource', '$stateParams', function($resource, $stateParams){
        return $resource('data/userStatItem:userID.json', {}, {
            read: {method:'GET'}
        });
    }]);