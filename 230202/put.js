const SERVER_URL = "http://127.0.0.1:8000";
async function getArticle(id) {
  let respose = await fetch(`${SERVER_URL}/blog/article/${id}`);
  let data = respose.json();
  return data;
}

async function insertArticle(id) {
  let data = await getArticle(id);
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  title.value = data.title;
  content.value = data.content;
}

async function putArticle(article, id) {
  fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: "PUT",
    body: JSON.stringify(article),
    headers: {
      "Content-type": "application/json",
    },
  });
}

async function updateArticle(id) {
  let article = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
  };
  let res = await putArticle(article, id);
  location.reload();
  console.log(res);
}

insertArticle(7);
