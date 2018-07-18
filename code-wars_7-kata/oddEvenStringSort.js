// Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars' output 'CdWr oeas'
// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

function sortMyString(S) {
    var evenStr = []
    var oddStr  = []
    var strArray = []
    strArray = S.split('')
    
   for (let i = 0; i < strArray.length; i++){
        if (strArray[i] === ' '){
      strArray.splice(i, 1)
    }
   }
    strArray.forEach((ele, i) => {
    console.log(strArray)
    if(i % 2 === 0){
         oddStr.push(ele)
        console.log(ele, evenStr)
            }
    else{
      evenStr.push(ele)
    }
    })
   var evenStrr = evenStr.join('')
    var oddStrr = oddStr.join('')
    console.log(evenStrr)
    console.log(oddStrr + ' ' + evenStrr, 'asdf')
    return oddStrr + ' ' + evenStrr;
   
}