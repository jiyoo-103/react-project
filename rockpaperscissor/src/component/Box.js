import React from "react";

const Box = (props) => {
  let result;
  // Computer 카드일 때, user의 win/lose를 반대로 뒤집어서 표시
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img
        className="item-img"
        src={props.item && props.item.img}
        alt={props.title || ""}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;