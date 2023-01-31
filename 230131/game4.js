// 플레이어 간의 공격이 가능한 아주 간단한 게임을 만들려고 합니다.
// 플레이어는 hp, mp, ap (공격력) 이라는 스탯을 가지고 있고, 고유한 이름을 가지고 있습니다.
// attack 이라는 행동을 수행하면 공격받은 대상 플레이어의 hp 가 공격한 플레이어의 ap 만큼 감소합니다.
// heal 이라는 행동을 수행하면 행동을 수행한 플레이어의 mp 가 10만큼 감소하고, 그만큼 hp 가 증가합니다.
// 게임 자체적으로는 살아있는 (hp 가 0 이상인) 유저들의 이름만 출력하는 기능을 가지고 있습니다.
// 객체와 메소드를 활용해서 위와 같은 간단한 게임을 만들어보세요.
// (플레이어 객체, 게임 객체 각각 만드는 것을 권장드립니다.

const UserInfo = {
  name: "",
  hp: 100,
  mp: 100,
  ap: 1,
  attack: function (user) {
    user.hp -= this.ap;
  },
  heal: function () {
    this.mp -= 10;
    this.hp += 10;
  },
};

const Game = {
  userList: [],
  printUser: function () {
    const survibalUser = this.userList.filter((user) => user.hp > 0);
    survibalUser.forEach((user) => console.log(`${user.name} // ${user.hp}`));
  },
};

const userA = new Object({...UserInfo, name: "A", ap: 2});
const userB = new Object({...UserInfo, name: "B", ap: 4});
const gameStart = new Object(Game);
gameStart.userList.push(userA, userB);

// for (let i = 0; i < 10; i++) {
//   userA.attack(userB);
//   userB.attack(userA);
//   gameStart.printUser();
// }
