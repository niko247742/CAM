import React, { Component } from "react";
import { connect } from "react-redux";
import * as candidateActions from "../../redux/actions/candidateActions";
import Proptypes from "prop-types";
import { bindActionCreators } from "redux";

class CandidatePage extends Component {
  componentDidMount() {
    this.props.actions.getCandidates().catch(error => {
      alert("Loading candidates failed " + error);
    });
  }

  //   handleChange = event => {
  //     const candidates = { ...this.state.candidates, name: event.target.value };
  //     this.setState({ candidates });
  //   };
  //   handleSubmit = event => {
  //     event.preventDefault();
  //     const candidates = { ...this.state.candidates, name: event.target.value };

  //     this.props.actions.createCandidate(candidates);
  //   };

  render() {
    return (
      <div>
        <h1>Candidate</h1>
        <p>This is where you manage candidates.</p>
        {this.props.candidates.map(candidate => (
          <div key={candidate.name}>{candidate.name}</div>
        ))}
        {/* <form onSubmit={this.handleSubmit}>
          <h2>Add Candidate</h2>
          <h3>Name</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.candidates.name}
          />
          <input type="submit" value="Save" />
        </form>

        { */}
      </div>
    );
  }
}

CandidatePage.propTypes = {
  candidates: Proptypes.array.isRequired,
  actions: Proptypes.object.isRequired
};

function mapStateToProps(state) {
  return { candidates: state.candidates };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(candidateActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidatePage);
