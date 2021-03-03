import React, { Component } from "react";
import { connect } from "react-redux";

class GameResultRedux extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="result_game">
          <div className="fontsGame">
            <h1 className="text-warning">{this.props.ketQua}</h1>
            <h1 className="my-4">
              Số bàn thắng:{" "}
              <span className="fontsGame text-warning ">
                {this.props.soBanThang}
              </span>
            </h1>
            <h1>
              Số bàn chơi:{" "}
              <span className="fontsGame text-warning">
                {this.props.soBanChoi}
              </span>
            </h1>
          </div>
          <button
            onClick={() => this.props.playGame()}
            className="btn btn-success fontsGame text-white mt-5"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.gameOanTuXiRedux.ketQua,
    soBanThang: state.gameOanTuXiRedux.soBanThang,
    soBanChoi: state.gameOanTuXiRedux.soBanChoi,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let renderComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });

        count++;
        if (count >= 10) {
          clearInterval(renderComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 300);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(GameResultRedux);
