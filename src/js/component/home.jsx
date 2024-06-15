import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';
import cardImage1 from '../../img/pexels-mikebirdy-9761024.jpg';
import cardImage2 from '../../img/pexels-autorecords-10394786.jpg';
import cardImage3 from '../../img/pexels-garvin-st-villier-719266-3972755.jpg';
const Home = () => {
  const cardData = [
    {
      image: cardImage1,
      title: "Ferrari F8 Tributo",
      text: "V8 potente, 0-60 mph en 2.9 segundos.",
      price:"$302,500",
      buttonText: "Go somewhere"
    },
    {
      image: cardImage2,
      title: "Lamborghini Evo Spyder",
      text: "V8 de alto rendimiento, 0 a 60 mph en 2.8 segundos.",
      price:"$375,000",
      buttonText: "Go somewhere"
    },
    {
      image: cardImage3,
      title: "Corvette Stingray",
      text: "V8 potente, alcanza 0-60 mph en 3.5 segundos.",
      price:"$72,500",
      buttonText: "Go somewhere"
    },

    {
      image: "https://picsum.photos/150/150?random=4",
      title: "Card 4",
      text: "This is card 4",
      price:"$302,500",
      buttonText: "Go somewhere"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-3" key={index}>
              <Card
                image={card.image}
                title={card.title}
                text={card.text}
                price={card.price}
                buttonText={card.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
