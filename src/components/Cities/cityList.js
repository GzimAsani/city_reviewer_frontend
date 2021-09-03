import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../stylecss/cityList.css'

const City = (props) => {
  return (
    <div className="mb-5">
      <div>
        <div>
          <h2>{props.attributes.name}</h2>
          <h2 className="d-flex">Rating: <p>{props.attributes.avg_score}</p></h2>
        </div>
          <div className="city-image">
            <img className="card-img-top " src={props.attributes.image_url} alt="Card image cap"></img>
          </div>
          <div className="">
          <h3><Link className="view-city-link" to={`/cities/${props.attributes.slug}`} >View City</Link></h3>
          </div>
      </div>
    </div>
  );
};

export default City;