import { Typography } from "@mui/material";
import React, { Component } from "react";

class Label extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <Typography>{text}</Typography>
      </div>
    );
  }
}

export default Label;
