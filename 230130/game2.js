// 당신은 컴퓨터와 업, 다운 게임을 하려고 합니다.
// 컴퓨터가 1 ~ 100 까지의 수 중에서 하나를 랜덤하게 고르면,
// 당신은 컴퓨터가 고른 숫자가 무엇인지를 찾아내야 합니다.
// 당신이 숫자를 하나 부르면,
// 컴퓨터는 그 숫자가 처음 고른 숫자보다 큰 지, 작은 지 여부만 알려줍니다.
// 당신이 숫자를 맞힐 때까지 게임이 계속되도록 코드를 작성하세요.

// (숫자를 부르는 것은 prompt 활용) + 입력 예외처리 제외

function game2() {
  const comChoice = Math.floor(Math.random() * 99) + 1;

  console.log(`target=${comChoice}`);

  let userChoice = Number(prompt("숫자를 입력하세요", 0));

  while (userChoice != comChoice) {
    if (userChoice > comChoice) console.log("다운");
    else if (userChoice < comChoice) console.log("업");
    else console.log("정답");
    userChoice = Number(prompt("숫자를 입력하세요", 0));
  }
}
