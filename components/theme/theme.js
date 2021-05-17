import { createMuiTheme, Typography } from "@material-ui/core";

const Theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    subtitle1: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
      fontWeight: "100",
      fontSize: "40px",
      textTransform: "uppercase",
      color: "#fff",
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
      color: "#fff",
    },
    subtitle2: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
      fontWeight: "100",
      fontSize: "35px",
      textTransform: "uppercase",
    },
    h4: {
      color: "#fff",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
    },
    h6: {
      color: "#fff",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
    },
  },
});

export default Theme;
