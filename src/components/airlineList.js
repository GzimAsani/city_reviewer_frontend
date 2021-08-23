import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAirlines } from '../Actions'


class AirlinesList extends Component {

  componentDidMount() {
    this.props.fetchAirlines();
  }



  returnPost = () => this.props.airlines.map((todos) => (
    <div className="card container d-flex" key={todos.id}>
      <div className="card-body">
        <h5 className="card-title text-primary">
          {todos.name}
        </h5>
        
      </div>
    </div>
  ))

  render() {
    return (
      <div>
        {this.returnPost()}
      </div>
    );
  }
};

const getMapToProps = (state) => ({ airlines: state.airlines });

export default connect(getMapToProps, { fetchAirlines })(AirlinesList);