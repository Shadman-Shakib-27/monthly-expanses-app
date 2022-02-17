document.getElementById('calculate-btn').addEventListener('click',function(){
   //  Total Expenses Part
   const foodInput = document.getElementById('food-input').value;
   foodInput.value = '';

   const rentsInput = document.getElementById('rents-input').value;
   rentsInput.value = '';

   const clothInput = document.getElementById('cloth-input').value;
   clothInput.value = '';

   const totalexpense = parseFloat(foodInput) + parseFloat(rentsInput) + parseFloat(clothInput);

   const FinalTotalExpense = document.getElementById('total-expense');
   FinalTotalExpense.innerText = parseFloat(totalexpense.toFixed(2));

   const incomeInput = document.getElementById('income-input').value;
   const balance = document.getElementById('balance');
   balance.innerText = parseFloat(incomeInput) - parseFloat(totalexpense);
})
// Bonus Part
document.getElementById('interest-button').addEventListener('click',function(){
   
   const incomeInput = document.getElementById('income-input').value;
   const interest = document.getElementById('interest').value;
   let totalInterest = parseFloat(incomeInput) *  parseFloat(interest)/100; 

   const savings = document.getElementById('savings');
   savings.innerText = totalInterest;

   const remainingBalance = document.getElementById('remaining-balance');
   remainingBalance.innerText = balance.innerText - totalInterest;
})