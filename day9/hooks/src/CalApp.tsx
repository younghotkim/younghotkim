import React, { useEffect, useState } from "react";

function CalApp() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(input1 + input2);
  };

  const sub = () => {
    setResult(input1 - input2);
  };

  const multiple = () => {
    setResult(input1 * input2);
  };

  const divide = () => {
    setResult(input1 / input2);
  };

  const onChangeInput1 = (e: any) => {
    setInput1(Number(e.target.value));
  };

  const onChangeInput2 = (e: any) => {
    setInput2(Number(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={onChangeInput1} value={input1} />
      <input type="text" onChange={onChangeInput2} value={input2} />
      <span>{result}</span>

      <button type="button" onClick={add}>
        {" "}
        +{" "}
      </button>
      <button type="button" onClick={sub}>
        {" "}
        -{" "}
      </button>
      <button type="button" onClick={multiple}>
        {" "}
        *{" "}
      </button>
      <button type="button" onClick={divide}>
        {" "}
        /{" "}
      </button>

      <br />
    </div>
  );
}

export default CalApp;
