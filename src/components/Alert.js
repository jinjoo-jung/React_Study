import React from "react";

const Alert = ({ type, text }) => {
  return <div className="{`alert alert-${type}`}"></div>;
};

export default Alert;
