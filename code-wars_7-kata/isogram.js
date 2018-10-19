// If str is an isogram (no repeating letters) return true else return false

function isIsogram(str){
    let testable = str.toLowerCase().split('')
    for(let i = 0; i <= testable.length; i++){
      for(let j = i + 1; j <= testable.length; j++){
        if(testable[i] === testable[j]){
          return false
        }
    }
    }
    return true
  }

  Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );
