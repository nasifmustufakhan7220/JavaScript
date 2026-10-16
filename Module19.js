const getFormattedPrices = (prices) =>{
    
    const newArr = prices.map(price=>{  
        return`$${price}`;
    });

    return newArr;

}

// console.log(getFormattedPrices([100, 250,75]));

const getAvailableProducts = (products) =>{
    const productsAvaiable = products.filter(product=>{
        if(product.stock > 0){
            return true;
        }
    });

    return productsAvaiable;
}

// console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }]));


const findProductByName = (products, name)=>{
    const productName = products.find(product=>{
       if(name === product.name){
        return product;
       }
    });

    return productName;
}

// console.log(findProductByName([{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Pen"));

const getTotalStockValue = (products)=>{
    const total= products.reduce((acc, curr)=>{
        acc+= curr.price * curr.stock;

        return acc;
    }, 0);
    return total;
}

// console.log(getTotalStockValue([{ price: 50, stock: 4 },{ price: 20, stock: 10}]));



const getDiscountedTotalForCategory = (products, category) =>{
    const newProducts = products
    .map(product=>{
       if(category === product.category){
            product.price = product.price - (product.price * 10) / 100;
       }
       return product
    })
    .filter(product=>{
        if(category === product.category){
            return true;
        }
    })
    .reduce((acc,curr)=>{
        acc+=curr.price;
        return acc;
    },0)
    return newProducts;
    
}

const products = [
    { name: "Pen", category: "stationery", price: 100 }, 
    { name: "Bag", category: "accessory", price: 500 }, 
    { name: "Notebook", category: "stationery", price: 60}
];

// console.log(getDiscountedTotalForCategory(products,category = "stationery"));


const createIdGenerator=() =>{
    let counter = 1;
    return ()=>{
      return counter++;
    }
}

const nextId = createIdGenerator();


const sortByPriceAscending = (products)=>{
    const sortestPrice = products.sort((a,b)=>{
        return a.price - b.price;
    });

    return sortestPrice;
}

// console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }]));



const applyBonusPoints = (users, bonus) =>{
    const newUser = users.map(user=>({
        ...user,
        points : user.points + bonus
    }));
    return newUser;
}

const user = [{ name: "Rafi", points: 20 }];

// console.log(applyBonusPoints(user, bonus = 5 ));

const isStrictMatch = (input, target) =>{
    if(input === target) return true;

    return false;
}

// console.log(isStrictMatch(18, 18));


const getTopSellingProduct = (orders) =>{
    const highestTotal = orders.reduce((acc, curr)=>{
        if(!acc[curr.product]){
            acc[curr.product] = curr.unitsSold; 
        }else{
            acc[curr.product] = acc[curr.product] + curr.unitsSold;
        }
        return acc;
    }, {});

    const keys = Object.entries(highestTotal);
    let max = keys[0];

    for(const key of keys){
        if(key[1] > max[1]){
            max = key;
        }
    }

    return max[0];
}

// console.log(getTopSellingProduct([{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }]));
