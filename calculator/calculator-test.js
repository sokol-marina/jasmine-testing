
describe('calculateMonthlyPayment', function() { 
  let originalGetCurrentUIValues;
  beforeEach(function() {
  
    originalGetCurrentUIValues = window.getCurrentUIValues;
  
    window.getCurrentUIValues = function() {
      return {
        amount: 100000, 
        years: 30, 
        rate: 4.5 
      };
    };
  });

  // Cleanup after each test
  afterEach(function() {
    // Restore the original getCurrentUIValues function
    window.getCurrentUIValues = originalGetCurrentUIValues;
  });
  it('should calculate the monthly rate correctly', function () {
    let expectedPayment = '506.69';
    let calculatedPayment = calculateMonthlyPayment();
    
    expect(calculatedPayment).toEqual(expectedPayment);
  expect()
});


it("should return a result with 2 decimal places", function() {
  let result = calculateMonthlyPayment();
  let twoDecimalPlacesRegex = /^\d+\.\d{2}$/;
  expect(result).toMatch(twoDecimalPlacesRegex);
});
})
/// etc
