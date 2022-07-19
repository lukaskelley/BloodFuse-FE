import React from "react";
import "./LearnCard.css";
import {DoubleRightOutlined} from '@ant-design/icons';

export const LearnCard = (props) => {
  const { LearnMoreIMGPath, LearnMoretitle } = props;

  return (
    <div className="card">
      <img src={LearnMoreIMGPath} alt="LearnMoreIMG" className="LearnMoreIMG" />
      <h1>{LearnMoretitle}</h1>
      <p>Learn More <DoubleRightOutlined /></p>
    </div>
  );
};
