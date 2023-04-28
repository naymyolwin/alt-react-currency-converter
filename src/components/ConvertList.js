import React, { Component } from "react";
import ConvertTable from "../common/ConvertTable";

class ConvertList extends Component {
  render() {
    return (
      <div className="w-full container mx-auto flex flex-col md:flex-row mt-64 md:mt-32 gap-2">
        <ConvertTable />
        <ConvertTable />
      </div>
    );
  }
}

export default ConvertList;
