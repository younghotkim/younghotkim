import type { FC } from "react";
import type { DivProps } from "../components";
import { Div, Icon } from "../components";
import * as D from "../data";
import User from "./User";

export type CardProps = DivProps & {
  card: D.ICard;
};

const Card: FC<CardProps> = ({ card, ...props }) => {
  const { writer, image, title, paragraphs, dayMonthYearDate, relativeDate } =
    card;
  const icons = ["home", "search", "settings", "favorite"].map((name) => (
    <Icon key={name} name={name} className="mr-2 text-3xl" />
  ));
  return (
    <Div {...props}>
      <div className="flex flex-col mb-1 m-5 shadow-lg flex-wrap rounded-lg hover:bg-indigo-200 transition duration-300 ease-in">
        <Div src={image} className="h-60 flex flex-wrap -mb-5 rounded-t-lg" />
        <Div className="p-4" height="16rem" minHeight="20rem">
          <p className="flex mt-2 text-2xl justify-center text-bold">{title}</p>
          <Div className="flex justify-between font-size: 1rem ">
            <User user={writer} className="mt-2 text-sm" />
            <Div className="mt-2">
              <p className="text-gray-500 text-sm">{relativeDate}</p>
              <p className="text-gray-500 text-sm">{dayMonthYearDate}</p>
            </Div>
          </Div>
          <p className="mt-2 line-clamp-4 text-sm">{paragraphs}</p>
          <Div className="flex  flex-row items-center justify-between p-2 mt-2 text-red-500">
            {icons}
          </Div>
        </Div>
      </div>
    </Div>
  );
};
export default Card;
