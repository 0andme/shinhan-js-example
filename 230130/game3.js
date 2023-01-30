// 당신은 컴퓨터와 1 부터 숫자를 1 ~ 3개 씩 불러서,
// 31 을 먼저 부르면 지는 게임을 하려고 합니다.
// 컴퓨터는 숫자를 랜덤하게 부르고,
// 사용자는 prompt 를 통해서 부르고자 하는 숫자를 입력합니다.
// 31 을 부르는 순간 게임이 끝나고, 이긴 사람 이름이 표시되도록 코드를 작성하세요.
// (사용자로부터 숫자를 입력받는 방식은 자유롭게 하셔도 됩니다.
// 사용자에게 숫자 자체를 입력받아도 되고,
// 부르고 싶은 숫자의 개수만 입력하게 해도 상관없습니다.)
// (사용자가 숫자를 더 많이 부르는 경우에 대해서 예외처리하지 않아도 됩니다.)

function game3() {
  const targetNum = 31;

  let nowNum = 1;
  let isFinished = 0;

  while (!isFinished) {
    let userChoice = Number(prompt("몇개의 숫자를 부르시겠습니까", 3));
    let comChoice = (Math.floor(Math.random() * 10) % 3) + 1;

    nowNum += userChoice;
    console.log(`유저의 선택 ${userChoice} 현재 수:${nowNum}`);
    if (nowNum >= targetNum) {
      isFinished = 1;
      console.log("컴퓨터가 이김");
    }

    nowNum += comChoice;
    console.log(`컴퓨터의 선택 ${comChoice} 현재 수:${nowNum}`);
    if (nowNum >= targetNum) {
      isFinished = 1;
      console.log("유저가 이김");
    }
  }
}
