// In this kata, you will do addition and subtraction on a given string. The return value must be a 'string'.

// Example: calculate('1plus2plus3minus4') should return '2'.

function calculate(str) {
    let itirateOver = str.split('')
    let returnable = Number(itirateOver[0])
    itirateOver.map((ele, i, arr) =>{
        if (ele === 'p'){
              returnable += Number(arr[i + 4])
        }
        if (ele === 'm'){
              returnable -= Number(arr[i + 5])
        }
    })
    return String(returnable);
    }

    Test.describe("Let's go...", function() {
        Test.it("Basic tests", function() {
          Test.assertEquals(calculate("1plus2plus3plus4"), '10');
          Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
            Test.assertEquals(calculate('1plus2plus3minus4'), '2');
        })
        });