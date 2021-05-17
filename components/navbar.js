import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Grid,
  Tabs,
  Tab,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  ListItemIcon,
  Divider,
  Box,
} from "@material-ui/core";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalContext from "./context/context";
import GavelIcon from "@material-ui/icons/Gavel";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Link from "next/link";
import { Bounce, Flip, Zoom, Fade } from "react-reveal";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
  },
  tabIndicator: {
    backgroundColor: "#fff",
  },
  tabs: {
    marginLeft: "auto",
    "& .MuiTab-wrapper": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "20px",
    },
  },
  drawerRoot: {
    "& .MuiPaper-root": {
      background: "rgba(0 0 0 / 53%)",

      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
}));

const Navbar = () => {
  const [value, setValue] = useState(0);

  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const route = useRouter();
  const getContext = useContext(GlobalContext);
  const { open, setOpen } = getContext;
  useEffect(() => {
    switch (route.pathname) {
      case "/":
        setValue(0);
        break;
      case "/game":
        setValue(1);
        break;
      case "/leaderboard":
        setValue(2);
        break;
      case "/login":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [route.pathname]);
  return (
    <>
      <Hidden smDown>
        <AppBar elevation={0} className={classes.root} position="sticky">
          <Toolbar>
            <img
              src="/DS.png"
              className="mx-2"
              style={{ width: "25px", display: "inline-block" }}
            />
            <Typography variant="subtitle1">
              <Flip right cascade>
                Fictionary
              </Flip>
            </Typography>

            <Tabs
              value={value}
              className={classes.tabs}
              classes={{ indicator: classes.tabIndicator }}
            >
              <Link href="/">
                <Tab
                  label="HOME"
                  // disabled="false"
                  onClick={() => {
                    setValue(0);
                  }}
                />
              </Link>

              <Link href="/game">
                <Tab label="GAME" onClick={() => setValue(1)} />
              </Link>

              <Link href="/leaderboard">
                <Tab label="LEADERBOARD" onClick={() => setValue(2)} />
              </Link>
              <Zoom cascade right>
                <Tab
                  label="RULES"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              </Zoom>
            </Tabs>
            <Zoom cascade right></Zoom>
            <Link href="/login">
              <Button
                onClick={() => setValue(4)}
                variant="contained"
                color="secondary"
              >
                LOG IN
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden mdUp>
        <AppBar elevation={0} className={classes.root} position="static">
          <Toolbar>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon style={{ color: "#ffff" }} />
            </IconButton>
            <Typography variant="subtitle2">
              <Flip right cascade>
                Fictionary
              </Flip>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className="drawer">
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(!openDrawer)}
            className={classes.drawerRoot}
          >
            <List>
              <Link href="/">
                <ListItem button selected={value == 0}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <ListItem
                button
                onClick={() => setOpen(!open)}
                selected={value == 2}
              >
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="Rules" />
              </ListItem>
              <Link href="/game">
                <ListItem button selected={value == 1}>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Game" />
                </ListItem>
              </Link>
              <Link href="/leaderboard">
                <ListItem button>
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary="Leaderboard" />
                </ListItem>
              </Link>
              <Link href="/login">
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="LogIn" />
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </Box>
      </Hidden>
    </>
  );
};

export default Navbar;
