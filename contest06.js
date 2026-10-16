function mergeSortedArrays(arr1, arr2) {

    let p1  = 0;
    let p2 = 0;
    
    let newArr = [];

    
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] < arr2[p2]){
            newArr.push(arr1[p1]);
            p1++
        }else{
            newArr.push(arr2[p2]);
            p2++
        }
    }

    while(p1 < arr1.length){
            newArr.push(arr1[p1]);
            p1++
    }

    while(p2 < arr2.length){
        newArr.push(arr2[p2]);
        p2++;
    }

    return newArr;
    
}

// console.log(mergeSortedArrays([1,2,3], [4,5,6]));



function calculateCartTotal(items, taxRate) {
  const total = items.reduce((acc,curr)=>{
    return acc+=curr.price * curr.quantity *(1-curr.discount / 100)
  },0);

  const final = total * (1 + taxRate / 100);
  const final2 = Math.round(final * 100) / 100;

  return final2;
}



console.log(calculateCartTotal([
  { price: 100, quantity: 2, discount: 10 },
  { price: 50, quantity: 1, discount: 0 }
], 10));