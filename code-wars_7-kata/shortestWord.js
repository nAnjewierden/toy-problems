// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    var stringArray = s.split(" ");
    var shortWord = stringArray[0];
      for (var i = 1; i < stringArray.length; i++){
        if (shortWord.length > stringArray[i].length){
          shortWord = stringArray[i];
        }
      }
    return shortWord.length;
  }
  