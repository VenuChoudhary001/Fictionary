import React from "react";
import {
  Button,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Theme from "./theme/theme";
import { Zoom, Fade, Flip } from "react-reveal";
import { useTheme } from "@material-ui/styles";
const QuestionCard = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="my-2">
      {/* <Hidden smUp>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Zoom top cascade>
              <img src="/test.jpg" className="card-media" />
            </Zoom>
          </Grid>
          <Grid item xs>
            <Zoom left cascade>
              <div className="card-content text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                accusantium eum molestiae delectus sapiente consequuntur fuga
                tempore possimus officiis ut, asperiores nihil nobis similique
                magnam quam nisi veniam libero nesciunt. Adipisci, tempore aut?
                Iure, qui?
              </div>
            </Zoom>
          </Grid>
        </Grid>
      </Hidden> */}
      {/* <Hidden smDown> */}

      <Container>
        <Paper
          elevation={16}
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Grid
            container
            justify="center"
            alignItems="center"
            direction={smUp ? "row" : "column"}
            spacing={5}
            className="hint"
          >
            <Grid item container xs={12} className="card-media" md={7}>
              <Zoom top cascade>
                <img src="/test.jpg" className="img-fluid " />
              </Zoom>
            </Grid>
            <Grid
              xs={12}
              md={5}
              item
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
              spacing={3}
            >
              <Grid item>
                <Typography variant={smUp ? "h4" : "h6"}>
                  HINT
                  <hr style={{ border: "4px solid yellow" }} />
                </Typography>
              </Grid>
              <Grid item>
                <Fade top cascade>
                  <div className="card-content text-left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste accusantium eum molestiae delectus sapiente
                    consequuntur fuga tempore possimus officiis ut, asperiores
                    nihil nobis similique magnam quam nisi veniam libero
                    nesciunt. Adipisci, tempore aut? Iure, qui?
                  </div>
                </Fade>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                direction="row"
                spacing={3}
              >
                <Grid item className="my-2">
                  <button className="btn">ANSWER</button>
                </Grid>
                <Grid item className="my-2">
                  {/* <Button variant="outlined" size="large" className="btn">
                      SUBMIT
                    </Button> */}
                  <button className="btn">SUBMIT</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      {/* </Hidden> */}
    </div>
  );
};

export default QuestionCard;
