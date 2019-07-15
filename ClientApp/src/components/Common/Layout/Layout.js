import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export class Layout extends Component {
  

  render() {
    return (
        <Grid fluid>
            <div className="flex-group">
                <h2>Welcome {this.props.displayName}</h2>
                <Link to="/"><h2>CAM</h2></Link>
            </div>
        <Row>
      
        
          <Col sm={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
