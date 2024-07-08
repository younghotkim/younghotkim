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

// import Bootstrap from "./pages/Bootstrap";
// import Icon from "./pages/Icon";
// import Styles from "./pages/Styles";
// import "./index.css";
// import UsingIcon from "./pages/UsingIcon";
// import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

// export default function App() {
//   return (
//     <div>
//       {/* /* <UsingIconWithCSSClass />
//       <UsingIcon />*/}
//       <Styles />
//       <Icon />
//       <Bootstrap />
//     </div>
//   );
// }

// import TailWindcss from "./pages/TailWindcss";
// import Color from "./pages/Color";
// import TextsTest from "./pages/TextsTest";

// export default function App() {
//   return (
//     <div>
//       <TextsTest />
//       <Color />
//       <TailWindcss />
//     </div>
//   );
// }

import AvartarTest from "./pages/AvatarTest";
import BackgroundImageTest from "./pages/BackgroundImageTest";
import BorderTest from "./pages/BorderTest";
import DisplayNoneTest from "./pages/DisplayNoneTest";
import DisplayTest from "./pages/DisplayTest";
import DivTest from "./pages/DivTest";
import HeightTest from "./pages/HeightTest";
import ImageTest from "./pages/ImageTest";
import MarginTest from "./pages/MarginTest";
import OverlayTest from "./pages/OverlayTest";
import PaddingTest from "./pages/PaddingTest";
import PositionTest from "./pages/PositionTest";
import ViewportTest from "./pages/ViewportTest";
import MyImage from "./src_assets/cr4.jpg";

export default function App() {
  return (
    <main>
      <AvartarTest />
      <BackgroundImageTest />
      <BorderTest />
      <DisplayNoneTest />
      <DivTest />
      <HeightTest />
      <ImageTest />
      <MarginTest />
      <ViewportTest />
      <PositionTest />
      <PaddingTest />
      <OverlayTest />
      <DisplayTest />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <img
          src={MyImage}
          className="w-120 h-120 object-cover rounded-full shadow-lg"
        />
      </div>
    </main>
  );
}
