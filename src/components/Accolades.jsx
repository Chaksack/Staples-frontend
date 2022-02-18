import React, { Component } from 'react';
import Slider from 'react-slick';
import accolades from '../JSON/Accolades.json';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    };
    return (
      <div className="py-5 mt-4 w-screen flex flex-col items-center justify-center">
        <Slider
          {...settings}
          className="border border-lightgrey/20 py-4 w-[90%] md:w-[75%] mt-3"
        >
          {accolades.map((item) => (
            <img key={item.id} src={item.image} />
          ))}
        </Slider>
      </div>
    );
  }
}
