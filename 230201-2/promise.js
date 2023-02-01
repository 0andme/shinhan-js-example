let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("성공"), 1000);
});

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => reject("에러"), 1000);
//   });

//
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

promise
  .then((res) => {
    return res;
  })
  .then((res) => {});
