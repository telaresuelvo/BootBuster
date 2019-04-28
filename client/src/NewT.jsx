import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default class NewT extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button className="btns">New BOOTBUSTER</button>
        </Link>
      </div>
    );
  }
}
