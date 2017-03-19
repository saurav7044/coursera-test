(function () {
'use strict';

angular.module('FoodAssign', [])
.controller('FOODController', FOODController);

function FOODController($scope) {

$scope.CheckFoodConsumed = function () {

$scope.customStyle = {};
$scope.customBorderStyle = {};

  if ($scope.name != null && $scope.name != "") {
    $scope.customStyle.style = {"color":"green"};
    $scope.customBorderStyle.style = {"border-color": "green"};
    if ($scope.name.split(",").length <= 3) {
    $scope.result = "Enjoy!"
      return $scope.result;
    }
    else
    {
      $scope.result = "Too much!"
        return $scope.result;
    }
  }
  else {
    $scope.customBorderStyle.style = {"border-color": "red"};
    $scope.customStyle.style = {"color":"red"};
    $scope.result = "Please enter data first"
      return $scope.result;
  }

}

}



})();
