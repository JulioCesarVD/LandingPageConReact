import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ image, title, text,price, buttonText }) => {
  return (
    <div className="card mt-5">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div class="mt-auto align-self-start">
                    <h6 class="card-text">{price}</h6>
                    <a href="#" class="btn btn-primary mt-2">{buttonText}</a>
                </div>
      </div>
    </div>
  );
};
 

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Card;
