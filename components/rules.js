import {
  Box,
  Button,
  Paper,
  Container,
  Grid,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import GlobalContext from "./context/context";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles({
  root: {
    padding: "2%",

    height: "500px",
    overflow: "auto",
  },
});

const Rules = () => {
  const classes = useStyles();
  const getContext = useContext(GlobalContext);
  const { setOpen, open } = getContext;
  return (
    <>
      <Container>
        <Box className="rules">
          <Paper elevation={10} className={classes.root}>
            <Grid
              spacing={1}
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Grid
                item
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                // style={{ backgroundColor: "rgba(0 0 0 / 53%)" }}
              >
                <Grid item>
                  <Typography variant="h5">RULES</Typography>
                </Grid>
                <Grid item>
                  <IconButton color="secondary" onClick={() => setOpen(!open)}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid
                item
                container
                direction="column"
                justify="center"
                aligItems="center"
              >
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
                  illum sapiente. Nihil cupiditate nostrum ipsum officia culpa,
                  ipsa earum deleniti ducimus dignissimos consectetur illum rem,
                  alias temporibus ipsam dolor quibusdam adipisci? Error ratione
                  expedita quae sit praesentium hic sunt! Eius, tempora ex? Unde
                  quasi, nulla molestiae nam veritatis neque molestias
                  reprehenderit ipsa, consequatur iure amet dolore natus eius
                  quam laudantium nesciunt suscipit quia voluptatem labore? Non,
                  similique. Veritatis a deserunt totam fugiat autem magni
                  maxime consectetur aliquam velit nesciunt saepe aut ratione
                  esse, odio accusamus similique porro accusantium debitis
                  veniam asperiores exercitationem consequuntur nisi eligendi
                  laborum. Ex earum saepe dicta?
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
export default Rules;
