import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

const TITLES = [
  {
    TITLE: "Home",
    ICON: <HomeIcon />,
    URL: "/",
  },
  {
    TITLE: "Favorites",
    ICON: <StarIcon />,
    URL: "/favorites",
  },
  {
    TITLE: "Market List",
    ICON: <ShoppingCartIcon />,
    URL: "/buy-list",
  },
  {
    TITLE: "Categories",
    ICON: <ViewModuleIcon />,
    URL: "/categories",
  },
];

export default TITLES;
