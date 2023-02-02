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
  title.parentElement.id = data.id;
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

async function updateArticle(event) {
  let id = event.target.previousElementSibling.id;
  let article = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
  };
  let res = await putArticle(article, id);
  location.reload();
}

insertArticle(7);
