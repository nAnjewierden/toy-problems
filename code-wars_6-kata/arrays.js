function array_diff(a, b) {
    let returnAble = a
    let realReturnAble = []
    if (a.length != 0 && b.length != 0){
      
        for (let i = 0; i < a.length; i++){
          for (let j = 0; j < b.length; j++){
        // console.log(a[i], b[j])
        if (a[i] === b[j]){
          
         let realReturnAble = returnAble.filter((ele) =>{
            console.log(ele, a[i])
           return ele !== a[i]
          })
        } 
        }
        }
        
        
    }
    return realReturnAble
  }
  
  console.log(array_diff([], [4,5]), "test")
  console.log(array_diff([3,4], [3]), "test")
  console.log(array_diff([10,-12,-4,-3,15,-13,8,-7,16],[-12,-7,10,15,16,8,-13]), "test")