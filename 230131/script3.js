// document : 가장 최상위 객체
console.log(document);

console.log(document.head);
console.log(document.body);

// body의 하위 노드 가져오기 + 줄바꿈 까지 가져옴
console.log(document.body.childNodes);
//  줄바꿈을 제외한 순수 html tag만 가져오기
console.log(document.body.children);

// 바디의 첫번째 자식 tag
console.log(document.body.firstElementChild);
// 바디의 이전 형제
console.log(document.body.previousElementSibling);

// 바디의 부모 요소
console.log(document.body.parentNode);

//id를 기준으로 요소 가져오기
let title = document.getElementById("title");
let content = document.getElementById("content");

console.log(title);
console.log(content);

// text 바꾸기
content.innerText = "hello";

// class로 요소 (여러 개)가져오기
// 배열과 비슷한 형태로 리턴됨
// 인덱스로 접근할 수 있음
console.log(document.getElementsByClassName("first-div"));
console.log(document.getElementsByClassName("second-div"));
console.log(document.getElementsByClassName("second-div")[0]);

// tag이름으로 검색
let aTag = document.getElementsByTagName("a")[0];
console.log(aTag);
aTag.href = "https://www.google.com/";
