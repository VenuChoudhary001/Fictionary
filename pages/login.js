import {
  Box,
  Container,
  Grid,
  Icon,
  Button,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Image from "next/image";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import {} from "react-reveal";
const Login = () => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "rgba(0 0 0 / 38%)",
    },
  });
  const classes = useStyles();

  return (
    <>
      <div className="login-form my-4 py-5 mx-2  px-2">
        <Container>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={2}
          >
            <div
              className="inner text-center "
              style={{
                backgroundColor: "rgba(0 0 0 / 75%)",
              }}
            >
              <Grid item className="form-header">
                {/* <Icon>
                  <PermIdentityOutlinedIcon
                    style={{
                      fontSize: "100",
                      fontWeight: "2",
                      color: "white",
                    }}
                  />
                </Icon> */}
                {/* <Typography variant="subtitle1">LOG IN</Typography> */}
                <img src="/DS.png" className="mt-2" style={{ width: "35px" }} />
              </Grid>

              <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={1}
                className="px-4 mx-2"
              >
                <Grid item>
                  <Icon>
                    <AccountCircleIcon
                      style={{ fontSize: "30", color: "white" }}
                    />
                  </Icon>
                </Grid>
                <Grid item>
                  <input type="text" placeholder="Name" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={1}
                className="px-4 mx-2"
              >
                <Grid item>
                  <Icon>
                    <MailOutlineOutlinedIcon
                      style={{ fontSize: "30", color: "white" }}
                    />
                  </Icon>
                </Grid>
                <Grid item>
                  <input type="text" placeholder="Email" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={1}
                className="px-4 mx-2"
              >
                <Grid item>
                  <Icon>
                    <LockOutlinedIcon
                      style={{ fontSize: "30", color: "white" }}
                    />
                  </Icon>
                </Grid>
                <Grid item>
                  <input type="text" placeholder="Password" />
                </Grid>
              </Grid>
              <Grid item className=" my-4 mx-2 px-4">
                <Button fullWidth variant="contained" color="secondary">
                  LOG in
                </Button>
              </Grid>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Login;
