'use strict';

/* Controllers */
angular.module('myAppControllers', [])
    .controller('state2Controller', ['$scope','$stateParams', function($scope, $stateParams) {
        $scope.msg = 'weeeee';
    }])
    .controller('state2DetailController', ['$scope','$stateParams', 'Widget', function($scope, $stateParams, Widget) {
        $scope.testData = Widget.query({stuffID: $stateParams.anotherid});
        $scope.checkItID = $stateParams.anotherid;
    }])
    .controller('state3Controller', ['$scope', '$stateParams', function($scope, $stateParams){
        $scope.secondmsg = 'uhhhh';
        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: "Another alert!"});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }])
    .controller('state3DetailController', ['$scope', '$stateParams', function($scope, $stateParams){
        $scope.testid = $stateParams.testid;
    }])
;
