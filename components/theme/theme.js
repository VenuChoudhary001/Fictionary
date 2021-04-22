import { createMuiTheme, Typography } from "@material-ui/core";

const Theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    subtitle1: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
      fontWeight: "100",
      fontSize: "40px",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
    },
    subtitle2: {
      fontFamily: ["Antonio", "sans-serif"].join(","),
      fontWeight: "100",
      fontSize: "35px",
      textTransform: "uppercase",
    },
  },
});

export default Theme;
