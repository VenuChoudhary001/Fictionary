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
} from "@material-ui/core";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/styles";
import GavelIcon from "@material-ui/icons/Gavel";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    // background:
    //   "linear-gradient(  90deg,  rgba(0, 0, 0, 1) 20%,  rgba(8, 45, 50, 1) 72%,  rgba(30, 50, 54, 1) 100%)",
  },
  tabIndicator: {
    backgroundColor: "#fff",
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  drawerRoot: {
    "& .MuiPaper-root": {
      background: "white",

      color: "black",
    },
  },
}));

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <AppBar elevation={0} className={classes.root} position="static">
          <Toolbar>
            <Typography variant="h4" style={{ fontFamily: "Dancing Script" }}>
              FICTIONARY
            </Typography>
            <Tabs
              value={value}
              className={classes.tabs}
              classes={{ indicator: classes.tabIndicator }}
            >
              <Tab
                label="RULES"
                onClick={() => {
                  setValue(0);
                  setOpenDialog(!openDialog);
                }}
              />
              <Tab label="GAME" onClick={() => setValue(1)} />
              <Tab label="LEADERBOARD" onClick={() => setValue(2)} />
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
            <Typography variant="h4" style={{ fontFamily: "Dancing Script" }}>
              FICTIONARY
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(!openDrawer)}
          className={classes.drawerRoot}
        >
          <List>
            <ListItem button selected={value == 0}>
              <ListItemIcon>
                <GavelIcon />
              </ListItemIcon>
              <ListItemText primary="Rules" />
            </ListItem>
            <ListItem button selected={value == 1}>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </ListItem>
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
