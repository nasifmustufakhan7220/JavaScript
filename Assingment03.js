function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    Array.isArray(student) ||
    student === null ||
    !Object.hasOwn(student, "name") ||
    !Object.hasOwn(student, "age") ||
    !Object.hasOwn(student, "course")
  ) {
    return "Invalid";
  }

  const { name, age, course } = student;

  if (
    typeof name !== "string" ||
    typeof course !== "string" ||
    typeof age !== "number" ||
    age <= 0 ||
    !Number.isFinite(age) ||
    age % 1 !== 0
  ) {
    return "Invalid";
  }

  const studentName = name.trim();
  const studentCourse = course.trim();

  if (studentName.length === 0 || studentCourse.length === 0) return "Invalid";

  return `My name is ${studentName}. I am ${age} years old. I am learning ${studentCourse}.`;
}

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  const validate = users.every((user) => {
    return (
      user !== null &&
      typeof user === "object" &&
      !Array.isArray(user) &&
      Object.hasOwn(user, "name") &&
      Object.hasOwn(user, "isActive") &&
      typeof user.name === "string" &&
      user.name.trim().length > 0 &&
      typeof user.isActive === "boolean"
    );
  });

  if (!validate) return "Invalid";

  const activeUsers = users
    .filter((user) => user.isActive)
    .map((user) => ({
      ...user,
      name: user.name.trim(),
    }));
  return activeUsers;
}

function countHashtags(caption) {
  if (typeof caption !== "string") return "Invalid";

  let hashtagCount = 0;
  let longestTag = "";

  const captionArr = caption.split(" ");
  const checking = captionArr.filter((hash) => {
    if (hash.startsWith("#") && hash.length > 1) {
      hashtagCount++;
      return true;
    }
  });

  checking.forEach((tag) => {
    const word = tag.slice(1);
    if (longestTag.length < word.length) {
      longestTag = word;
    }
  });

  return { hashtagCount, longestTag };
}

// function bonusScore(scores) {
//   if (!Array.isArray(scores) || scores.length === 0) return "Invalid";

//   const validate = scores.every((score) => {
//     return typeof score === "number" && Number.isFinite(score) && score >= 0;
//   });

//   if (!validate) return "Invalid";

//   const total = scores
//     .map((score) => score + 10)
//     .reduce((acc, curr) => acc + curr, 0);

//   return total;
// }

function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }

  const validate = students.every((student) => {
    return (
      student !== null &&
      typeof student === "object" &&
      !Array.isArray(student) &&
      Object.hasOwn(student, "name") &&
      Object.hasOwn(student, "score") &&
      typeof student.name === "string" &&
      student.name.trim().length > 0 &&
      typeof student.score === "number" &&
      student.score >= 0 &&
      Number.isFinite(student.score)
    );
  });

  if (!validate) return "Invalid";

  const qualified = students
    .filter((student) => student.score >= 70)
    .map((student) => student.name.toUpperCase());

  return qualified.slice(0, 3);
}

function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return "Invalid";

  const validate = scores.every((score) => {
    return typeof score === "number" && Number.isFinite(score) && score >= 0;
  });

  if (!validate) return "Invalid";

  const total = scores

    .map((score) => score + 10)

    .reduce((acc, curr) => acc + curr, 0);

  return total;
}

const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
]


const filtered = products.filter(product=>{
  console.log(product.category);
})