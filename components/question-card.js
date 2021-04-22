import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Zoom, Fade, Flip } from "react-reveal";
const QuestionCard = () => {
  return (
    <div className="card-root">
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
    </div>
  );
};

export default QuestionCard;
