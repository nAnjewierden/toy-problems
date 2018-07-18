// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    console.log(arguments)
    let added = 0
    for (ele in arguments){
      added += arguments[ele]*arguments[ele]
      console.log(added)
    }
    return Math.floor((Math.sqrt(added))/2)
  }

  //or

  function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let guess = 1
    let newArray = []
      console.log(arguments)
    for (key in arguments){
      console.log(key)
       let num = arguments[key] * arguments[key]
       newArray.push(num)
       
    }
      let numsAdded = newArray.reduce((accumulator, curval) =>{
      return accumulator + curval
      } )
      console.log(numsAdded)
     return Math.floor(Math.sqrt(numsAdded) / 2)
    }