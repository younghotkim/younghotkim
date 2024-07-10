import { useState } from "react";

function UseStateApp1() {
  const [time, setTime] = useState(11);
  const [min, setMin] = useState(0);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const handleMinClick = () => {
    let newMin;
    if (min >= 50) {
      newMin = 0;
    } else {
      newMin = min + 10;
    }
    setMin(newMin);
  };

  return (
    <div>
      <span>
        현재시각: {time} 시 {min} 분
      </span>
      <br />
      <br />
      <button onClick={handleClick}>Update</button>
      <button onClick={handleMinClick}>Min Update</button>
    </div>
  );
}

export default UseStateApp1;
