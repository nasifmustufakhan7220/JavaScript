function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((acc, curr) => (acc += curr), 0);
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

// console.log(missingNumber([0,1]));

function formatAttendanceReport(students) {
  const student = students.map((stu) => {
    let status;

    const result = Math.round((stu.present / stu.total) * 100);

    if (result >= 90) {
      status = `Excellent`;
    } else if (result >= 75 && result <= 89) {
      status = `Good`;
    } else {
      status = `At Risk`;
    }
    return `${stu.name}: ${stu.present}/${stu.total} (${result}%) - ${status}`;
  });

  return student;
}

// console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));

function generateProfileCard(user) {
  return `${user?.name ?? "Anonymous"} | ${user?.address?.city ?? "Unknown"} | followers: ${user?.social?.followers ?? 0}`;
}

// console.log(generateProfileCard({"address":{"city":"London"},"name":"Charlie"}));

function getPageMetadata(totalItems, pageSize, currentPage) {
  let totalPages;
  let startItem;
  let endItem;

  let hasPrev;
  let hasNext;
  if (totalItems === 0) {
    totalPages = 0;
    startItem = 0;
    endItem = 0;
    hasPrev = false;
    hasNext = false;
  } else {
    totalPages = Math.ceil(totalItems / pageSize);
    startItem = (currentPage - 1) * pageSize + 1;
    endItem = Math.min(currentPage * pageSize, totalItems);
    hasPrev = currentPage > 1;
    hasNext = currentPage < totalPages;
  }
  return { totalPages, startItem, endItem, hasPrev, hasNext };
}

// console.log(getPageMetadata(0, 10, 10));

function findRainfallPeaks(rainfall) {
  let peak = [];
  for (let i = 1; i < rainfall.length - 1; i++) {
    let presentDay = rainfall[i];
    let previousDay = rainfall[i - 1];
    let nextDay = rainfall[i + 1];

    if (presentDay > previousDay && presentDay > nextDay) {
      peak.push(i + 1);
    }
  }
  return peak;
}

// console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]));

function getDayOfWeek(year, month, day) {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(year, month - 1, day);

  const dayName = date.getDay();

  return names[dayName];
}

// console.log(getDayOfWeek(2023, 1, 1));

function commonSkills(skills1, skills2) {
  const skill1 = skills1.map((sk) => sk.toLowerCase());
  const skill2 = skills2.map((sk) => sk.toLowerCase());

  const result = new Set(skill1);
  const matched = skill2.filter((a) => result.has(a));

  return [...new Set(matched)].sort();
}

// console.log(commonSkills(["JS", "React","Node"], ["react", "css", "js"]));

function swapKeysAndValues(obj) {
  let newObj = {};

  for (const key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

// console.log(swapKeysAndValues({ a: "x", b: "y" }));

function groupStudentsByGradeBand(students) {
  const group = students.reduce((acc, curr) => {
    if (curr.marks >= 80) {
      acc.A.push(curr);
    } else if (curr.marks >= 70 && curr.marks <= 79) {
      acc.B.push(curr);
    } else if (curr.marks >= 60 && curr.marks <= 69) {
      acc.C.push(curr);
    } else {
      acc.F.push(curr);
    }
    return acc;
  }, { A: [], B: [], C: [], F: []});

  return group;
}

// console.log(
//   groupStudentsByGradeBand([
//     { name: "Alice", marks: 85 },
//     { name: "Bob", marks: 72 },
//     { name: "Charlie", marks: 58 },
//     { name: "David", marks: 91 },
//   ]),
// );


function simulateTicketQueue(commands) {
  let queue = [];
  let served = [];

  for(const cmd of commands){
    if(cmd === "serve"){
        if(queue.length > 0){
            let p = queue.shift();
            served.push(p);
        }
    }

    if(cmd.startsWith("join")){
        let p = cmd.slice(5);
        if(!queue.includes(p)){
            queue.push(p);
        }
    }

    if(cmd.startsWith('leave')){
        let p = cmd.slice(6);
        let a = queue.indexOf(p);
        if(a !== -1){
            queue.splice(a, 1);
        }
        
    }
  }
  return {queue, served}
}


console.log(simulateTicketQueue([
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
]));