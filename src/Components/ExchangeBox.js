import React, { Component } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TextField, Typography } from "@mui/material";

class ExchangeBox extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 750,
            height: 300,
            borderRadius: 5,
            margin: "auto",
            marginTop: 15,
          },
        }}
      >
        <Paper
          elevation={8}
          sx={{ backgroundColor: (theme) => theme.palette.primary.teal }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.main,
              marginTop: 10,
              marginLeft: 5,
            }}
          >
            Amount
          </Typography>
          <TextField
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              min: 0,
              style: { textAlign: "center" },
            }}
            sx={{ backgroundColor: "white" }}
            id="standard-basic"
            variant="outlined"
          />
        </Paper>
      </Box>
    );
  }
}

export default ExchangeBox;
