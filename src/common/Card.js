import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="relative flex flex-col w-96 bg-white rounded-lg shadow-xl p-7 h-72 hover:-top-1 hover:shadow-2xl transition-all duration-400">
          <div className="font-bold text-ccDark">{this.props.title}</div>
          <div className="text-sm my-5 text-ccDark">{this.props.text}</div>
          <div className="text-ccTeal mt-auto">{this.props.name}</div>
          <div className="text-xs font-semibold">{this.props.time}</div>
        </div>
      </div>
    );
  }
}

export default Card;
