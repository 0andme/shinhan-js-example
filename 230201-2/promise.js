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

// async를 쓰면, 무조건 프로미스를 리턴함
async function hello() {
  return "hello";
}

hello().then((res) => {
  console.log(res);
});

async function waitPromise() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("await"), 2000);
  });
  let res = await promise;
  console.log(res);
}

waitPromise();
