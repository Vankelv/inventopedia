import React, { useEffect } from "react";
import "./ui/style.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation;

  useEffect(() => {
    document.title = "Blog coming soon | Inventopedia";
  }, [location]);

  const containerStyle = {
    backgroundImage: `url(/imgs/default-image.jpeg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Set the height as needed
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle} id="coming_soon">
      <h2>Coming Soon</h2>
      <Stack spacing={2} direction="row">
        <Button href="/" className="btn_contained" variant="contained">
          Home
        </Button>
        <Button href="/inventions" className="btn_outline" variant="outlined">
          Inventions
        </Button>
      </Stack>
    </div>
  );
};

export default Blog;
