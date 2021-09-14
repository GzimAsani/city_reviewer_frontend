import React from 'react';
import { Redirect } from 'react-router-dom'
import { signIn, signOut, fetchCities } from '../Actions'
import { connect } from 'react-redux';
import City from '../components/Cities/citiesList';

class ProtectedRoute extends React.Component {
  
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    return this.props.isSignedIn ? (
      <>
        <City />
      </>
    )
      : <Redirect to={{ pathname: '/' }} />;
  }
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  username: state.auth.username,
  cities: state.cities
});

export default connect(mapStateToProps, { signIn, signOut, fetchCities })(ProtectedRoute)
