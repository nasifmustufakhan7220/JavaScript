const mobile = {
    brand: 'Sawmi',
    price: 16999,
    camera: '12 mgpxl',
    isNew: false
};


for (const key in mobile) {
    // console.log(key);
 /*
    
    !Which types of things gives us:
    *the for...in loop gives us property name of a object based on index. 
    
    !Which types of dataTypes gives us:

    & And the type of those property are string.

    !Output :
    ? brand, price, camera, isNew,
*/
    //console.log(typeof mobile[key]) 
/*
    !Which types of things gives us:
    * this way we can access our objects property's values.
   
    !Which types of dataTypes gives us:

    & And the type of those values are same as what typeof dataType as they decleard at the beginning. like ---> string, number, string, boolean.

    !Output
    ? Sawmi 16999 12 mgpxl false
*/
}


const arr = ['Sawmi', 16999, '12 mgpxl', false];

for (const key in arr) {
    // console.log(key);
/*
    !Which types of things gives us:
    
    //* if we run a for...in loop in a an array that time the key will give us index number as a string of that array's elements. like ---> arr["0"], arr["1"] 

    !Which types of dataType gives us:

    & And the type of those index number values are all string. like ---> string,string,string,string.

    ! OUTPUT
    ? '0','1','2','3'.
*/
    // console.log(arr[key]);
/*
    !Which types of things gives us:
    * this way we can access our array's values.
   
    !Which types of dataTypes gives us:

    & And the type of those values are same as what typeof dataType as they decleard at the beginning. like ---> string, number, string, boolean.

    !Output
    ? Sawmi 16999 12 mgpxl false
*/
}