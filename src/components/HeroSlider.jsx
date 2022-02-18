import React, { Component } from 'react';
import Slider from 'react-slick';
import slider1 from '../images/cache/catalog/slider/slider-01-575x450.png';
import slider2 from '../images/cache/catalog/slider/slide-02-575x450.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    };
    return (
      <div className="w-[90vw] md:w-[40vw] my-5">
        <Slider {...settings} className="">
          {[slider1, slider2].map((item, index) => (
            <img className="object-contain" key={index} src={item} />
          ))}
        </Slider>
      </div>
    );
  }
}
