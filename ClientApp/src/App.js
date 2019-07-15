import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Layout } from "./components/Common/Layout/Layout";
import Home from "./components/Home/Home";
import Candidate from "./components/Candidate/CandidatePage";
import Assessment from "./components/Assessment/Assessment";
import Question from "./components/Question/Question";
import Report from "./components/Report/Report";
import PageNotFound from "./components/PageNotFound";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/candidates" component={Candidate} />
          <Route path="/report" component={Report} />
          <Route path="/question" component={Question} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    );
  }
}
