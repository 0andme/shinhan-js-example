const SERVER_URL = "http://127.0.0.1:8000";

async function postArticle(article) {
  let token = getCookie("access_token"); // 쿠키를 가져와서
  console.log(token);
  let response = await fetch(`${SERVER_URL}/blog/article`, {
    method: "POST",
    body: article,
    headers: {
      Authorization: `Bearer ${token}`, // 헤더에 지정
    },
  });
  let data = await response.json();
  return data;
}
async function submitArticle() {
  let formElement = document.getElementById("form");
  let article = new FormData(formElement);
  let result = await postArticle(article);
  console.log(result);
}
async function login(user) {
  let res = await fetch(`${SERVER_URL}/user/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
  });
  let data = await res.json();
  return data;
}

async function submitLogin() {
  let user = {
    email: document.getElementById("id").value,
    password: document.getElementById("pw").value,
  };

  let res = await login(user);
  console.log(res);
  if (res.access_token) {
    setCookie("access_token", res.access_token);
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

function setCookie(name, value) {
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
  document.cookie = updatedCookie;
}
