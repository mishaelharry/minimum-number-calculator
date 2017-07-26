describe("Input Validation", function() {
  var response;

  var Validation;

  beforeEach(function () {
    var $injector = angular.injector([ 'minimumApp' ]);
    Validation = $injector.get( 'Validation' );
  });
  
  beforeEach(function () {
    response = {
      'status': false,
      'message': ''
    };
  });

  describe("Empty string", function() {
    it("to fail with error 'Your input contains no values.'", function() {
      response.message = 'Your input contains no values.';
      expect(Validation.validateInput('')).toEqual(response);
    });
  });

  describe("'0'", function() {
    it("to fail with error 'Number of pennies must be greater than 0.'", function() {
      response.message = 'Number of pennies must be greater than 0.';
      expect(Validation.validateInput('0')).toEqual(response);
    });
  });

  describe("'£p'", function() {
    it("to fail with error 'Your input contains no numbers.'", function() {
      response.message = 'Your input contains no numbers.';
      expect(Validation.validateInput('£p')).toEqual(response);
    });
  });
  
  describe("Non-Numerical Characters", function() {

    describe("'1x'", function() {
      it("to fail with error 'Your input contains unaccepted non-numerical characters.'", function() {
        response.message = 'Your input contains unaccepted non-numerical characters.';
        expect(Validation.validateInput('1x')).toEqual(response);
      });
    });

    describe("'£1x.0p'", function() {
      it("to fail with error 'Your input contains unaccepted non-numerical characters.'", function() {
        response.message = 'Your input contains unaccepted non-numerical characters.';
        expect(Validation.validateInput('£1x.0p')).toEqual(response);
      });
    });

  });

});