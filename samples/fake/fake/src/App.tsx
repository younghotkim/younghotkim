// //event 처리

// import EventListner from "./pages/EventListner";
// import OnClick from "./pages/OnClick";
// import ReactOnClick from "./pages/ReactOnClick";
// import DispathEvent from "./pages/DispatchEvent";
// import EventBubbling from "./pages/EventBubbling";
// import StopPropagation from "./pages/StopProganation";
// import VariousInputs from "./pages/VariousInputs";
// import Onchange from "./pages/OnChange";
// import FileInPut from "./pages/FileInput";
// import FileDrop from "./pages/FileDrop";
// import DragDrop from "./pages/DragDrop";

// export default function App() {
//   return (
//     <div>
//       <FileDrop />
//       <EventBubbling />
//       <EventListner />
//       <ReactOnClick />
//       <DispathEvent />
//       <StopPropagation />
//       <VariousInputs />
//       <OnClick />
//       <Onchange />
//       <FileDrop />
//       <DragDrop />
//       <FileInPut />
//     </div>
//   );
// }

import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
import Styles from "./pages/Styles";
import "./index.css";
// import UsingIcon from "./pages/UsingIcon";
// import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

export default function App() {
  return (
    <div>
      {/* /* <UsingIconWithCSSClass />
      <UsingIcon />*/}
      <Styles />
      <Icon />
      <Bootstrap />
    </div>
  );
}
