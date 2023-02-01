let url = "https://jsonplaceholder.typicode.com/";

async function getPost(id) {
  let res = await fetch(`${url}posts/${id}`);
  let data = await res.json();
  return data;
}

async function putPost(post, id) {
  let res = await fetch(`${url}posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json",
    },
  });
  let data = await res.json();
  return data;
}

async function insertPost(id) {
  let post = await getPost(id);
  let titleEl = document.getElementById("title");
  let bodyEl = document.getElementById("body");
  titleEl.value = post.title;
  bodyEl.value = post.body;
}

async function updatePost(id) {
  let post = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  };
  let res = await putPost(post, id);
  return res;
}

// let updateBtn = document.getElementById("updateBtn");
// updateBtn.addEventListener("click", updatePost);
insertPost(1);
