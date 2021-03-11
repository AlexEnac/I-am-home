import React, { Component } from "react";
import { TURN_OFF, TURN_ON } from "../../redux/const";
import "./Light.module.css";

const Light = () => {
  const [isTurnnedOn, setIsTurnnedOn] = useState(false);

  const handleOnClick = () => {
    setIsTurnnedOn(!isTurnnedOn);
  };

  const handleRequest = (action) => {};

  return <div></div>;
};

export default Light;
