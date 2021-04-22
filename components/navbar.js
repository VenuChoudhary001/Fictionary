import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/styles";
import GavelIcon from "@material-ui/icons/Gavel";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Link from "next/link";
import { Bounce, Flip } from "react-reveal";
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
  const [openDialog, setOpenDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const route = useRouter();

  useEffect(() => {
    switch (route.pathname) {
      case "/":
        setValue(0);
        break;
      case "/game":
        setValue(2);
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
                  onClick={() => {
                    setValue(0);
                  }}
                />
              </Link>

              <Tab
                label="RULES"
                onClick={() => {
                  setValue(1);
                  setOpenDialog(!openDialog);
                }}
              />

              <Link href="/game">
                <Tab label="GAME" onClick={() => setValue(2)} />
              </Link>
              <Link href="/test">
                <Tab label="LEADERBOARD" onClick={() => setValue(3)} />
              </Link>
            </Tabs>
            <Button variant="contained" color="secondary">
              LOG OUT
            </Button>
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
            <ListItem button selected={value == 1}>
              <ListItemIcon>
                <GavelIcon />
              </ListItemIcon>
              <ListItemText primary="Rules" />
            </ListItem>
            <Link href="/game">
              <ListItem button selected={value == 2}>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Game" />
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navbar;
