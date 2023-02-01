let url = "https://jsonplaceholder.typicode.com/";

async function addPost(post) {
  let res = await fetch(`${url}posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json",
    },
  });
  let data = await res.json();
  return data;
}

let post = {
  title: "test",
  body: "testtest",
};

async function submitPost() {
  let post = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  };

  let res = await addPost(post);
  console.log(res);
}
submitPost();
