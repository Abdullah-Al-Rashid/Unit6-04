// Giving all the variables the value of zero so that user can input his own 
let basea = 0
let baseb = 0
let height = 0
let number = 0
// Event listener for the "Find Out" button so that when the user clicks, he or she recieves an answer 
document.getElementById('calculate').addEventListener('click', findOut)
// functions for how the number inputed by the user should be calculated
function findOut () {
  height = document.getElementById('height').value
  height = parseInt(height)
  basea = document.getElementById('base-a').value
  basea = parseInt(basea)
  baseb = document.getElementById('base-b').value
  baseb = parseInt(baseb)
  number = [(basea + baseb) / 2] * height
  alert(number)
}
