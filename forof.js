const mobile = {
    brand: 'Sawmi',
    price: 16999,
    camera: '12 mgpxl',
    isNew: false
};
const keys = Object.keys(mobile);
// console.log(keys);
//& convert the object property into a array like----> [ 'brand', 'price', 'camera', 'isNew' ]

for (const key of keys) {
    // console.log(key);
/*
    !Which types of things gives us:
    //* if we run a for...of loop in a an array that convert from OBJECT to ARRAY that time the key will give us objects's property names as a string. like ---> brand,price,camera,isNew.
   
   !Which types of dataTypes gives us:

    & And the type of those values are all string. like ---> string,string,string,string.

    ! OUTPUT
    ? 'brand','price','camera','isNew'
*/
    
    // console.log(typeof mobile[key]);
/*
    !Which types of things gives us:
    * this way we can access our OBJECT converted mobile array's values.
   
    !Which types of dataTypes gives us:

    & And the type of those values are same as what typeof dataType as they decleard at the beginning. like ---> string, number, string, boolean.

    !Output
    ? Sawmi 16999 12 mgpxl false
*/
}

// Another alternative way to run a for...of loop in an Object

let i = 0;
for (const key of keys) {
    // console.log(typeof i);
    // i++; //^ in this way we can actually access the index number like---> 0, 1, 2, 3...

/*
    !Which types of things gives us:
    //* if we run a for...of loop in a an array that convert from OBJECT to ARRAY that time the key will give us objects's property names as a number based on the converted array's index. like ---> 0,1,2,3
   
   !Which types of dataTypes gives us:

    & And the type of those values are all string. like ---> string,string,string,string.

    ! OUTPUT
    ? 'brand','price','camera','isNew'
*/
    
    
    // console.log(key));
/*
    !Which types of things gives us:
    * This way we can access our object property. Inside the for...of loop key gives us property name of a object based on index, because it provide us index of an object converted array like ---> brand,price,camera,isNew.
   
   !Which types of dataTypes gives us:

    & And the type of those values are all string. like ---> string,string,string,string.

    ! OUTPUT
    ? 'brand','price','camera','isNew'
*/
    
    console.log(mobile[key]);
/*
    !Which types of things gives us:
    * this way we can access our objects property's values.
   
    !Which types of dataTypes gives us:

    & And the type of those values are same as what typeof dataType as they decleard at the beginning. like ---> string, number, string, boolean.

    !Output
    ? Sawmi 16999 12 mgpxl false
*/
}


//Alternative way to run a for...of in an object.

const entries = Object.entries(mobile);
// console.log(entries);

//& convert the object property's into an array of arrays the entries method give us - Each inner array is a key–value pair (two elements): - First element → property name (the key). - Second element → property value. like----> [ [ 'brand', 'Sawmi' ],[ 'price', 16999 ], ,[ 'camera', '12 mgpxl' ], ,[ 'isNew', false ]        ]

for (const [key, value] of entries) {
    // console.log(key);

/*
    !Which types of things gives us:
    //* if we run a for...of loop in a an array that convert from OBJECT to ARRAY that time the key will give us objects's property names as a string. like ---> brand,price,camera,isNew.
   
   !Which types of dataTypes gives us:

    & And the type of those values are all string. like ---> string,string,string,string.

    ! OUTPUT
    ? 'brand','price','camera','isNew'
*/
    
    // console.log(value);
/*
    !Which types of things gives us:
    * this way we can access our OBJECT converted mobile array's values, but here we do not need to use the entries, because avobe the for of loop we converted the object into an array and we clearly say that gives us the key–value pairs from an object into an array.key–value pairs from an object.
   
    !Which types of dataTypes gives us:

    & And the type of those values are same as what typeof dataType as they decleard at the beginning. like ---> string, number, string, boolean.

    !Output
    ? Sawmi 16999 12 mgpxl false
*/
}



