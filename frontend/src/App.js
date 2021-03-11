import React, { useState, Component, useEffect } from "react";
import "./App.css";
import { Light, TV, Room, Microphone } from "./components";
import data from "./action.json";
import * as Constants from "./redux/const";

function App() {
  return (
    <div className="app">
      <Light />
      <TV />
      <Microphone />
    </div>
  );
}

export default App;
