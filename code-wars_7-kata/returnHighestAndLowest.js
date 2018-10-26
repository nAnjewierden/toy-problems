//Return the highest and lowest numbers in number string.

function highAndLow(numbers){
    var number = numbers.split(' ');
    var high = Number(number[0]);
    var low = Number(number[0]);
    for ( var i = 1; i < numbers.length; i++){
        if (high < Number(number[i])){
        high = Number(number[i]);
        }
        if (low > Number(number[i])){
          low = Number(number[i]);
        }
    }
    let returnableHigh = high.toString()
    let returnableLow = low.toString()
    return returnableHigh + ' ' + returnableLow;
  }
//Codewars' tests
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");
