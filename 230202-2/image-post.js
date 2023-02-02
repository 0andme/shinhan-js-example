const SERVER_URL = "http://127.0.0.1:8000";

// async function submitImage() {
//   let form = document.getElementById("form");
//   let imageFormData = new FormData(form);
//   let res = await postImage(imageFormData);
//   console.log(res);
// }

// async function postImage(formData) {
//   let res = await fetch(`${SERVER_URL}//blog/image`, {
//     method: "POST",
//     body: formData,
//   });
//   let data = await res.json();
//   return data;
// }

async function postArticle(article) {
  let res = await fetch(`${SERVER_URL}/blog/article`, {
    method: "POST",
    body: article,
  });
  let data = await res.json();
  return data;
}

async function submitArticle() {
  let form = document.getElementById("form");
  let formData = new FormData(form);
  let res = await postArticle(formData);
  console.log(res);
}
