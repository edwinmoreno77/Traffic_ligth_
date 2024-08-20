import { useState } from "react";

export const TrafficLigth = () => {
  const [color, setcolor] = useState("red");

  function changeColor(color) {
    switch (color) {
      case "red":
        setcolor("green");
        break;
      case "green":
        setcolor("yellow");
        break;
      case "yellow":
        setcolor("red");
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="pipe"></div>
      <div className={`traffic_ligth`}>
        <span
          onClick={() => setcolor("red")}
          className={`red  ${color == "red" ? "ligth" : ""}`}
        ></span>
        <span
          onClick={() => setcolor("yellow")}
          className={`yellow ${color == "yellow" ? "ligth" : ""}`}
        ></span>
        <span
          onClick={() => setcolor("green")}
          className={`green ${color == "green" ? "ligth" : ""}`}
        ></span>
      </div>
      <button onClick={() => changeColor(color)} className="btn">
        Change color
      </button>
    </div>
  );
};
