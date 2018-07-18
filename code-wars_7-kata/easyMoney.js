// You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

// To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

// Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

// If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
// If we don't have to contribute any time to the project then return "Easy Money!"

function workNeeded(projectMinutes, freelancers)
{
 
 let totalMinutes = 0
 freelancers.map((ele) => {
   console.log(freelancers[0])
 totalMinutes += ele[0] * 60 + ele[1]
 })
 console.log(totalMinutes)
 if (totalMinutes >= projectMinutes){
   return "Easy Money!"
 }
 else {
    console.log(totalMinutes)
    projectMinutes -= totalMinutes
     console.log(projectMinutes)
     return `I need to work ${~~(projectMinutes / 60)} hour(s) and ${projectMinutes % 60} minute(s)`
 }
}