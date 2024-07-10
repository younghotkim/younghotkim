import React, { useState, useEffect } from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("랜더링");
  });

  useEffect(() => {
    console.log("count 랜더링");
  }, [count]);

  useEffect(() => {
    console.log("name 랜더링");
  }, [name]);

  useEffect(() => {
    console.log("init 랜더링");
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count: {count} </span>

      <input type="text" value={name} onChange={handleInputChange}></input>
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffectApp1;
