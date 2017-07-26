'use strict';

minimumApp.controller('MinimumController', function($scope, Validation, Parsing, Calculation){

	$scope.totalAmount = [];
	$scope.errorToggle = "";
	$scope.resultTogle = true;
	
    //Minimum number of sterling coins calculation.
    minimumCoin.sterlingCoinCalc = function () {
        
        var input = document.getElementById('amount').value;
        
        // Validate the users input
        var response = Validation.validateInput(input);
        if (response.status === true) {
          
           // Parse the users input to an amount of pennies (float)
            var amount = Parsing.convert(input);

            // Calculate the minimum number of sterling coins
            var results = Calculation.minimumCoinsCal(amount);

            $scope.resultTogle = false;
            $scope.errorToggle = "";

            return results;
        } else {
            $scope.resultTogle = true;
            $scope.errorToggle = response.message;

            return [];
        }
    };

    //Return the result within an array object
    minimumCoin.getResult = function () {
        var array = minimumCoin.sterlingCoinCalc();
        var result = [];
        
        angular.forEach(array, function(value, key) {
            this.push({coin: Parsing.transformKey(key), amount: array[key]});
        }, result);
        
        return result;
    };

    //Show or hide result and error display
    $scope.textChanged = function() {
        if ($scope.amount.length == 0){
        	$scope.resultTogle = true;

        } else {
        	$scope.resultTogle = false;
        } 
    };

    //Define an initial function for minimum coin calculator
    $scope.initialize = function () {
        $scope.totalAmount = minimumCoin.getResult();
    };
	
});