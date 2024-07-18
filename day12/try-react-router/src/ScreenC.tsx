import React, { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

interface Params {
  userid: string;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  const history = useHistory();
  const { userid } = useParams<Params>();

  const onClickGoback = () => {
    history.goBack();
  };

  return (
    <div>
      {/* <div>{"Your id is " + props.match.params.userid}</div> */}
      <div>{"Your id is " + userid}</div>
      <div>{props.message}</div>
      <button onClick={onClickGoback}>Go back</button>
    </div>
  );
};

export default ScreenC;
