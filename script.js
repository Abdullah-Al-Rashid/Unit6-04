let height = 0
let baseA = 0
let baseB = 0

document.getElementById('calculate').addEventListener('click', findOut)

function findOut () {
  height = document.getElementById('height').value
  height = parseInt(height)
  baseA = document.getElementById('baseA').value
  baseA = parseInt(baseA)
  baseB = document.getElementById('baseB').value
  baseB = parseInt(baseB)
  number = [(baseA + baseB) / 2] * height
  alert(number)
}
