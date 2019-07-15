import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <p>What would you like to do?</p>
        <Link to="assessment">Create an Assessment</Link>
        <Link to="report">Generate Reports</Link>
        <Link to="question">Manage Questions</Link>
        <Link to="candidates">Manage Candidates</Link>
      </div>
    );
  }
}

export default Home;
