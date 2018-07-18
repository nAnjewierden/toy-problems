// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
    let arr = x.split('')
    let bumpCount = 0
    console.log(arr)
   for (let i = 0; i < arr.length; i++){
     if (arr[i] === 'n'){
       bumpCount++
       console.log(bumpCount)
     }
  }
  if (bumpCount > 15){
    return "Car Dead"
    }
    else{
    return 'Woohoo!'
    }
  }