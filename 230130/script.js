// alert("내용");
// 브라우저가 지원하는 기능
console.log("text!!");
// js가 자체적으로 지원하는 기능

let a = "hello";
// alert(a);

// ("use strict");
// b = "tt";
// alert(b);

// let + const
let test = "let data";
const b = "const data";

// 선언과 할당
let c;
c = "Undefined";

// var : 옛날 문법이니까 배우지 않을 것

//  ++ -- 연산자
let xData = 5;
console.log(xData++); //5
console.log(++xData); //7

//  포맷 스트링
let name = "youme";
console.log(`my 
name is
${name}
`);

// 문자열
let str = "hello world";
console.log(str.slice(0, 5));
console.log(str.length);
console.log(str.split(" ")[1] + "+" + str.split(" ")[0]);
console.log(str.includes("hello")); // true
console.log(str.includes("bye"));

//브라우저가 제공하는 상호작용 = prompt
// input = prompt("~~를 입력해주세요", 100);
// console.log(input);

// if 문
let x = 3;
if (x === 3) {
  console.log("x is 3");
}
// if else문
// let age = prompt("나이를 입력해주세요", "");
let age = 30;
if (age > 18) {
  console.log("성인");
} else {
  console.log("미성년자");
}

// if else if else문

if (age > 18) {
  console.log("성인");
} else if (age > 10) {
  console.log("청소년");
} else {
  console.log("아기");
}

// 삼항연산자

age > 18 ? console.log("성인") : console.log("미성년자");
//삼항연산자 조건문 여러개
age > 18
  ? console.log("성인")
  : age > 10
  ? console.log("청소년")
  : console.log("아기");

// 타입 변환
let num123 = Number("123");
let str123 = String(num123);

// switch
let device = "desktop";
switch (device) {
  case "desktop":
    console.log("device is desktop");
    break;
  case "mobile":
    console.loog("device is mobile");
    break;
}

//  연습문제 1

// let userScore = Number(prompt("성적을 입력해주세요", 0));
let userScore = 30;
if (userScore >= 95) {
  console.log("A");
} else if (userScore >= 90) {
  console.log("B");
} else if (userScore >= 85) {
  console.log("C");
} else {
  console.log("F");
}

// 연습 문제 2
// let NumberA = Number(prompt("숫자를 입력하세요", 0));
// let NumberB = Number(prompt("숫자를 입력하세요", 0));
let NumberA,
  NumberB = [2, 2];
if (NumberA % 2 === 0 && NumberB % 2 === 0) {
  console.log("짝수");
} else if (NumberA % 2 != 0 && NumberB % 2 != 0) {
  console.log("홀수");
}

//  while문
let i = 0;

while (i < 3) {
  console.log(`${i}번 째`);
  i++;
}

// 연습 문제 1

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}
// 연습 문제 2
// let userInput = prompt("그만 << 을 입력하면 입력을 그만할 수 있습니다", "");
let userInput = "그만";
while (userInput != "그만") {
  // userInput = prompt("", "");
}

// 함수
// 연습문제 1
// 매개변수로 숫자를 받아서 해당 수의 <1 배수부터 10 배수까지> 출력하는 함수를 작성해보세요.
// (ex. 2가 들어오면, 2 4 6 8 10 12 14 16 18 20 을 차례로 출력) (매개변수는 1개)
function ex1(num) {
  for (let i = 0; i < 10; i++) {
    console.log(num * (i + 1));
  }
}
// 연습문제 2
// 매개변수로 숫자를 받아서 해당 수의 <1 배수부터 10 배수까지> 모두 더한 값을 리턴하는 함수를 작성해보세요.
// (매개변수는 1개) (ex. 1이 들어오면, 55를 return)

function ex2(num) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += num * (i + 1);
  }
  return sum;
}
// 연습문제 3
// 매개변수로 이름과 나이를 받아서 미성년자인지 여부를 판별하고,
// “’이름’님은 ‘미성년자/성인’입니다.” 를 출력하는 함수를 작성해보세요.
// (매개변수는 2개)

function ex3(name, age) {
  if (age < 20) {
    console.log(`${name}님은 미성년자입니다`);
  } else {
    console.log(`${name}님은 성인입니다`);
  }
}
