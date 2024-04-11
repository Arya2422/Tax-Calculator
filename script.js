const ageInput = document.getElementById('age');
const incomeInput = document.getElementById('income');
const extraIncomeInput = document.getElementById('extraIncome');
const deductionsInput = document.getElementById('deductions');
const ageErrorIcon = document.getElementById('ageError');
const incomeErrorIcon = document.getElementById('incomeError');
const extraIncomeErrorIcon = document.getElementById('extraIncomeError');
const deductionsErrorIcon = document.getElementById('deductionsError');
const submitBtn = document.getElementById('submitBtn');
const resultModal = document.getElementById('resultModal');
const overallIncomeElement = document.getElementById('overallIncome');
const taxResult = document.getElementById('taxResult');

document.getElementById('taxForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let isError = false;

  if (ageInput.value === '') {
    ageErrorIcon.style.display = 'inline';
    isError = true;
  } else {
    ageErrorIcon.style.display = 'none';
  }

  if (incomeInput.value === '') {
    incomeErrorIcon.style.display = 'inline';
    isError = true;
  } else {
    incomeErrorIcon.style.display = 'none';
  }

  if (extraIncomeInput.value === '') {
    extraIncomeErrorIcon.style.display = 'inline';
    isError = true;
  } else {
    extraIncomeErrorIcon.style.display = 'none';
  }

  if (deductionsInput.value === '') {
    deductionsErrorIcon.style.display = 'inline';
    isError = true;
  } else {
    deductionsErrorIcon.style.display = 'none';
  }

  if (!isError) {
    const income = parseFloat(incomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value);
    const deductions = parseFloat(deductionsInput.value);
    const age = ageInput.value;

    let overallIncome = income + extraIncome - deductions;
    overallIncomeElement.textContent = `Your overall income will be  ${overallIncome} after deductions`;

    let tax = 0;

    if (overallIncome > 800000) {
      if (age === '<40') {
        tax = 0.3 * (overallIncome - 800000);
      } else if (age === '>=40&<60') {
        tax = 0.4 * (overallIncome - 800000);
      } else if (age === '>=60') {
        tax = 0.1 * (overallIncome - 800000);
      }
    }

    taxResult.textContent = `Tax: ${tax} Lakhs`;
    resultModal.style.display = 'block';
  }
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  resultModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == resultModal) {
    resultModal.style.display = 'none';
  }
});