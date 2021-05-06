let basea = 0
let baseb = 0
let height = 0
let number = 0 

document.getElementById('calculate').addEventListener('click', findOut)

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
