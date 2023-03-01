import React, { Component } from "react";
import Button from "@mui/material/Button";

class CustomButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          sx={{
            color: (theme) => theme.palette.primary.light,
            backgroundColor: (theme) => theme.palette.primary.orange,
          }}
        >
          {text}
        </Button>
      </div>
    );
  }
}

export default CustomButton;
