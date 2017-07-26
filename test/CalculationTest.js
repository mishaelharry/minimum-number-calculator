describe("Calculating Minimum Coins", function() {
  var results;

  var Calculation;

  beforeEach(function () {
    var $injector = angular.injector([ 'minimumApp' ]);
    Calculation = $injector.get( 'Calculation' );
  });

  beforeEach(function() {
    results = {};
  });

  it("58 should equal {'50':1, '5':1, '2':1, '1':1}", function() {
    results['50'] = 1;
    results['5'] = 1;
    results['2'] = 1;
    results['1'] = 1;
    expect(Calculation.minimumCoinsCal(58)).toEqual(results); 
  });

  it("133 should equal {'100':1, '20':1, '10':1, '2':1, '1':1}", function() {
    results['100'] = 1;
    results['20'] = 1;
    results['10'] = 1;
    results['2'] = 1;
    results['1'] = 1;
    expect(Calculation.minimumCoinsCal(133)).toEqual(results); 
  });

  it("266 should equal {'200':1, '50':1, '10':1, '5':1, '1':1}", function() {
    results['200'] = 1;
    results['50'] = 1;
    results['10'] = 1;
    results['5'] = 1;
    results['1'] = 1;
    expect(Calculation.minimumCoinsCal(266)).toEqual(results); 
  });

  it("200 should equal {'200':1}", function() {
    results['200'] = 1;
    expect(Calculation.minimumCoinsCal(200)).toEqual(results); 
  });

  it("400 should equal {'400':2}", function() {
    results['200'] = 2;
    expect(Calculation.minimumCoinsCal(400)).toEqual(results); 
  });

  it("600 should equal {'400':3}", function() {
    results['200'] = 3;
    expect(Calculation.minimumCoinsCal(600)).toEqual(results); 
  });

});