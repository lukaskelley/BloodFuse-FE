import React from "react";
import "./AppButton.css";
import { RightOutlined } from "@ant-design/icons";

export const AppButton = (props) => {
  const { type, className, children } = props;

  return (
    <button type={type} className={className}>
      {children}
      <RightOutlined />
    </button>
  );
};
