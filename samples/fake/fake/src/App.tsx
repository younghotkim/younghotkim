// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomCompanyName()},
//         {D.randomEmail()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassCompent from "./ClassCompent";

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassCompent href="http://www.google.com" text="go to google" />
//         <ClassCompent href="http://www.x.com" text="go to x" />
//       </ul>
//     );
//   }
// }

import { Component } from "react";
import ClassCompent from "./ClassCompent";
import ArrowComponent from "./ArrowCompent";
import P from "./P";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }
//위를 화살표 함수로 변형

// const App = () => {
//   return (
//     <ul>
//       <ClassCompent href="http://www.google.com" text="go to google" />
//       <ArrowComponent href="http://www.x.com" text="go to X" />
//     </ul>
//   );
// };

const App = () => {
  //refactoring by using map function
  //const texts = [<p key="1">hello</p>, <p key="2">world</p>];

  const texts = ["hello", "world"].map((item, index) => (
    <p key={index} children={item} />
  ));

  return <div children={texts} />;
};

export default App;
