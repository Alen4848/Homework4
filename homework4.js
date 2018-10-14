//part 1 
  const Stars = function(a){
      let star = " ";
      while(a > 0){
        star = star + "*";
        a = a - 1;
      }
      return star;
  }

  const Spaces = function(n){
    let space = "";
    while(n > 0){
      space = space + " ";
      n = n - 1;
    }
    return space;
  }

  const triangleStars = function(height){
      const a = height;
      while(height > 0){
        
        console.log(Spaces(a - height) + Stars(height*2-1));
        height = height - 1;
          
      }
      
  }

    triangleStars(4);




  //part 2

    const f2 = function(array,a){
    array[array.length] = a;
    return(array);
  }

   const f3 = function(inputArray){
    let a = 0;
    let b = 0;
    let output = [];
    while(a < inputArray.length){
      let row = inputArray[a];
        while(b < row.length){
          f2(output, row[b]);
          b = b + 1;
        }
      b=0;
      a= a + 1;
    }
    return output;
  }
  console.log(f3([[1, 2, 3],[8, 9]]));



//part 3 
    const max = function(array){  
    let a = 0;
    let currentmax = array[a]
    while(a < array.length){
      if(array[a] > currentmax){  
        currentmax = array[a];      
      }
      a = a + 1;
  }
    return currentmax;
    
  }

  const min = function(array){
  let b = 0;
  let currentMin = array[b];
  while(b < array.length){
    if(array[b] < currentMin){
      currentMin = array[b];
    }
    b = b + 1;
  }
  return currentMin;
}

   const findMinMax = function(array,condition){
    if(condition === "true"){
      return(max(array));
    }
    if(condition === "false"){
      return(min(array));
    }
}
  console.log(findMinMax([48, 10, 15, -3], "true"));
  console.log(findMinMax([48, 10, 15, -3], "false"));



//part 4
  const forEach = function(array, fun){
  let a = array.length;
  while(a != 0){
      a = a - 1;
      fun(array[a]);
    }
}

forEach([10,15,20,54,6,4,5], function(value){
  console.log(value);
});


    //part 5 
  const sum = function(array){
  let currentSum = 0;
  let index = 0;
  while(index < array.length){
    currentSum = array[index] + currentSum;
    index = index + 1;
  }
  return currentSum;
}
console.log(sum([10, 15, 20]));



   //part 6
   const reverse = function(str){
   const {length} = str;
   let currentStr = "";
   let a = 0;
   while(a < length){
    currentStr = currentStr + str[length - a - 1] ;
    a = a + 1;
   }
   return currentStr;
 }
 console.log(reverse('Legion'));



//part 7
 function checkerboard(size){
  let a = 2;
  let b = 0; 
  while(b < size){
    if(a%2===0){
      console.log(Stars(size));  
    }
    if(a%2===1){
    console.log(Spaces(1) + Stars(size));
    }
    a = a + 1;
    b = b + 1;
   }
 }
 checkerboard(5);
 