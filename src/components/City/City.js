import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import ReviewForm from './ReviewForm';
import Review from './Reviews';
import '../../stylecss/city.css';

const City = (props) => {
  const [city, setCity] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const { slug } = props.match.params;
    const url = `http://localhost:3000/api/v1/cities/${slug}`;

    axios.get(url)
      .then((resp) => {
        setCity(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  });

  const handleChange = (e) => {
    e.preventDefault();

    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const csrfToken = document.querySelector('[name=csrf-token]').content
    // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const city_id = city.data.id;
    axios.post('http://localhost:3000/api/v1/reviews', { review, city_id })
      .then((resp) => {
        const included = [...city.inclded, resp.data.data];
        setCity({ ...city, included });
        setReview({ title: '', description: '', score: 0 });
      })
      .catch((resp) => {});
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  let reviews;
  if (loaded && city.included) {
    reviews = city.included.map((item, index) => (
      <Review
        key={index}
        attributes={item.attributes}
      />
    ));
  }

  return (
    <div className="Wrapper">
      {
        loaded
        && (
        <>
          <div className="column">
            <div className="main">
              <Header
                attributes={city.data.attributes}
                reviews={city.included}
              />
              <div className="">
                {reviews}
              </div>
            </div>
          </div>
          <div className="column">
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={city.data.attributes}
              setRating={setRating}
              review={review}
            />
          </div>

        </>
        )
      }
    </div>
  );
};

export default City;
