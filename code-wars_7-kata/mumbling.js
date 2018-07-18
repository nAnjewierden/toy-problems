// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    var returnString = s.charAt(0);
    for (var i = 1; i < s.length; i++){
    returnString += '-';
    var loopString = s.charAt(i).toUpperCase();
    returnString += loopString;
      for (var j = 0; j < i; j++){
        returnString += (s.charAt(i).toLowerCase());
      }
    }
    return returnString;
  }