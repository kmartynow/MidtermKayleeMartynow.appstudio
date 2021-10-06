

btnRange.onclick = function() {
  let Num1 = Number(inptNum1.value)
  let Num2 = Number(inptNum2.value)
lblOutput.value = range(Num1, Num2)
}

btnStop.onclick = function() {
  lblOutput.value = " "
  inptNum1.value = " "
  inptNum2.value = " "
}

