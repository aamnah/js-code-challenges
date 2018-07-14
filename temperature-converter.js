/*
Grade Calculator
Args: student score, total possible score
Output: 15/20 -> You got a C (75%)!
Grading Criteria: A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
*/

function gradeCalculator (score, total) {
  let percentage = (score / total) * 100
  let grade

  if (percentage >= 90) {
    grade = 'A'
  } else if (percentage >= 80) {
    grade = 'B'
  } else if (percentage >= 70) {
    grade = 'C'
  } else if (percentage >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  console.log(`You got ${grade} (${Math.round(percentage)}%)!`)

  return `You got ${grade} (${Math.round(percentage)}%)!`
}

gradeCalculator(30, 100) // 30% F
gradeCalculator(90, 100) // 90% A
gradeCalculator(40, 50) // 80% B
gradeCalculator(15, 20) // 75% C
gradeCalculator(19, 30) // 63% D
