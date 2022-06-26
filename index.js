/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("Length")
let volumeEl = document.getElementById("Volume")
let massEl = document.getElementById("Mass")




convertBtn.addEventListener("click",function(){
  let input = Number(inputEl.value)
  const lengthConversion = `${input} meters = ${(input*3.281).toFixed(3)} feet | ${input} feet = ${(input/3.281).toFixed(3)} meters`
  const volumeConversion = `${input} liters = ${(input*0.264).toFixed(3)} gallons | ${input} gallons = ${(input/0.264).toFixed(3)} liters` 
  const massConversion = `${input} kilos = ${(input*2.204).toFixed(3)} pounds | ${input} pounds = ${(input/2.204).toFixed(3)} kilos` 
  lengthEl.innerHTML = `<p class="paragraph-set">${lengthConversion}<p>`
  volumeEl.innerHTML = `<p class="paragraph-set">${volumeConversion}<p>`
  massEl.innerHTML = `<p class="paragraph-set">${massConversion}<p>`
})

function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
      return false;
  return true;
}