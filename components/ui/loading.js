import React from "react";
import Image from "next/image";
import { Grid, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Loading() {
  return (
    <div className="loading-page my-4 py-4">
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Image src="/DS.png" alt="logo" height="auto" width="25px" priority />
        </Grid>
        <Grid item>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Loading;
