import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../../Actions'


class CitiesList extends Component {

  componentDidMount() {
    this.props.fetchCities();
  }



  returnPost = () => this.props.cities.map((todos) => (
    <div className="card container d-flex" key={todos.id}>
      <div className="card-body">
        <h5 className="card-title text-primary">
          {todos.name}
        </h5>
        {/* <img src={todos.image_url} /> */}
        
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

const getMapToProps = (state) => ({ cities: state.cities });

export default connect(getMapToProps, { fetchCities })(CitiesList);