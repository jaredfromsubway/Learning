'use strict';

angular.module('MyAppServices', ['ngResource'])
    .factory('Widget', ['$resource', '$stateParams', function($resource, $stateParams){
        return $resource('data/randomstuff:stuffID.json', {}, {
            query: {method:'GET'}
        });
    }]);