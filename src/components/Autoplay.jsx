import React, { Component } from 'react';
import Slider from 'react-slick';
import ProductCard from './Cards/ProductCard';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="py-5 mt-4 w-screen flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-[90%] md:w-[75%]">
          <h2 className="text-lg font-serif uppercase">
            <span className="text-primary font-serif">■</span>
            {this.props.head}
          </h2>
          <div className="hidden md:block">
            {this.props.subtitles.map((item, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  className="font-serif px-2 text-sm text-grey hover:text-dark"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
        <Slider
          {...settings}
          className="border border-x-0 border-b-0 border-t-lightgrey md:pl-4 pt-3 w-[75%] mt-3"
        >
          {this.props.data.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
