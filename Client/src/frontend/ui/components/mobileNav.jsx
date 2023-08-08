import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FluorescentRoundedIcon from "@mui/icons-material/FluorescentRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

const MobileNav = () => {
  const [value, setValue] = useState(0);
  return (
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
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        href="/"
        icon={<HomeRoundedIcon sx={{ fontSize: "36px" }} />}
      />
      <BottomNavigationAction
        label="Inventions"
        href="/inventions"
        icon={<FluorescentRoundedIcon sx={{ fontSize: "36px" }} />}
      />
      <BottomNavigationAction
        label="Categories"
        href="/categories"
        icon={<ViewModuleRoundedIcon sx={{ fontSize: "36px",}} />}
      />
      <BottomNavigationAction
        label="Blog"
        href="#"
        icon={<ArticleRoundedIcon sx={{ fontSize: "36px" }} />}
      />
    </BottomNavigation>
  );
};

export default MobileNav;
