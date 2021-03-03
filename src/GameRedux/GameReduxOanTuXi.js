import React, { Component } from "react";
import Computer from "./Computer";
import "./GameReduxOanTuXi.css";
import GameResultRedux from "./GameResultRedux";
import Player from "./Player";

export default class GameReduxOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row py-5">
          <Player />
          <GameResultRedux />
          <Computer />
        </div>
      </div>
    );
  }
}
