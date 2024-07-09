import { Div, Title, Subtitle } from "../components";
import * as D from "../data";

export default function JustifyCenterTest() {
  const boxes = D.range(0, 5).map((index) => (
    <Div key={index} className="w-4 h-4 m-1 bg-black" />
  ));
  return (
    <section className="mt-4">
      <Title>JustifyCenterTest</Title>
      <div className="mt-4">
        <Subtitle>flex flex-row justify-center</Subtitle>
        <div className="h-30 bg-blue-300 flex flex-row justify-around">
          {boxes}
        </div>
      </div>
      <div className="mt-4">
        <Subtitle>flex flex-col justify-center</Subtitle>
        <div className="h-50 bg-red-300 flex flex-col justify-center">
          {boxes}
        </div>
      </div>
    </section>
  );
}
