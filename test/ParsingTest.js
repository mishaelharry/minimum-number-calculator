describe("Input Parsing", function() {

  var Parsing;

  beforeEach(function () {
    var $injector = angular.injector([ 'minimumApp' ]);
    Parsing = $injector.get( 'Parsing' );
  });

  describe("Digit(s)", function() {
    it("'4' should return 4", function() {
      expect(Parsing.convert('4')).toEqual(4);
    });
    it("'85' should return 85", function() {
      expect(Parsing.convert('85')).toEqual(85);
    });
  });

  describe("Pence symbol", function() {
    it("'197p' should return 197", function() {
      expect(Parsing.convert('197p')).toEqual(197);
    });
    it("'2p' should return 2", function() {
      expect(Parsing.convert('2p')).toEqual(2);
    });
  });

  describe("Pounds decimal", function() {
    it("'1.87' should return 187", function() {
      expect(Parsing.convert('1.87')).toEqual(187);
    });
  });

  describe("Pounds symbol", function() {
    it("'£1.23' should return 123", function() {
      expect(Parsing.convert('£1.23')).toEqual(123);
    });
    it("'£4' should return 400", function() {
      expect(Parsing.convert('£4')).toEqual(400);
    });
    it("'£30' should return 3000", function() {
      expect(Parsing.convert('£30')).toEqual(3000);
    });
  });

  describe("Pound & pence decimal", function() {
    it("'£2.87p' should return 287", function() {
      expect(Parsing.convert('£2.87p')).toEqual(287);
    });
  });

  describe("Missing pence", function() {
    it("'£1p' should return 100", function() {
      expect(Parsing.convert('£1p')).toEqual(100);
    });
  });

  describe("Missing pence but present decimal point", function() {
    it("'£1.p' should return 100", function() {
      expect(Parsing.convert('£1.p')).toEqual(100);
    });
  });

  describe("Buffered zeros", function() {
    it("'002.41p' should return 241", function() {
      expect(Parsing.convert('002.41p')).toEqual(241);
    });
  });

  describe("Rounding three decimal places to two", function() {
    it("'4.235p' should return 424", function() {
      expect(Parsing.convert('4.235p')).toEqual(424);
    });
  });

  describe("Rounding with symbols", function() {
    it("'£1.257422457p' should return 126", function() {
      expect(Parsing.convert('£1.257422457p')).toEqual(126);
    });
  });
  
});