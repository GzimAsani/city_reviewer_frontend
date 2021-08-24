import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../../Actions'

class City extends Component {

  componentDidMount() {
    this.props.fetchCity(this.props.match.params.slug);
  }



  render() {
    if (!this.props.city) {
      return <div>Loading!!!</div>;
    }
    return (
      <div>
        <div>
          {this.props.city.name}
        </div>
        <div>
          <img src={this.props.city.image_url}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ city: state.city[ownProps.match.params.slug] });

export default connect(mapStateToProps, { fetchCity })(City);