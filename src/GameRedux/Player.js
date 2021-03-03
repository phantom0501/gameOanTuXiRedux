import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="theThink">
          <img
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            className="theThink__img"
          />
        </div>
        <div className="speech-bubble"></div>
        <img src="./img/gameOanTuXi/player.png" alt="" width={200} />

        <div className="list_img">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "5px solid yellow" };
            }
            return (
              <button
                key={index}
                onClick={() => {
                  this.props.datCuoc(item.ma);
                }}
                style={border}
                className="list_img-item"
              >
                <img src={item.hinhAnh} alt={item.hinhAnh} width={50} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.gameOanTuXiRedux.mangDatCuoc,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Player);
