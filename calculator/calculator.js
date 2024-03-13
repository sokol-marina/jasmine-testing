window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = "350000"
  document.getElementById("loan-years").value = "20"
  document.getElementById("loan-rate").value = '3.5'
  updateMonthly();
 }

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
  let  currentValues = getCurrentUIValues()
  let P = currentValues.amount
  let i = currentValues.rate /100 / 12
  let n = currentValues.years*12
  return ((P*i)/(1 - Math.pow(1+i, -n))).toFixed(2) ;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
 const UIMonthlyPayment = document.getElementById("monthly-payment");
 let payment = calculateMonthlyPayment();
 UIMonthlyPayment.innerHTML = ''; 

 let resultElement = document.createElement('div');
 resultElement.textContent = `$${payment}`;
 UIMonthlyPayment.appendChild(resultElement);

}


