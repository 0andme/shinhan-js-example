const SERVER_URL = "http://127.0.0.1:8000";

// (메소드명+테이블명)으로 함수명 통일
async function postArticle(article) {
  let response = await fetch(`${SERVER_URL}/blog/article`, {
    method: "POST",
    body: JSON.stringify(article), // json 객체로 만들기
    headers: {
      "Content-type": "application/json",
    },
  });
  let data = await response.json(); // 응답을 json 객체에서 자바스크립트 객체화
  return data;
}

async function submitArticle() {
  let article = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
  };
  let result = await postArticle(article);
  console.log(result);
  return result;
}

async function getArticle(id) {
  let respose = await fetch(`${SERVER_URL}/blog/article/${id}`);
  let data = respose.json();
  return data;
}

async function insertArticle(id) {
  let data = await getArticle(id);
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  title.innerText = data.title;
  content.innerText = data.content;
}

async function getArticleList() {
  let respose = await fetch(`${SERVER_URL}/blog/article`);
  let data = await respose.json();
  return data;
}
async function deleteArticle(id) {
  let token = getCookie("access_token");
  let respose = await fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // 헤더에 지정
    },
  });

  if (respose.status === 204) {
    let article = document.getElementById(id);
    article.remove();
  }
}
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function insertArticleList() {
  let articles = await getArticleList();
  let listEl = document.getElementById("articleList");
  articles.forEach((article) => {
    listEl.insertAdjacentHTML(
      "beforeEnd",
      `<div id="${article.id}">
      <h2>작성자 : ${article.author}</h2>
      <h4>제목 : ${article.title}</h4>
      <p>(<span>${article.id}</span>) 내용:${article.content}</p>
      <button onclick="deleteArticle(${article.id})">삭제</button>
    </div>`
    );
  });
}

insertArticleList();
