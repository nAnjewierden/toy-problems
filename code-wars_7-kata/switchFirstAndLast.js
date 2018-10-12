// Given an array arr, swap its first and last elements and return the resulting array.

function firstReverseTry(arr) {
    if (arr.length === 0){
      return []
    }
    if (arr.length === 1){
      return arr
    }
    let first = arr[0]
    let last = arr[arr.length - 1]
    let returnable = arr.slice(1)
    console.log(returnable)
    returnable.splice(arr.length - 2, 1)
    console.log(returnable) 
    returnable.push(first)
    console.log(returnable)
    returnable.unshift(last)
    return returnable
  }

  describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){
    
    Test.assertDeepEquals( firstReverseTry([1,2,3,4,5]) , [5,2,3,4,1])
    
    Test.assertDeepEquals( firstReverseTry([]) , [])
    
    Test.assertDeepEquals( firstReverseTry([111]) , [111])
    
    Test.assertDeepEquals( firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]) , [324, 54, 12, 3, 4, 56, 23, 12, 5, 23])
    
    Test.assertDeepEquals( firstReverseTry([-1,1]) , [1,-1])
    
    })})