// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    
    for (var i = 0; i < str.length; i++){
     var character = str.charAt(i);
        var vowels= ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
        if(vowels.indexOf(character) >= 0 ){
        vowelsCount++;
    }
    }
    return vowelsCount;
  }