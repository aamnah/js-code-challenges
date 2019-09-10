function factorial(n) {
  // factorials are products of all the numbers from 1 till n
  let number = n
  let factorial = n

  while (number > 1) {
    factorial = factorial * (number - 1)
    number--
  }
  return factorial
}

factorial(9) // 362880
factorial(3) // 6
factorial(1) // 1
factorial(5) // 120
factorial(10) // 3628800
