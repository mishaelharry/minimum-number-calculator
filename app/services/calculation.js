'use strict';
/*
 Service that calculates minimum number of coins needed to make given amount.
*/

minimumApp.service('Calculation', function Calculation(){
	var self = this;

	// Currency denominations for the calculation
	self.denominations = [200, 100, 50, 20, 10, 5, 2, 1];

	// Calculates the minimum number of sterling coins needed to make amount
	self.minimumCoinsCal = function (pennies) {
		var results = {},
        currentCoin;

	    // Init of counter, to hold index of coin
	    var x = 0;
	    // While the number of pennies != 0
	    while (pennies) {
	      // Get the next coin from denominations array
	      currentCoin = self.denominations[x++];
	      // If the coin is smaller/equal to the current # of pennies
	      if (pennies >= currentCoin) {
	        results[currentCoin] = self.numberOfSterlingCoins(pennies, currentCoin);
	        pennies = self.remainingPennies(pennies, currentCoin);
	      }
	    }
        return results;
	};

	// Calculates the number of whole sterling coins.
	self.numberOfSterlingCoins = function (pennies, coin) {
        return Math.floor(pennies / coin);
	};

	// Using modules to calculate the number of remaining pennies.
	self.remainingPennies = function (pennies, coin) {
        return pennies % coin;
	};

});