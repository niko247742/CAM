import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as candidateActions from "../../redux/actions/candidateActions";
import Proptypes from 'prop-types';
import { bindActionCreators } from "redux";
import objectAssign from "object-assign";



class CandidatePage extends Component {
        state = {
            displayName: "Candidates",
            candidate: {
                name: "John Doe",

            }
        
    }
    handleChange = (event) => {
        const candidate = { ...this.state.candidate, name: event.target.value };
        this.setState({ candidate });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(candidateActions.createCandidate(this.state.candidate));
        
    }
    

    render() {
        return (
            <div>
                <h1>Candidate</h1>
                <p>This is where you manage candidates.</p>
                <p>The Candidate is {this.state.candidate.name} </p>
                <form onSubmit={this.handleSubmit} >
                    <h2>Add Candidate</h2>
                    <h3>Name</h3>
                    <input type="text" onChange={this.handleChange} value={this.state.candidate.name} />
                    <input type = "submit" value="Save"/>
                </form>
                {this.props.candidate.map(candidate => (<div key = {candidate.name}>{candidate.name}</div>))}
            </div>
        );
    }
}

CandidatePage.propTypes = {
    dispatch: Proptypes.func.isRequired
}

function mapStateToProps(state) {
    return {candidate:state.candidate}
}
function mapDispatchToProps(dispatch) {
	var combinedActions = objectAssign({}, candidateActions);
	return {
		actions: bindActionCreators(combinedActions, dispatch)
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(CandidatePage);