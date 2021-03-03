import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes random${Date.now()} {
      0% {top: 0px;}
      25% {top: 100px;}
      50% {top: 0px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;

    return (
      <div className="col-4">
        <style>{keyframe}</style>;
        <div className="theThink">
          <img
            style={{ animation: `random${Date.now()} 0.5s` }}
            src={this.props.computer.hinhAnh}
            alt=""
            className="theThink__img"
          />
        </div>
        <div className="speech-bubble"></div>
        <img src="./img/gameOanTuXi/playerComputer.png" alt="" width={200} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.gameOanTuXiRedux.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
