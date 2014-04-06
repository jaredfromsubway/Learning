'use strict';

angular.module('coffeeTimeControllers', [])
    .controller('userStatListController', ['$scope','$stateParams', 'userStatList', function($scope, $stateParams, userStatList){
        angular.forEach(userStatList, function (value, key) {

            userStatList[key].fullName = userStatList[key].firstName + ' ' + userStatList[key].lastName;
        });
        $scope.userStatItems = userStatList;
    }])
    .controller('userStatItemController', ['$scope','$stateParams', 'userStatItem', function($scope, $stateParams, userStatItem){
        $scope.userStatItem = userStatItem.read({userID: 1}, function(){
            $scope.userStatItem.fullName = $scope.userStatItem.firstName + ' ' + $scope.userStatItem.lastName;
        });
    }]);

