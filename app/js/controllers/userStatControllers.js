'use strict';

angular.module('coffeeTimeControllers', [])
    .controller('userStatListController', ['$scope','$stateParams', 'userStatList', function($scope, $stateParams, userStatList){
        this.getHealthIcons = function(iRelativeHealth){
            var aIcons = [];
            var iStep = 10;
            for (var i = iStep; i <= 100; i = i + iStep){
                var oIcon = {};
                oIcon.hasHealth = iRelativeHealth > i - iStep ? true : false;
                oIcon.opacity = 1;
                if (oIcon.hasHealth && iRelativeHealth < i){
                    console.log(iRelativeHealth);
                    console.log(i);
                    oIcon.opacity = (iStep - (i % iRelativeHealth)) / iStep;
                }
                aIcons.push(oIcon);
            }
            return aIcons;
        }

        angular.forEach(userStatList, function (value, key) {
            userStatList[key].fullName = userStatList[key].firstName + ' ' + userStatList[key].lastName;
            userStatList[key].healthIconsMeta = this.getHealthIcons(userStatList[key].health);
        }, this);
        $scope.userStatItems = userStatList;
    }])



    .controller('userStatItemController', ['$scope','$stateParams', 'userStatItem', function($scope, $stateParams, userStatItem){
        $scope.userStatItem = userStatItem.read({userID: 1}, function(){
            $scope.userStatItem.fullName = $scope.userStatItem.firstName + ' ' + $scope.userStatItem.lastName;
        });
    }]);

