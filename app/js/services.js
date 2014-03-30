'use strict';

angular.module('MyAppServices', ['ngResource'])
    .factory('Widget', ['$resource', function($resource){
        return $resource('data/randomstuff.json', {}, {
            query: {method:'GET'}
        });
    }]);