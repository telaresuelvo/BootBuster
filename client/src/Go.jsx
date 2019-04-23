import React from "react";
import { Link } from "react-router-dom";
import SecondView from "./SecondView.jsx";

class Go extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-lg btn-success"
          disabled={!this.props.value}
          onClick={this.props.startCountDown}
        >
          <Link to={{ pathname: "/SecondView", state: { isClicked: true } }}>
            Start
          </Link>
        </button>
      </div>
    );
  }
}
console.log("exist");
export default Go;
