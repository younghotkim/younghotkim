import { Title } from "../components";
import * as D from "../data";

const sentence = D.randomSentence(10);

export default function PaddingTest() {
  return (
    <section className="mt-4">
      <Title>PaddingTest</Title>
      <div className="p-8 m-10 border-5">
        <div className="text-white bg-sky-600">
          <p>{sentence}</p>
        </div>
        <div className="p-8 m-2 text-white bg-orange-600">
          <p>{sentence}</p>
        </div>
      </div>
    </section>
  );
}
