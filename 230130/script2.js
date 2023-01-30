let msg = "난 전역스코프";

function showMsg() {
  let msg = "난 함수스코프";
  if (true) {
    let msg = "난 블록스코프"; // 함수 밖에 msg가 있지만, 여기서 선언한 msg가 우선됨 (블록스코프)
    console.log(`블록스코프:${msg}`);
  }
  console.log(`함수스코프:${msg}`);
}

showMsg();
console.log(`전역스코프:${msg}`);

// 함수 표현식 / 화살표 함수

// function hello() {}
// let hello = function () {};
// let hello = () => {};

// 함수 연습문제
// 원본
function calculator(type, a, b) {
  if (type === "sum") {
    return a + b;
  } else if (type === "subtract") {
    return a + b;
  } else {
    alert("올바른 타입을 명시해주세요.");
  }
}
// 함수 표현식
let calculator2 = function calculator(type, a, b) {
  if (type === "sum") {
    return a + b;
  } else if (type === "subtract") {
    return a + b;
  } else {
    alert("올바른 타입을 명시해주세요.");
  }
};
// 화살표 함수
let calculator3 = (type, a, b) => {
  if (type === "sum") {
    return a + b;
  } else if (type === "subtract") {
    return a + b;
  } else {
    alert("올바른 타입을 명시해주세요.");
  }
};

// 연습문제 1
// 학생들의 점수를 담은 객체가 있습니다.
// 이 객체에서 모든 학생들의 점수 총합을 계산하는 코드를 작성하세요.
let scores = {
  Kim: 50,
  Park: 70,
  Lee: 80,
};
console.log(Object.values(scores).reduce((a, b) => a + b, 0));

// 연습문제 2
// 아래 객체에 mp 를 10 소비하면 hp 가 10 증가하는 heal 메소드를 작성하세요
let player = {
  hp: 80,
  mp: 50,
  heal: function () {
    this.mp -= 10;
    this.hp += 10;
  },
};

player.heal();
console.log(player);

// 배열
let fruits = ["사과", "바나나", "배"];
fruits[5] = "복숭아";
console.log(fruits); // [사과, 바나나, 배, 비어있음, 비어있음, 복숭아]

// 연습문제 1
// 아래 객체에서, 영어 점수의 총합을 계산하는 코드를 작성하세요. (reduce 활용)
let scores2 = {
  Kim: {math: 50, english: 70},
  Park: {math: 70, english: 60},
  Lee: {math: 80, english: 50},
};

const values = Object.values(scores2).map((data) => data.english);
const totalEngScore = values.reduce((sum, curr) => sum + curr, 0);

console.log("1-1", totalEngScore);

//  다른 방법
const values2 = Object.values(scores2).reduce(
  (prev, curr) => prev + curr.english,
  0
);
console.log("1-2", values2);

// 연습 문제 2

// 아래 배열에서,
// 수학 점수가 60점 이상인 사람들만 남기는 코드를 작성하세요. (filter 활용)
let students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
];

const filteredList = students.filter((user) => user.score.math >= 60);
console.log(filteredList);

// 연습 문제 3

// 아래 배열에서,
// 학생 별로 sum: (점수 총합) 을 추가하는 코드를 작성하세요. (map 활용)

students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
];

const res = students.map((user) => {
  const sum = Object.values(user.score).reduce((sum, curr) => sum + curr, 0);
  return {...user, sum};
});

console.log(res);

// 연습 문제 4
// 아래 배열에서,
// 학생 별로 score 객체 안에 sum: (점수 총합) 을 추가하는 코드를 작성하세요.
// (map, spread 연산자, 비구조할당 활용)

students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
  {id: 3, name: "Lee", score: {math: 70, english: 50}},
];
const result = students.map(({score, ...rest}) => {
  const sum = Object.values(score).reduce((sum, curr) => sum + curr, 0);
  return {...rest, score, sum};
});
console.log("4-1", result);

// 연습문제 5
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

console.log("4-2-1", getTotalScore(students));

// 4-2-2
students = [
  {id: 1, name: "Kim", score: {math: 50, english: 70}},
  {id: 2, name: "Park", score: {math: 80, english: 60}},
];
console.log("4-2-2", getTotalScore(students));
