/*
Calculate average score for each team
Decide which team has the highest score and print the winner
*/

let johnTeamScores = [89, 128, 103]
let mikeTeamScores = [118, 94, 123]
let maryTeamScores = [97, 134, 105]

// 1. Calculate average score for each team
function averageScore (scoresArray) {
  let totalScore = scoresArray.reduce((a, b) => a + b, 0)
  let averageScore = totalScore / scoresArray.length
  return Math.round(averageScore)
}

let averageScoreJohn = averageScore(johnTeamScores) // 104
let averageScoreMike = averageScore(mikeTeamScores) // 111
let averageScoreMary = averageScore(maryTeamScores) // 112

console.log(averageScoreJohn, averageScoreMike, averageScoreMary)

// 2. Decide which team has the highest average and print the winner
if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
  console.log(`John's team is the winner, their average score is ${averageScoreJohn}`)
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
  console.log(`Mike's team is the winner, they have the highest average score: ${averageScoreMike}`)
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
  console.log(`Mary's team is the winner with an average of ${averageScoreMary} points`)
} else {
  console.log(`It's a draw!`)
}

// function highestScore (scores) {
//   let averageScores = Object.values(arguments) // make an array of an object
//   let defaultScore = averageScores[0] // the number to compare against

//   if (arguments.length > 0) { // more than one number so get the highest
//     averageScores.forEach(function (score) {
//       if (score > defaultScore) {
//         defaultScore = score
//       }
//     })
//     console.log(`highest score is ${defaultScore}`)
//   }
// }
// highestScore(averageScoreJohn, averageScoreMike, averageScoreMary)
