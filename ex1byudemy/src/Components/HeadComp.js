import React from "react";
import "../Newstyle.css";

class Head extends React.Component {
  render() {
    return (
      <div className="bg-dark text-white forHead">
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default Head;
