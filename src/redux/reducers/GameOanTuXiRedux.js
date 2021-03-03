const stateDefaults = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm Iron man. i love you 3000!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuXi/bua.png" },
};

export const gameOanTuXiRedux = (state = stateDefaults, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangDatCuocUpdate;

      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * state.mangDatCuoc.length);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;

      return { ...state };
    }
    case "END_GAME": {
      state.soBanChoi++;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo": {
          if (computer.ma === "keo") {
            state.ketQua = "hòa nhau!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua sml!!!";
          } else {
            state.ketQua = "I'm Iron man. i love you 3000!!";
            state.soBanThang++;
          }

          return { ...state };
        }
        case "bua": {
          if (computer.ma === "keo") {
            state.ketQua = "I'm Iron man. i love you 3000!!";
            state.soBanThang++;
          } else if (computer.ma === "bua") {
            state.ketQua = "hòa nhau!!!";
          } else {
            state.ketQua = "thua sml!!!";
          }
          return { ...state };
        }
        case "bao": {
          if (computer.ma === "keo") {
            state.ketQua = "thua sml!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "I'm Iron man. i love you 3000!!";
            state.soBanThang++;
          } else {
            state.ketQua = "hòa nhau!!!";
          }

          return { ...state };
        }

        default:
          state.ketQua = "I'm Iron man. i love you 3000!!";
          state.soBanThang++;
          break;
      }

      return { ...state };
    }
    default:
      break;
  }
  return { ...state };
};
