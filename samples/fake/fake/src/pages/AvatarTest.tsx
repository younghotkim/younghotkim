import { Div, Title, Avatar } from "../components";
import * as D from "../data";
//import MyImage from "./src_assets/cr4.jpg";

export default function AvatarTest() {
  const avatars = D.range(0, 10).map((index) => (
    <Avatar
      className="inline-block ml-6 border-4 border-white"
      key={index}
      src={"/cr4.jpg"}
    ></Avatar>
  ));
  return (
    <section className="mt-4">
      <Title>AvatarTest</Title>
      <div className="px-12 py-4 m-10 bg-blue-300">{avatars}</div>
    </section>
  );
}
