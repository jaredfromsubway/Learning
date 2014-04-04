'use strict';

angular.module('coffeeTimeControllers', [])
    .controller('userStatListController', ['$scope','$stateParams', 'userStatList', function($scope, $stateParams, userStatList){
        $scope.userStatItems = userStatList.read();
    }])
    .controller('userStatItemController', ['$scope','$stateParams', 'userStatItem', function($scope, $stateParams, userStatItem){
        $scope.userStatItem = userStatItem.read({userID: 1}, function(){
            $scope.userStatItem.fullName = $scope.userStatItem.firstName + ' ' + $scope.userStatItem.lastName;
        });
    }]);

