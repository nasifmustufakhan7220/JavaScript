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
    // সব ব্যক্তির নাম এবং তাদের বন্ধুদের তালিকা রাখার জন্য একটি Map তৈরি করছি।
    let maps = new Map();

    // প্রতিটি friendship জোড়া ধরে ধরে লুপ চালাচ্ছি।
    for (const friend of friendships) {

        // destructuring ব্যবহার করে জোড়ার দুজন ব্যক্তির নাম আলাদা করছি।
        const [person1, person2] = friend;

        // Map-এর মধ্যে person1 না থাকলে তার জন্য একটি খালি array তৈরি করছি।
        if (!maps.has(person1)) {
            maps.set(person1, []);
        }

        // person1-এর বন্ধুদের তালিকায় person2-কে যোগ করছি।
        maps.get(person1).push(person2);

        // Map-এর মধ্যে person2 না থাকলে তার জন্য একটি খালি array তৈরি করছি।
        if (!maps.has(person2)) {
            maps.set(person2, []);
        }

        // person2-এর বন্ধুদের তালিকায় person1-কে যোগ করছি।
        // কারণ friendship একতরফা নয়, দুজনই দুজনের বন্ধু।
        maps.get(person2).push(person1);
    }

    // যাদের ইতিমধ্যে খুঁজে পেয়েছি, তাদের নাম রাখার জন্য একটি Set তৈরি করছি।
    let visited = new Set();

    // শুরুতে যে ব্যক্তির network খুঁজব, তাকে queue-এর মধ্যে রাখছি।
    let queue = [startPerson];

    // শুরু করার ব্যক্তিকে visited Set-এর মধ্যে যোগ করছি।
    visited.add(startPerson);

    // queue-এর মধ্যে যতক্ষণ ব্যক্তি থাকবে, ততক্ষণ লুপ চলবে।
    while (queue.length > 0) {

        // queue-এর প্রথম ব্যক্তিকে বের করে currentPerson-এ রাখছি।
        const currentPerson = queue.shift();

        // currentPerson-এর বন্ধুদের তালিকা থেকে একে একে বন্ধুদের নিচ্ছি।
        // এই ব্যক্তির কোনো বন্ধু না থাকলে খালি array ব্যবহার করছি।
        for (const c of maps.get(currentPerson) ?? []) {

            // বন্ধুটি আগে visited Set-এর মধ্যে আছে কি না, তা পরীক্ষা করছি।
            if (!visited.has(c)) {

                // বন্ধুটিকে প্রথমবার খুঁজে পেলে visited Set-এ যোগ করছি।
                visited.add(c);

                // বন্ধুটিকে queue-তে যোগ করছি, যাতে তার বন্ধুদেরও খুঁজতে পারি।
                queue.push(c);
            }
        }
    }

    // visited Set-এ থাকা মোট unique ব্যক্তির সংখ্যা return করছি।
    return visited.size;
}

console.log(countConnectedFriends([["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]], "Alice"));
