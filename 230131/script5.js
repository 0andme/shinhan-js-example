//  요소 추가 append + reateElement
// append : 특정 노드 가장 마지막에 추가된다
// prepend : 특정 노드 가장 앞 부분에 추가된다.
// before: 특정 노드 밖의 바로 앞에 추가
//  after : 특정 노드 밖의 바로 아래에 추가
// let div = document.createElement("div");
// div.innerHTML = "<h1>안녕하세요</h1>";

// document.body.append(div);

let firstBox = document.getElementById("firstBox");
firstBox.insertAdjacentHTML("beforeBegin", "<p>Bye</p>"); // 외부 위

firstBox.insertAdjacentHTML("afterBegin", "<p>Bye</p>"); // 내부 위
firstBox.insertAdjacentHTML("beforeEnd", "<p>Bye</p>"); //내부 아래
firstBox.insertAdjacentHTML("afterEnd", "<p>Bye</p>"); //외부 아래
