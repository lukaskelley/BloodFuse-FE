import React from "react";
import "./CommuBox.css";
import { AppButton } from "../../Button/AppButton";

export const CommuBox = (props) => {
  const { children, commuimgpath, commutoptoptile, commucontent } = props;

  return (
    <div className="card">
      <img src={commuimgpath} alt="commu1" className="commuimg" />
      <h1>{commutoptoptile}</h1>
      <p>{commucontent}</p>
      <AppButton className="commu-btn" children={children} />
    </div>
  );
};
