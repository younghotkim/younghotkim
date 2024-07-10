import { useState } from "react";

const heavyWork = () => {
  console.log("Heavy Work");
  return [""];
};

function UseStateApp2() {
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState: any) => {
      console.log(prevState);
      return [input, ...prevState];
    });
  };

  console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default UseStateApp2;
