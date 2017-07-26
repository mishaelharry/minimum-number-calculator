'use strict';

minimumApp.service('Validation', function Validation(){
	var self = this;

	//Validates any string value	
	self.validateInput = function(value) {
		value = this.removeWhitespace(value);

	    var response = {
	      'status': false,
	      'message': ''
	    };

	    if (!value) {
	      response.message = 'Your input contains no values.';
	    } else if (value === '0'){
	      response.message = 'Number of pennies must be greater than 0.';
	    } else if (this.containsAlpha(value)) {
	      response.message = 'Your input contains unaccepted non-numerical characters.';
	    } else if (this.containsNoNumeric(value)) {
	      response.message = 'Your input contains no numbers.';
	    } else {
	      response.status = true;
	    }

	    return response;
	};

	//Remove all whitespace in a string
	self.removeWhitespace = function (value) {
        return value.replace(/\s+/g, '');
	};

	//Check if a string contains other character than '£', 'p', '.', '0-9'
	self.containsAlpha = function (value) {
		var regex = /[^£.p\d]/g;
        return regex.test(value);
	};

	//Check if a string contains no numerical value (0-9)
	self.containsNoNumeric = function (value) {
		var regex = /\d+/g;
        return !regex.test(value);
	};

});