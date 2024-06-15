import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron text-light">
      <div className='jumbotronColor'>
        <h1 className="display-4 text-end">ELITE CARS</h1>
      </div>
      <div className='jumbotron2 text-start'>
        <p className="lead display-5">Exotic and luxury cars.</p>
      </div>
      <hr className="my-4" />
      <div className='jumbotron3 display-6 text-end'>
        <h3>WE HAVE IMPORTED CARS THAT ARE UNIQUE IN THE WORLD.</h3>
      </div>
      <div className="container">
        <div className="d-flex justify-content-end">
          <a className="btn btn-custom btn-lg" href="#" role="button">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;