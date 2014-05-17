'use strict';

angular.module('coffeeTimeControllers', [])
    .controller('userStatListController', ['$scope','$stateParams', 'userStatList', function($scope, $stateParams, userStatList){
        this.getHealthIconsMeta = function(iRelativeHealth){
            var aIcons = [];
            var iStep = 10;
            for (var i = iStep; i <= 100; i = i + iStep){
                var oIcon = {};
                oIcon.hasRelativeHealth = iRelativeHealth > i - iStep ? true : false;
                if (oIcon.hasRelativeHealth && iRelativeHealth < i){
                    oIcon.healthPercentage = (i % iRelativeHealth) * 10 + '%';
                }
                else if (!oIcon.hasRelativeHealth){
                    oIcon.healthPercentage = '100%';
                }
                else{
                    oIcon.healthPercentage = '0%';
                }
                aIcons.push(oIcon);
            }
            return aIcons;
        }

        angular.forEach(userStatList, function (value, key) {
            userStatList[key].fullName = userStatList[key].firstName + ' ' + userStatList[key].lastName;
            userStatList[key].healthIconsMeta = this.getHealthIconsMeta(userStatList[key].health);
        }, this);
        $scope.userStatItems = userStatList;
    }])

    .controller('coffeeCarousel', ['$scope', '$stateParams', function($scope, $stateParams){
        $scope.userUploadedImagePaths = ['img/coffee1.jpg', 'img/coffee2.jpg', 'img/coffee3.jpg'];
    }])


    .controller('userStatItemController', ['$scope','$stateParams', 'userStatItem', function($scope, $stateParams, userStatItem){
        $scope.userStatItem = userStatItem.read({userID: 1}, function(){
            $scope.userStatItem.fullName = $scope.userStatItem.firstName + ' ' + $scope.userStatItem.lastName;
        });
    }]);

