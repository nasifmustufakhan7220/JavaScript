function mergeSortedArrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;

  let newArr = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      newArr.push(arr1[p1]);
      p1++;
    } else {
      newArr.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    newArr.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    newArr.push(arr2[p2]);
    p2++;
  }

  return newArr;
}

// console.log(mergeSortedArrays([1,2,3], [4,5,6]));

function calculateCartTotal(items, taxRate) {
  const total = items.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity * (1 - curr.discount / 100));
  }, 0);

  const final = total * (1 + taxRate / 100);
  const final2 = Math.round(final * 100) / 100;

  return final2;
}

// console.log(calculateCartTotal([
//   { price: 100, quantity: 2, discount: 10 },
//   { price: 50, quantity: 1, discount: 0 }
// ], 10));

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email);
}

// console.log(isValidEmail("user@a.com"));

function gcd(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  let reminder = a % b;

  a = b;
  b = reminder;

  while (b > 0) {
    reminder = a % b;
    a = b;
    b = reminder;
  }
  return a;
}

// console.log(gcd(12,18));

function longestIncreasingStreak(nums) {
  if (nums.length <= 0) {
    return 0;
  }

  let currentStreak = 1;
  let maximumStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++;
      if (currentStreak > maximumStreak) {
        maximumStreak = currentStreak;
      }
    } else {
      currentStreak = 1;
    }
  }

  return maximumStreak;
}

// console.log(longestIncreasingStreak([1,2,3,1,2]));

function chunkArray(arr, size) {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

// console.log(chunkArray([1, 2, 3, 4, 5], 2));

function isValidBdMobileNumber(phoneNumber) {
  const regex = /^01[3-9][0-9]{8}$|^\+8801[3-9][0-9]{8}$|^8801[3-9][0-9]{8}$/;
  return regex.test(phoneNumber);
}

// console.log(isValidBdMobileNumber("88017123456780"));

function daysBetweenDates(date1, date2) {
  const [year1, month1, day1] = date1.split("-").map(Number);
  const [year2, month2, day2] = date2.split("-").map(Number);

  const oneDay = 24 * 60 * 60 * 1000;

  const time1 = Date.UTC(year1, month1 - 1, day1);
  const time2 = Date.UTC(year2, month2 - 1, day2);

  const days = Math.abs(time1 - time2) / oneDay;

  return days;
}

// console.log(daysBetweenDates("2020-01-15", "2019-12-31"));

function toQueryString(params) {
  const arr = Object.entries(params);
  const url = arr.map(([key, value]) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });
  return url.join("&");
}

// console.log(toQueryString({ search: "hello world", page: 1 }));

function diagonalSums(matrix) {
    let main = 0;
    let secondary = 0;
    for(let i = 0; i < matrix.length; i++){
        main+=matrix[i][i];
        secondary+=matrix[i][matrix.length - 1 - i];
    }

    return {main, secondary}
}

console.log(
  diagonalSums([
  [1, 2],
  [3, 4]
])
);
