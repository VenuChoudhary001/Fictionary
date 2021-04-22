import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import Image from "next/image";
import QuestionCard from "../components/question-card";
const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: "40vw",
    height: "auto",
    borderRadius: "2%",
    [theme.breakpoints.down("md")]: {
      widht: "200vw",
      height: "auto",
      margin: "1%",
    },
    // padding: "1%",
  },
  card: {
    backgroundColor: "rgba(0 0 0 / 53%)",
    borderTop: "3px solid wheat",
    borderBottom: "3px solid wheat",
    borderRadius: "20px",
    padding: "1%",
    color: "white",
  },
  btn: {
    border: "2px solid white",
    borderRadius: "20px",
    color: "#fff",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },
}));

const Game = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className="my-2 py-2" style={{ color: "white" }}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h5" style={{ lineHeight: "0.8" }}>
              QUESTION 1
            </Typography>
            <hr style={{ border: "1px solid white" }} />
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ color: "wheat" }}>
              Your Score : 0
            </Typography>
          </Grid>
          <Grid item>
            <QuestionCard />
          </Grid>
          <Grid item>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
              spacing={1}
            >
              <Grid item>
                <Button size="large" className={classes.btn}>
                  Answer
                </Button>
              </Grid>
              <Grid item>
                <Button size="large" className={classes.btn}>
                  submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Game;
