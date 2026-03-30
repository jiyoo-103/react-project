import { useState } from "react"
import './App.css';
import Box from "./component/Box"


// 1. 박스 2개 (타이틀, 사진정보, 결과값)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검은색)

const choice = {
  rock:{
    name: "Rock",
    img:"https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886"
  },
  scissors:{
    name: "Scissors",
    img:"https://www.espo.org/media/catalog/product/8/4/84581_5.jpg?width=954&height=&canvas=954,&quality=80&bg-color=255,255,255&fit=bounds"
  },
  paper:{
    name: "Paper",
    img:"https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgemnet(choice[userChoice], computerChoice));

  };

  const judgemnet = (user,computer) => {
    console.log("user",user, "computer",computer);

    // user == computer tie
    // user == rock, computer == "scissors" user 이건것
    // user == "rock" computer == pater  user 진거
    // user == scissors computer paper   user 이건것
    // user == scissors computer rock  user 진거
    // user == paper computer rock  user 진거
    // user paper computer scissors  user 진거거

    if(user.name === computer.name) {
      return "tie";
    }else if(user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper")return computer.name === "Rock" ? "win" : "lose"
      
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);  // 객체의 키값만 뽑아서 어레이로 만들어주는 함수다.
    console.log("itemArray",itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
