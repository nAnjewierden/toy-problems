// If str contains the same number of x's and o's (case insensitive) return true, else return false.

function XO(str) {
    let xCount = 0
    let oCount = 0
    str.split('').forEach((ele) => {
      if (ele.toUpperCase() === 'X'){
        xCount++
      }
      else if (ele.toUpperCase() === 'O'){
        oCount++
      }
    })
    if (xCount === oCount){
      return true
    }
    return false
}
//Codewars tests
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
//My tests
Test.assertEquals(XO("ooom12"),false);
Test.assertEquals(XO(""),false);
Test.assertEquals(XO("om%"),false);
