/*
BMI Calculator
Mark and John are trying to calculate their BMI
BMI = mass / height^2 = mass / (height * height)
Mass in KG, Height in metres

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing variables from step 3. (Something like "Is Mark's BMI higher than John? true")
*/

// Mark 5'8" (1.72m), 80kg
let Mark = {
  weight: 80,
  height: 1.72
}

// John 6'3" (1.9m), 95kg
let John = {
  weight: 95,
  height: 1.9
}

// BMI = mass / height^2 = mass / (height * height) 
function bmi (weight, height) {
  let bmi = weight / (height * height)
  return bmi
}

let MarkBMI = bmi(Mark.weight, Mark.height)
let JohnBMI = bmi(John.weight, John.height)

console.log(`Mark's BMI is ${MarkBMI}, while John's BMI is ${JohnBMI}`)

let isMarkBMIHigher = MarkBMI > JohnBMI

console.log(`Is Mark's BMI higher than John's BMI? ${isMarkBMIHigher}`)
