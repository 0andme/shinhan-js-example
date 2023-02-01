let url = "https://jsonplaceholder.typicode.com/";

// 이건 오래된 방식
// fetch(`${url}posts/1`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

//async 와 await을 사용한 방법
async function getPosts() {
  let response = await fetch(`${url}posts`);
  let data = await response.json();
  console.log(data);
}

async function addPosts(post) {
  let response = await fetch(`${url}posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json", //json형태의 데이터를 보낸다면
    },
  });
  let data = await response.json();
  console.log(data);
}

async function updatePosts(post, id) {
  let response = await fetch(`${url}posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json", //json형태의 데이터를 보낸다면
    },
  });
  let data = await response.json();
  console.log(data);
}
let post = {
  title: "hello",
  body: "im content",
};

async function deletePosts(id) {
  let response = await fetch(`${url}posts/${id}`, {
    method: "DELETE",
  });
  let data = await response.json();
  console.log(data);
}

addPosts(post);
updatePosts(post, 25);
deletePosts(1);
