// Return the number that occurs in array A an odd number of times.

function findOdd(A) {
    let counter = 1
    for (let i = 0; i < A.length; i++){
      for (let j = i + 1; j < A.length; j++){
        console.log(A[i], A[j])
      if (A[i] === A[j]){
      counter++
      console.log(counter)
      }
    }
    if (counter % 2 !== 0 && counter !== 1){
    return A[i]
    }
    else{
    counter = 1
    }
    }
    return 0;
  }
  
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))