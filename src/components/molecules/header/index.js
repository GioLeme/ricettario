import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from './styles'


const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography className={classes.headerTypography}> TITLE </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
