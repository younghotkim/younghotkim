import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);
  return (
    <div>
      <span>타이머를 시작니다. 콘솔을 보세용!</span>
    </div>
  );
};

export default Timer;
