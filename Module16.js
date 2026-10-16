const describeDeclaration = (keyword)=>{
    if(keyword === "var"){
        return  "Can redeclare, can reassign";
    }else if(keyword === "let"){
        return "Cannot redeclare, can reassign";
    }else if(keyword === "const"){
         return "Cannot redeclare, cannot reassign";
    }else{
        return "Invalid";
    }

}

// console.log(describeDeclaration("const"));

const bookTicket = (movie, seats = 1, pricePerSeat = 300) =>{
    if(typeof movie !== "string" || seats < 0 || pricePerSeat < 0){
        return "Invalid";
    }

    let total = seats * pricePerSeat;

    return `${movie}: ${seats} seat(s),Total ৳${total}`;

}

// console.log(bookTicket(123, 2));


const generateReceipt = (customerName, items, total)=>{
    if(!Array.isArray(items) || items.length === 0){
        return "Invalid";
    }
    let item = [...items];

    return `Receipt for ${customerName}\\nitems:${item}\\nTotal:৳${total}`;

}

// console.log(generateReceipt("Sadia", ["Milk"], 60));

const calculateBMI = (weight, height)=>{
    if(weight < 0 || height < 0){
        return "Invalid";
    }

    let BMI = weight / (height * height);
    return Number(BMI.toFixed(2));
}

// console.log(calculateBMI(60, -1.7));

const mergeInventory = (arr1, arr2) =>{
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid";

    let margedArrayOfStore = [...arr1,...arr2];

    return margedArrayOfStore;
}

// console.log(mergeInventory([1,2],[3,4]));

const highestScore = (scores) =>{
    if(!Array.isArray(scores)) return "Invalid";

    let score = Math.max(...scores);
    return score;
}

// console.log(highestScore("3,7,2"));


const extractUserInfo = (userObj)=>{
    if(!Object.hasOwn(userObj.user,"name")) return "Invalid";
    let {user:{name, age}, hobbies: myHobbies, country = "Bangladesh"} = userObj;


    let [firstHobby, secondHobby] = myHobbies;

    if(myHobbies.length === 0)firstHobby = "Nothing Yet";

    return `${name} (${age}) likes ${firstHobby}`;
}

// console.log(extractUserInfo({user:{name: "Sadia", age:30}, hobbies:[]}));


const manageInventoryObject = (obj, action)=>{
    const validActions = [
        "keys",
        "values",
        "entries",
        "delete:a",
        "delete:b",
        "delete:c",
        "seal",
        "freeze"
    ];
    if(typeof obj !== "object" || 
        obj === null){
        return "Invalid";
    }

    if(!validActions.includes(action)){
        return "Invalid";
    }
    if(action === "keys"){
        return Object.keys(obj);
    }
    if(action === "values"){
        return Object.values(obj);
    }
    if(action === "entries"){
        return Object.entries(obj);
    }
    if(action === "delete:a"){
        delete obj.a;
        return obj;
    }
    if(action === "delete:b"){
        delete obj.b;
        return obj;
    }
    if(action === "delete:c"){
        delete obj.c;
        return obj;
    }
    if(action === "seal"){
        Object.seal(obj);
        return "নতুন Property Add করা যাবে না";
    }
    if(action === "freeze"){
        Object.freeze(obj);
        return "কোনো Value পরিবর্তন করা যাবে না";
    }
}

// console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));


const printObjectDetails = (obj, loopType) =>{
    if(loopType === "forin"){
        let arr = [];
        for(const keys in obj){
            arr.push(`${keys}: ${obj[keys]}`)
        }
        console.log(arr);
    }
}

// printObjectDetails({fruit:"Mango",price:50}, "forin")


const calculateTotal =(items)=> {
  const total = items.reduce((acc, curr)=>{
    return acc+ curr.price;
  }, 0);
    return `Total: ${total} Taka`;
};


console.log(calculateTotal([{price:100},{price:250}]));