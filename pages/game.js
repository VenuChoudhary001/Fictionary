import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import Image from "next/image";
import QuestionCard from "../components/question-card";
import GlobalContext from "../components/context/context";
import Loading from "../components/ui/loading";
const Game = () => {
  const theme = useTheme();
  const { loading, setLoading } = React.useContext(GlobalContext);
  // if (loading) {
  //   return <Loading />;
  // }
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
            <Typography variant="h5" style={{ color: "white" }}>
              Your Score : 0
            </Typography>
          </Grid>
          <Grid item>
            <QuestionCard />
          </Grid>
          {/* <Grid item>
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
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Game;
