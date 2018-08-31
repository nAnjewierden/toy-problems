// The Monty Hall problem is a probability puzzle base on the American TV show "Let's Make A Deal".

// In this show, you would be presented with 3 doors: One with a prize behind it, and two without (represented with goats).

// After choosing a door, the host would open one of the other two doors which didn't include a prize, and ask the participant if he or she wanted to switch to the third door. Most wouldn't. One would think you have a fifty-fifty chance of winning after having been shown a false door, however the math proves that you significally increase your chances, from 1/3 to 2/3 by switching.

// Further information about this puzzle can be found on https://en.wikipedia.org/wiki/Monty_Hall_problem.

// In this program you are given an array of people who have all guessed on a door from 1-3, as well as given the door which includes the price. You need to make every person switch to the other door, and increase their chances of winning. Return the win percentage (as a rounded int) of all participants.

function montyHall(correctDoorNumber, participantGuesses) {
    let count = 0
    participantGuesses.map((ele) => {
    if (ele === correctDoorNumber){
     count++
    }
    })
    return Math.round((((participantGuesses.length - count) * 10) / (participantGuesses.length * 10)) * 100)
  }

Test.assertEquals(montyHall(1, [3,3,2,3,3,2,2,3,2,2,1,1,1,1]), 71, "Testing for a correct door 1");
Test.assertEquals(montyHall(2, [3,3,2,3,3,2,2,3,2,2,1,1,1,1]), 64, "Testing for a correct door 2");
Test.assertEquals(montyHall(3, [3,3,2,3,3,2,2,3,2,2,1,1,1,1]), 64, "Testing for a correct door 3");