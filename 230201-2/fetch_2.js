let url = "https://jsonplaceholder.typicode.com/";

async function getPost(id) {
  let res = await fetch(`${url}posts/${id}`);
  let data = await res.json();
  return data;
}

// 옛닐 방식
// getPost(1).then((data) => {
//   let title = document.getElementById("title");
//   title.innerText = data.title;

//   let body = document.getElementById("body");
//   body.innerText = data.body;
// });

// 요즘 방식
async function insertPost(id) {
  let data = await getPost(id);
  let title = document.getElementById("title");
  title.innerText = data.title;

  let body = document.getElementById("body");
  body.innerText = data.body;
}
// insertPost(1);
