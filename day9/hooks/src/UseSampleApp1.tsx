import { useState } from "react";

const UseSampleApp1 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [reuslt1, setResult1] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [reuslt2, setResult2] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [reuslt3, setResult3] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [reuslt4, setResult4] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginLeft: "15px",
          width: "30rem",
        }}
      >
        <h1>PLUS</h1>
        <input
          type="text"
          value={a}
          onChange={(e: any) => setA(e.target.value)}
        />
        <input
          type="text"
          value={b}
          onChange={(e: any) => setB(e.target.value)}
        />
        <button onClick={() => setResult1(Number(a) + Number(b))}>
          plus-button
        </button>
        <div>
          <span>plus-result : {reuslt1}</span>
        </div>
      </div>
      <div style={{ marginLeft: "15px", width: "30rem" }}>
        <h1>MINUS</h1>
        <input
          type="text"
          value={c}
          onChange={(e: any) => setC(e.target.value)}
        />
        <input
          type="text"
          value={d}
          onChange={(e: any) => setD(e.target.value)}
        />
        <button onClick={() => setResult2(Number(c) - Number(d))}>
          minus-button
        </button>
        <div>
          <span>minus-result : {reuslt2}</span>
        </div>
      </div>
      <div style={{ marginLeft: "15px", width: "30rem" }}>
        <h1>MULTIPLY</h1>
        <input
          type="text"
          value={e}
          onChange={(e: any) => setE(e.target.value)}
        />
        <input
          type="text"
          value={f}
          onChange={(e: any) => setF(e.target.value)}
        />
        <button onClick={() => setResult3(Number(e) * Number(f))}>
          multiply-button
        </button>
        <div>
          <span>multiply-result : {reuslt3}</span>
        </div>
      </div>
      <div style={{ marginLeft: "15px", width: "30rem" }}>
        <h1>DIVIDE</h1>
        <input
          type="text"
          value={g}
          onChange={(e: any) => setG(e.target.value)}
        />
        <input
          type="text"
          value={h}
          onChange={(e: any) => setH(e.target.value)}
        />
        <button onClick={() => setResult4(Number(g) / Number(h))}>
          divide-button
        </button>
        <div>
          <span>divide-result : {reuslt4}</span>
        </div>
      </div>
    </div>
  );
};

export default UseSampleApp1;
