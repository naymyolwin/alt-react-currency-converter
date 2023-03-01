import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class Input extends Component {
  render() {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    );
  }
}

export default Input;
