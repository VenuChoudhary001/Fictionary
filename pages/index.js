import {
  Container,
  createMuiTheme,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import ParticlesBackground from "../components/particles/particles-background";
import Timer from "../components/ui/timer";

function Index() {
  const theme = useTheme();
  const mdBelow = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container className="my-4 py-4 ">
        <Grid container justify="center" alignItems="center">
          <Grid item></Grid>
          <Grid item xs={12} className="text-center">
            <Typography
              style={{
                fontFamily: "Kiwi Maru",
                fontSize: mdBelow ? "27px" : "64px",
                color: "#fff",
              }}
            >
              FICTIONARY STARTS IN
            </Typography>
          </Grid>
          <Grid item>
            <Timer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Index;
