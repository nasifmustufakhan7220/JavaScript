const calculateBill = (amount, taxRate = 0.05)=>{
    const finalBill = amount + (amount*taxRate);
    return finalBill;
}

// console.log(calculateBill(1000, 0.10));

const buildProfileCard=(user)=>{
    const card = `"${user.name}\\n${user.title} at ${user.company}"`;
    return card;
}

// console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));


const getLowestPrice=(prices)=>{
    const lowest = Math.min(...prices);
    return lowest;
}

// console.log(getLowestPrice([340, 120, 560, 90]));


const swapValues=(a, b)=>{
    [b,a] = [a,b];
    return [a,b];
}

// console.log(swapValues(5,10));


const getEmployeeDept = (employee) =>{
    const {name, job:{title, department}} = employee;
    return{title, department}
}

// console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" }}));


const promoteEmployee = (employee, newTitle)=>{
    const newObj = {...employee};

    const {name, title} = newObj;

    let newEmployTitle= {name, title : newTitle};
    return newEmployTitle;
    
}

// console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"));


const sumAllPrices=(prices)=>{
    let sum = 0;

    for(const price of prices){
        sum+=price;
    }

    return sum;
}

// console.log(sumAllPrices([100, 250, 75]));


const getManagerName = (employee)=>{
    const manager = employee?.manager?.name;
    return manager;
}


// console.log(getManagerName( { name: "Rafi" }));


const splitFirstRest = (arr)=>{
    const [first, ...rest] = arr;

    return {first,rest};
}

// console.log(splitFirstRest([10, 20, 30, 40]));

const cloneAndUpdate = (arr, index, newValue)=>{
    const newArr = [...arr];

    newArr[1] = newValue;
    return newArr;
}

// console.log(cloneAndUpdate([5, 10, 15], 1, 99));


