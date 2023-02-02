const SERVER_URL = "http://127.0.0.1:8000";

async function register(user) {
  let res = await fetch(`${SERVER_URL}/user/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
  });
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
async function submitRegister() {
  let user = {
    email: document.getElementById("id").value,
    password: document.getElementById("pw").value,
    fullname: document.getElementById("name").value,
  };

  let res = await register(user);
  console.log("회원가입", res);
}

async function submitLogin() {
  let user = {
    email: document.getElementById("id").value,
    password: document.getElementById("pw").value,
  };

  let res = await login(user);
  if (res.access_token) {
    setCookie("access_token", res.access_token);
  }
  //   console.log("로그인", res);
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
