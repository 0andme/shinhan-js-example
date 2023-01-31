{
  /* <body>
    <div id="firstDiv">
      <p>안녕하세요</p>
    </div>
    <div id="secondDiv">안녕하세요</div>
    <a href="https://www.naver.com"> 네이버로 가기 </a>
    <input value="안녕" />
  </body>
  */
}

// let firstDiv = document.getElementById("firstDiv");
// console.log(firstDiv.tagName); // div
// console.log(firstDiv.innerHTML); //
// firstDiv.innerText; // 안녕하세요
// firstDiv.outerHTML;
// // firstDiv.hidden = true;

// let inputEl = document.getElementsByTagName("input")[0];

// console.log(inputEl.value);
// inputEl.value = "input 값 바꾸기";

// firstDiv.style.backgroundColor = "blue";
// firstDiv.style.color = "white";

// let blueDiv = document.getElementsByClassName("blue-div")[0];
// blueDiv.className = "green-div";

// blueDiv.classList.add("white-text");
// blueDiv.classList.remove('white-text')
// 클래스가 이미 있으면 제거, 없으면 추가
// blueDiv.classList.toggle("white-text");

// let img = document.getElementById("img");

// img.setAttribute("src", "pikachu.png");

// let aTag = document.getElementById("google");
// aTag.setAttribute("href", "https://www.google.com");
// aTag.removeAttribute("href");

// 연습문제

let aTags = document.getElementsByTagName("a");
let targetTag = aTags[1];
targetTag.innerText = "네이버로 가기";
targetTag.setAttribute("href", "https://www.naver.com");
