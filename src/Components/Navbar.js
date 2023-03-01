import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import CustomButton from "../Common/CustomButton";

class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: (theme) => theme.palette.primary.light }}
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ALLMONEY
            </Typography>
            <CustomButton text="Contact US" />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
