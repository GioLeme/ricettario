import React from "react";

import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()
    return(
        <p className={classes.footer}> Riccetario® </p>
    )
}

export default Footer;
