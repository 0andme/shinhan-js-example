// 실습 1
// 당신은 컴퓨터와 가위 바위 보 게임을 하려고 합니다.
// 당신이 가위, 바위, 보 중에서 하나를 선택하면,
// 컴퓨터는 가위, 바위, 보 중에서 하나를 랜덤하게 고릅니다.
// 이때 승부의 결과를 출력하는 코드를 작성하세요.
// (유저가 이겼다면 “유저: 승, 컴퓨터: 패” 와 같은 형식으로 출력)
// **(유저가 가위, 바위, 보 중에서 하나만 입력한다고 가정하고, 예외처리는 하지 않아도 됩니다.)**

function game1() {
  const userChoice = Number(prompt("가위,바위,보 중에 고르시오: 0 / 1 / 2"));
  const comChoice = Math.floor(Math.random() * 3);

  const diff = Math.abs(userChoice - comChoice);
  console.log("가위 0 / 바위 1 / 보 2");

  if (diff === 1 || diff === -2) {
    console.log(`유저:${userChoice}컴퓨터:${comChoice}>>유저: 패, 컴퓨터: 승`);
  } else if (diff === 2 || diff === -1) {
    console.log(`유저:${userChoice}컴퓨터:${comChoice}>>유저: 승, 컴퓨터: 패`);
  } else {
    console.log("무승부");
  }
}
