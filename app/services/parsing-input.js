'use strict';
/*
  Service that convert user input from String to Float value.
*/

minimumApp.service('Parsing', function Parsing(){
	var self = this;

	//Converts a String to a Float.
	self.convert = function(value) {
		//Hold state, if string contains pound sign.
	    var convert = false;
	    if (this.isPound(value)) {
	      convert = true;
	    }

	    value = this.removeNonNumeric(value);

	    var num = parseFloat(value);
	    // If Float is a decimal or orignal String contained a pound sign,
	    // then convert from pounds to pennies.
	    if (this.isDecimal(num) || convert) {
	      num = this.convertToPennies(num);
	    }
	    return num;
	};

	//Check if input contains a £ character
	self.isPound = function (value) {
        return (value.indexOf('£') !== -1);
	};

	//Remove '£' or 'p' sign from String
	self.removeNonNumeric = function (value) {
        return value.replace(/[£p]+/g, '');
	};

	//Check if Float is decimal
	self.isDecimal = function (value) {
        return (value % 1 !== 0);
	};

	//Convert pounds to pennies
	self.convertToPennies = function (value) {
        return (value.toFixed(2) * 100);
	};

	//Convert a key to human readable value
	self.transformKey = function (key) {
	    if (key === '100' || key === '200') {
	      key = '£' + key[0];
	    } else {
	      key += 'p';
	    }
	    return key;
	};

});