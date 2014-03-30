'use strict';

angular.module('MyServices', ['ngResource'])
    .factory('Widget', ['$resource', function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);