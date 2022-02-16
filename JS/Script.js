document.getElementById('calculate-btn').addEventListener('click',function(){
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
   const balanceAmount = balance.innerText; 
   balance.innerText = parseFloat(incomeInput) - parseFloat(totalexpense);
})

document.getElementById('interest-button').addEventListener('click',function(){
   // Problem
   const incomeInput = document.getElementById('income-input').value;
   const interest = document.getElementById('interest').value;
   const totalInterest = parseFloat(incomeInput) / parseFloat(interest); 
   const savings = document.getElementById('savings');
   savings.innerText = totalInterest;

   const remainingBalance = document.getElementById('remaining-balance');
   remainingBalance.innerText = balance.innerText - totalInterest;
})