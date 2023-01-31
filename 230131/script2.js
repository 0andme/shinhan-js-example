// let obj = new Object();
// console.log(obj);

// let player = {
//   hp: 50,
// };
// let warrior = {
//   ap: 20,
//   mp: 0,
// };

// warrior.__proto__ = player;
// console.log(warrior);

// // 연습문제 1

// const employee = {
//   out: function () {
//     console.log("퇴근");
//   },
//   in: function () {
//     console.log("출근");
//   },
// };

// const kim = {
//   name: "Kim",
//   age: 20,
//   __proto__: employee,
// };

// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
//   this.__proto__ = employee;
// }

// 연습문제 2

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  in() {
    console.log("출근");
  }

  out() {
    console.log("퇴근");
  }
}

class PoTeam extends Employee {
  printPo() {
    console.log("기획");
  }
}
class DevTeam extends Employee {
  printDev() {
    console.log("개발");
  }
}

let meme = new DevTeam("meme", 24);
let popo = new PoTeam("popo", 20);
meme.printDev();
popo.printPo();

// 실습

class Calculatior {
  numList = [];
  result = 0;
  constructor(num) {
    this.numList.push(num);
    this.result = num;
  }

  plus(num) {
    this.result += num;
    this.numList.push(this.result);
  }
  minus(num) {
    this.result -= num;
    this.numList.push(this.result);
  }
  multi(num) {
    this.result *= num;
    this.numList.push(this.result);
  }
  slcie(num) {
    this.result /= num;
    this.numList.push(this.result);
  }
  back() {
    try {
      if (this.numList.length > 0) {
        this.result = this.numList.pop();
      } else {
        throw new Error("뒤로 갈 수 없음");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  get result() {
    return this.result;
  }
}

let example = new Calculatior(10);
example.plus(15);
console.log(example.result); //25

example.minus(5);
console.log(example.result); //20

example.multi(2);
console.log(example.result); //40

example.slcie(5);
console.log(example.result); //8

example.back(); // 40
console.log(example.result);

example.back(); //20
console.log(example.result);

example.back(); //25
console.log(example.result);

example.back(); //10
console.log(example.result);

example.back(); //error
console.log(example.result);

example.back();
