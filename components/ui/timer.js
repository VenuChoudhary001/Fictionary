import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const theme = useTheme();
  const mdBelow = useMediaQuery(theme.breakpoints.down("sm"));

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [sec, setSec] = useState();

  const calculateTime = () => {
    const date = new Date();
    const dDay = new Date("21 April 2021");
    let dayCount = Math.floor((dDay - date) / (1000 * 24 * 60 * 60));
    let hrsCount = Math.floor(
      ((dDay - date) % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
    );
    let minCount = Math.floor(
      (((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) / (1000 * 60)
    );
    let secCount = Math.floor(
      ((((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) %
        (1000 * 60)) /
        1000
    );

    setSec(secCount);
    setDays(dayCount);
    setHours(hrsCount);
    setMins(minCount);
  };

  useEffect(() => {
    setInterval(() => {
      calculateTime();
    }, 1000);
  }, []);
  return (
    <div
      className="my-4 py-4 px-4"
      style={{ background: "rgba(173 173 173 / 20%)", borderRadius: "20px" }}
    >
      <Container style={{ color: "#fff" }}>
        <Grid
          container
          justify="space-between"
          direction={mdBelow ? "column" : "row"}
          alignItems="center"
          spacing={mdBelow ? 3 : 8}
        >
          <Grid item className="text-center">
            <Typography variant={mdBelow ? "h4" : "h1"}>
              {days < 10 ? "0" : ""}
              {days}
            </Typography>
            <br />
            <Typography className="text-muted">DAYS</Typography>
          </Grid>

          <Grid item className="text-center">
            <Typography variant={mdBelow ? "h4" : "h1"}>
              {hours < 10 ? "0" : ""}
              {hours}
            </Typography>
            <br />
            <Typography className="text-muted">HOURS</Typography>
          </Grid>

          <Grid item className="text-center">
            <Typography variant={mdBelow ? "h4" : "h1"}>
              {mins < 10 ? "0" : ""}
              {mins}
            </Typography>
            <br />
            <Typography className="text-muted">MINUTES</Typography>
          </Grid>

          <Grid item className="text-center">
            <Typography variant={mdBelow ? "h4" : "h1"}>
              {sec < 10 ? "0" : ""}
              {sec}
            </Typography>
            <br />
            <Typography className="text-muted">SECONDS</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Timer;
