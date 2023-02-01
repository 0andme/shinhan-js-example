let url = "https://jsonplaceholder.typicode.com/";

async function getPosts() {
  let res = await fetch(`${url}posts`);
  let data = await res.json();
  return data;
}
async function deletePost(event) {
  let res = await fetch(`${url}posts/${event.target.id}`, {
    method: "DELETE",
  });
  let data = await res.json();
  return data;
}

async function insertPostsList() {
  let posts = await getPosts();

  let listEl = document.getElementById("postList");

  for (let post of posts) {
    // listEl.insertAdjacentHTML(
    //   "beforeEnd",
    //   `<div id="${post.id}">
    //     <h1>${post.title}
    //     </h1>
    //     <p>${post.body}</p>
    //     <button onclick="deletePost(${post.id})">삭제</button>
    //   </div>`
    // );

    let liEl = document.createElement("div");
    let titleEl = document.createElement("h4");
    let bodyEl = document.createElement("p");
    let deleteBtnEl = document.createElement("button");

    titleEl.innerText = post.title;
    bodyEl.innerText = post.body;
    deleteBtnEl.innerText = "삭제하기";
    deleteBtnEl.setAttribute("id", post.id);
    deleteBtnEl.addEventListener("click", deletePost);

    liEl.append(titleEl);
    liEl.append(bodyEl);
    liEl.append(deleteBtnEl);
    listEl.append(liEl);
  }
}

insertPostsList();
