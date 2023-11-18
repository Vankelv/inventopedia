import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FluorescentRoundedIcon from "@mui/icons-material/FluorescentRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

const MobileNav = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <div id="footer">
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        paddingBottom: 3,
        paddingTop: 0,
        "& .Mui-selected": {
          color: "#7c64f5 !important",
        },
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        component={Link}
        to="/"
        icon={<HomeRoundedIcon sx={{ fontSize: "36px" }} />}
      />
      <BottomNavigationAction
        label="Inventions"
        value="/inventions"
        component={Link}
        to="/inventions"
        icon={<FluorescentRoundedIcon sx={{ fontSize: "36px" }} />}
      />
      <BottomNavigationAction
        label="Categories"
        value="/categories"
        component={Link}
        to="/categories"
        icon={<ViewModuleRoundedIcon sx={{ fontSize: "36px" }} />}
      />
      <BottomNavigationAction
        label="Blog"
        value="/blog"
        component={Link}
        to="/blog"
        icon={<ArticleRoundedIcon sx={{ fontSize: "36px" }} />}
      />
    </BottomNavigation>
    </div>
  );
};

export default MobileNav;
