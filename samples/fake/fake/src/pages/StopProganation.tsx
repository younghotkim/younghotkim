import { SyntheticEvent } from "react";

export default function StopProganation() {
  const onDivClick = (e: SyntheticEvent) =>
    console.log("click event bubbles on <div>");

  const onButtonClick = (e: SyntheticEvent) => {
    console.log("mouse click occurs on <button> and call stopPropagation");
    e.stopPropagation();
  };

  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>Click Me and Stop Propagation</button>
    </div>
  );
}
