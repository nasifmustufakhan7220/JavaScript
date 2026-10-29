function formatCountdown(totalSeconds) {
  let hour;
  let minute;
  let seconds;
  hour = Math.floor(totalSeconds / 3600);
  minute = Math.floor((totalSeconds % 3600) / 60);
  seconds = totalSeconds % 60;

  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  return `${hour}:${minute}:${seconds}`;
}

// console.log(formatCountdown(59));

function updateNotificationCount(initialCount, events) {
  let runningCount = initialCount;

  for (let e of events) {
    if (e.type === "ADD") {
      let amount = e.count || 1;
      runningCount += amount;
    } else if (e.type === "READ") {
      let amount = e.count || 1;
      runningCount = Math.max(0, runningCount - amount);
    }
    if (e.type === "CLEAR") {
      runningCount = 0;
    }
  }
  return runningCount;
}

// console.log(
//   updateNotificationCount(2, [
//     { count: 1, type: "READ" },
//     { count: 3, type: "ADD" },
//   ]),
// );

function countFilesInFolder(structure) {
  let file = 0;
  for (const struc of structure) {
    if (struc.type === "file") {
      file++;
    } else if (struc.type === "folder") {
      file += countFilesInFolder(struc.children);
    }
  }

  return file;
}
const structure2 = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.js", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.js", type: "file" },
          { name: "Header.js", type: "file" },
        ],
      },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "empty_folder", type: "folder", children: [] },
];
// console.log(countFilesInFolder(structure2));

function rankStudents(students) {
  if (students.length === 0) {
    return [];
  }
  let rank = 1;
  const sortStudents = students.toSorted((a, b) => b.score - a.score);

  let previousScore = sortStudents[0].score;
  const ranked = sortStudents.map((s, index) => {
    if (s.score < previousScore) {
      rank = index + 1;
    }
    previousScore = s.score;
    s.rank = rank;
    return { ...s, rank };
  });

  return ranked;
}

// console.log(
//   rankStudents([
//     { name: "Alice", score: 90 },
//     { name: "Bob", score: 95 },
//     { name: "Charlie", score: 90 },
//     { name: "David", score: 85 },
//   ]),
// );

function selectBestDiscount(price, offers) {
  let bestOffer = null;
  const filtered = offers.filter((offer) => price >= offer.minPrice);

  let finalPrice = 0;
  let lowestPrice = price;
  for (const offer of filtered) {
    if (offer.type === "flat") {
      finalPrice = Math.max(0, price - offer.value);
    } else if (offer.type === "percent") {
      finalPrice = Math.max(0, price - price * (offer.value / 100));
    }

    if (finalPrice < lowestPrice) {
      lowestPrice = finalPrice;
      bestOffer = offer;
    }
  }

  return bestOffer;
}

// console.log(selectBestDiscount(200, [
//   { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
//   { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
// ]));

function trackElevator(startFloor, minFloor, maxFloor, commands) {
  let track = startFloor;

  for (const command of commands) {
    if (command === "UP") {
      track = Math.min(maxFloor, track + 1);
    } else {
      track = Math.max(minFloor, track - 1);
    }
  }

  return track;
}

// console.log(trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]));

function findFreeTime(bookedIntervals, workingHours) {
  const [workStart, workEnd] = workingHours;

  const clipped = bookedIntervals
    .map(([start, end]) => [Math.max(start, workStart), Math.min(end, workEnd)])
    .filter(([start, end]) => start < end)
    .sort((a, b) => a[0] - b[0]);

  const merged = [];

  for (const interval of clipped) {
    const last = merged[merged.length - 1];

    if (last && interval[0] <= last[1]) {
      last[1] = Math.max(last[1], interval[1]);
    } else {
      merged.push(interval);
    }
  }

  const free = [];
  let currentTime = workStart;

  for (const [start, end] of merged) {
    if (currentTime < start) {
      free.push([currentTime, start]);
    }

    currentTime = Math.max(currentTime, end);
  }

  if (currentTime < workEnd) {
    free.push([currentTime, workEnd]);
  }

  return free;
}

// console.log(
//   findFreeTime(
//     [
//       [10, 12],
//       [14, 16],
//     ],
//     [9, 17],
//   ),
// );

function maxTasks(tasks) {
  tasks.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinish = -Infinity;

  for (const task of tasks) {
    if (task[0] >= lastFinish) {
      count++;
      lastFinish = task[1];
    }
  }

  return count;
}

function reconcileInventory(initialInventory, transactions) {
  const MutableCopy = { ...initialInventory };
  for (const transaction of transactions) {
    if (MutableCopy[transaction.productId] === undefined) {
      MutableCopy[transaction.productId] = 0;
    }

    if(transaction.type === "in"){
        MutableCopy[transaction.productId]+= transaction.quantity;
    }else{
        MutableCopy[transaction.productId] = Math.max(0, MutableCopy[transaction.productId] - transaction.quantity);
    }
  }

  return MutableCopy;
}

// console.log(
//   reconcileInventory(
//     { apple: 10, banana: 5 },
//     [{ productId: "apple", quantity: 3, type: "in" },
//     { productId: "banana", quantity: 2, type: "out" }],
//   ),
// );


function countConnectedFriends(friendships, startPerson) {
    let maps = new Map();
    for(const friend of friendships){
        // এখন destructuring ব্যবহার করে দুজনের নাম আলাদা করতে পারো:
        const [person1, person2] = friend;

        //person1 mpas এর মধ্যে আছে কিনা টা চেক করছে এবং না থাকলে একটি empty array তৈরি করা হচ্ছে বন্ধুদের নাম স্টোর করার জন্য।
        if(!maps.has(person1)){
            maps.set(person1, []);
        }

        // যদি person1 ইতিমধ্যে আছে তাহলে তার বন্ধু person2 কে ঐ empty array তে রাখবো। 
        maps.get(person1).push(person2);


        if(!maps.has(person2)){
            maps.set(person2, []);
        }

        maps.get(person2).push(person1)
        
    }

    let visited = new Set();
    let queue = [startPerson];
    
    visited.add(startPerson);

    while(queue.length > 0){
        const currentPerson = queue.shift();
        for(const c of maps.get(currentPerson) ?? []){
            if(!visited.has(c)){
                visited.add(c);
                queue.push(c)
            }
        }
    }

    return visited.size;
}

console.log(countConnectedFriends([["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]], "Alice"));
