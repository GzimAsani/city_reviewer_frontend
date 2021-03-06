import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../../Actions'
import City from './cityList'
import '../../stylecss/cityList.css'

class CitiesList extends Component {

  componentDidMount() {
    this.props.fetchCities();

  }



  returnPost = () => this.props.cities.map((todos) => (
    <div className="card container d-flex" key={todos.id} >
      <div className="card-body">
        <h5 className="">
          < City
            attributes={todos.attributes}
          />
        </h5>
      </div>
    </div>
  ));

  render() {
   
    return (
    <div className="mb-5">
      <nav>
        <h2 className="main-h2">Welcome to the Ballkan Review app</h2>
      </nav>
      <div className=''>
        {this.returnPost()}
      </div>
      </div>
    );
  }
};

const getMapToProps = (state) => ({ cities: state.cities });

export default connect(getMapToProps, { fetchCities })(CitiesList);