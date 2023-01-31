let obj = new Object();
console.log(obj);

let player = {
  hp: 50,
};
let warrior = {
  ap: 20,
  mp: 0,
};

warrior.__proto__ = player;
console.log(warrior);

// 연습문제 1

const employee = {
  out: function () {
    console.log("퇴근");
  },
  in: function () {
    console.log("출근");
  },
};

const kim = {
  name: "Kim",
  age: 20,
  __proto__: employee,
};

function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.__proto__ = employee;
}
