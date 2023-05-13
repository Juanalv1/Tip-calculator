const billInput = document.querySelector('#bill')
const peopleInput = document.querySelector('#people-number')
const tipSpan = document.querySelector('#tip-span')
const totalSpan = document.querySelector('#total-span')
let tipPercentage 
let tipNumber
let totalNumber


const btn5 = document.querySelector('#btn-5')
const btn10 = document.querySelector('#btn-10')
const btn15 = document.querySelector('#btn-15')
const btn25 = document.querySelector('#btn-25')
const btn50 = document.querySelector('#btn-50')
const customTip = document.querySelector('#custom')

const btnReset = document.querySelector('#btn-reset')

billInput.addEventListener('input', () => {
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  } })
peopleInput.addEventListener('input', () => {
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  } 
})
btn5.addEventListener('click', () => {
  tipPercentage = 5
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  }
})
btn10.addEventListener('click', () => {
  tipPercentage = 10
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  }
})
btn15.addEventListener('click', () => {
  tipPercentage = 15
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  }
})
btn25.addEventListener('click', () => {
  tipPercentage = 25
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  }
})
btn50.addEventListener('click', () => {
  tipPercentage = 50
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } 
})
customTip.addEventListener('input', () => {
  tipPercentage = customTip.value
  if ((tipPercentage >= 1 && tipPercentage <= 100) && billInput.value > 1 && peopleInput.value > 0){
    calcTip()
  } else if (tipPercentage < 1 || tipPercentage > 100) {
    alert("Invalid %")
  }
})

btnReset.addEventListener('click', () =>{
  billInput.value = ''
  peopleInput.value = ''
  tipSpan.textContent = '--'
  totalSpan.textContent = '--'
})

function calcTip() {
  console.log('si')
  tipNumber = ((tipPercentage * billInput.value) / 100) / peopleInput.value;
  tipSpan.textContent = '$' + tipNumber
  totalNumber = (billInput.value / peopleInput.value) + tipNumber
  totalSpan.textContent = '$' + totalNumber
  } 
  

 