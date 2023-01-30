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
let age = prompt("나이를 입력해주세요", "");
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
