(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.LunchItems = "";
  $scope.finalMessage = "";
  $scope.messageColor = "";


$scope.checkIfTooMuch = function () {
    var foodItems = $scope.LunchItems.split(',');
    var noOfFoodItems = foodItems.length;
    console.log(foodItems);
    console.log(noOfFoodItems);
    if(noOfFoodItems <= 1){
    	$scope.finalMessage = "Please enter data first";
    	$scope.messageColor = "#FF0000";
    }

    else if(noOfFoodItems > 3){
    	$scope.finalMessage = "Too much!";

    }
    else{
    	$scope.finalMessage = "Enjoy!";
    	$scope.messageColor = "#008000";
    }
  };

  function removeEmptyStrings(foodItems){
  	var filteredFoodItems;
  	for(var foodItem in foodItems) {
  		if(foodItem != "")
  		{
  			filteredFoodItems.add(foodItem);
  		}
  	}
  		
  }

}
})();
