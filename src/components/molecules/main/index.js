import React from "react";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Header from "../header";
import useStyles from "./styles";
import TITLES from "./constants";
import Router from "../../../routes";
import Footer from '../../atoms/footer'
import { Link, useLocation } from "react-router-dom";
const Main = () => {
  const classes = useStyles();
  const location = useLocation();

  const isActualRoute = (url) => location.pathname === url;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {TITLES.map(({ TITLE, URL, ICON }) => (
              <ListItem
                button
                key={TITLE}
                component={Link}
                to={URL}
                selected={isActualRoute(URL)}
              >
                <ListItemIcon>{ICON}</ListItemIcon>
                <ListItemText primary={TITLE} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Router />
        <Footer className={classes.footer}/>
      </main>
    </div>
  );
}

export default Main
