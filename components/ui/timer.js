import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Zoom } from "react-reveal";
const Timer = () => {
  const theme = useTheme();
  const mdBelow = useMediaQuery(theme.breakpoints.down("xs"));

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [sec, setSec] = useState();
  const [loading, setLoading] = useState(true);
  const calculateTime = () => {
    const date = new Date();
    const dDay = new Date("26 March 2022");
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
    setLoading(false);
  };

  useEffect(() => {
    setInterval(() => {
      calculateTime();
    }, 1000);
  }, []);
  if (loading) {
    return (
      <>
        <div className="my-4 loading">
          <div className="bubble first-bubble"></div>
          <div className="bubble second-bubble"></div>
          <div className="bubble third-bubble"></div>
        </div>
      </>
    );
  }
  return (
    <div className="my-4 py-4 ">
      <Container style={{ color: "#fff" }}>
        <Grid
          container
          justify="center"
          direction={mdBelow ? "column" : "row"}
          alignItems="center"
          spacing={mdBelow ? 3 : 8}
        >
          <Grid item xs={4} sm={3}>
            <CircularProgressbarWithChildren
              value={days}
              maxValue={100}
              minValue={0}
              strokeWidth={3}
              styles={buildStyles({
                textColor: "#ffff",

                strokeLinecap: "butt",
                trailColor: "rgba(0 0 0 / 15%)",
                // pathColor: "#b6174b",
                pathColor: "#e63946",
              })}
            >
              <Typography variant={mdBelow ? "body1" : "h3"}>
                <Zoom cascade top>
                  {days < 10 ? `0${days}` : `${days}`}
                </Zoom>
              </Typography>
              <Typography variant={mdBelow ? "caption" : "h6"}>
                {" "}
                <Zoom cascade top>
                  DAYS
                </Zoom>
              </Typography>
            </CircularProgressbarWithChildren>
            <br />
          </Grid>

          <Grid item xs={4} sm={3}>
            <CircularProgressbarWithChildren
              value={hours}
              maxValue={24}
              minValue={0}
              strokeWidth={3}
              styles={buildStyles({
                strokeLinecap: "butt",
                trailColor: "rgba(0 0 0 / 15%)",
                // pathColor: "#c3eb78",
                pathColor: "#f1faee",
              })}
            >
              <Typography variant={mdBelow ? "body1" : "h3"}>
                <Zoom cascade top>
                  {hours < 10 ? `0${hours}` : `${hours}`}
                </Zoom>
              </Typography>
              <Typography variant={mdBelow ? "caption" : "h6"}>
                <Zoom cascade top>
                  HOURS
                </Zoom>
              </Typography>
            </CircularProgressbarWithChildren>
          </Grid>

          <Grid item xs={4} sm={3}>
            <CircularProgressbarWithChildren
              value={mins}
              maxValue={60}
              minValue={0}
              strokeWidth={3}
              styles={buildStyles({
                textColor: "#ffff",
                strokeLinecap: "butt",
                trailColor: "rgba(0 0 0 / 15%)",
                // pathColor: "#61c9a8",
                pathColor: "#a8dadc",
              })}
            >
              <Typography variant={mdBelow ? "body1" : "h3"}>
                <Zoom cascade top>
                  {mins < 10 ? `0${mins}` : `${mins}`}
                </Zoom>
              </Typography>
              <Typography vvariant={mdBelow ? "caption" : "h6"}>
                <Zoom cascade top>
                  {mdBelow ? "MINS" : "MINUTES"}
                </Zoom>
              </Typography>
            </CircularProgressbarWithChildren>
          </Grid>

          <Grid item xs={4} sm={3}>
            <CircularProgressbarWithChildren
              value={sec}
              maxValue={60}
              minValue={0}
              strokeWidth={3}
              styles={buildStyles({
                textColor: "#ffff",
                strokeLinecap: "butt",
                trailColor: "rgba(0 0 0 / 15%)",
                // pathColor: "#f3ffc6",
                pathColor: "#457b9d",
              })}
            >
              <Typography variant={mdBelow ? "body1" : "h3"}>
                <Zoom cascade top>
                  {sec < 10 ? `0${sec}` : `${sec}`}
                </Zoom>
              </Typography>
              <Typography variant={mdBelow ? "caption" : "h6"}>
                <Zoom cascade top>
                  {mdBelow ? "SECS" : "SECONDS"}
                </Zoom>
              </Typography>
            </CircularProgressbarWithChildren>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Timer;
