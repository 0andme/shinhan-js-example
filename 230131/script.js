// 비구조화할당
let user1 = {
  name: "Kim",
  age: 20,
  address: {
    city: "seoul",
    street: "simgock",
  },
};
let user2 = {
  name: "Park",
  age: 25,
};

const showMsg = (user) => {
  const {
    name: userName1,
    address: {city, street},
  } = user1; // 구조 분해하면서 이름 변경
  const {name: userName2} = user2; // 구조 분해하면서 이름 변경
  console.log(`${userName1}, ${userName2}, ${city} , ${street}`);
};
showMsg(user1); // 저는 Kim 이고, 20 살입니다.

// 스프레드 spread
let user = {
  name: "Kim",
  age: 20,
};

let busanUser = {
  ...user,
  city: "Busan",
};

console.log(busanUser);

// rest
let seoulUser = {
  name: "Kim",
  age: 20,
  city: "Seoul",
};
const {city, ...userRest} = seoulUser;
console.log(userRest);

//  연습문제 1
// 아래 배열에서 수학, 영어 점수의 총합이 140 이상인 사람만 남기는 코드를 작성하세요. (filter 활용)

let students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
];

const res1 = students.filter((student) => {
  const {score} = student;
  return score.math + score.english >= 140;
});
console.log(res1);

// 연습문제 2
// 아래 배열에서 모든 점수의 총합을 구하는 코드를 작성해주세요. (reduce 활용)

students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70, science: 60}},
  {id: 2, name: "Kim", score: {math: 80, english: 60, science: 100}},
  {id: 3, name: "Lee", score: {math: 70, english: 50, science: 40}},
];

const res2 = students.reduce((sum, student) => {
  const {score} = student;
  // return sum + score.math + score.english + score.science;
  return sum + Object.values(score).reduce((sum, cur) => sum + cur, 0);
}, 0);

console.log("res2", res2);

// 연습문제 3
// 아래 배열에서 모든 사람들의 이름을
// Park 으로 바꾸는 코드를 작성해주세요. (map 활용, spread 연산자 활용)
students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Kim", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
];

const res3 = students.map((student) => ({...student, name: "Park"}));
console.log("res3", res3);

// 연습문제 4
// 아래 배열에서 이름이 Kim 인 사람들을 찾고,
// score 에 science: 100, history: 100 을 추가해주세요. (filter, map 활용, spread 연산자 활용)

students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70, korean: 30, physics: 60}},
  {id: 2, name: "Kim", score: {math: 80, english: 60, korean: 40, physics: 40}},
  {id: 3, name: "Lee", score: {math: 70, english: 50, korean: 50, physics: 80}},
];

const res4 = students
  .filter((student) => (student.name = "Kim"))
  .map((student) => {
    const {score} = student;
    return {...student, score: {...score, science: 100, history: 100}};
  });

console.log("res4", res4);

// 연습문제 2
// 1
// 아래 배열에서,
// 학생 별로 score 객체 안에 sum: (점수 총합) 을 추가하는 코드를 작성하세요.
// (map, spread 연산자, 비구조할당 활용)
students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
];
const res2_1 = students.map((student) => {
  const {score} = student;
  const sum = Object.values(score).reduce((sum, cur) => sum + cur, 0);
  return {...student, sum};
});

console.log(res2_1);

//2
// 학생 수에 관계없이 아래와 같은 배열이 들어왔을 때
// 모든 점수의 총합을 구하는 함수를 작성하세요.
// (reduce, 비구조할당, spread, rest 연산자 활용)

function getTotalScore(students) {
  const result5 = students
    .map(({score, ...rest}) =>
      Object.values(score).reduce((sum, curr) => sum + curr, 0)
    )
    .reduce((a, b) => a + b, 0);
  return result5;
}

students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
  ,
  {id: 4, name: "Choi", score: {math: 70, english: 50}},
];

console.log("2-2-1", getTotalScore(students));

// 4-2-2
students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
];
console.log("2-2-2", getTotalScore(students));
