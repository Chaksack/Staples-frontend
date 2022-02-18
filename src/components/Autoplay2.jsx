import React, { Component } from 'react';
import Slider from 'react-slick';
import DealCard from './Cards/DealCard';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
          breakpoint: 480,
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
          {/* <div>
            {this.props.subtitles.map((item, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  className="font-serif px-2 text-sm text-grey"
                >
                  {item}
                </a>
              );
            })}
          </div> */}
        </div>
        <Slider
          {...settings}
          className="flex border border-x-0 border-b-0 border-t-lightgrey items-center md:pl-4 pt-3 w-[75%] mt-3"
        >
          {this.props.data.map((item) => (
            <div key={item.id}>
              <DealCard
                date={item.date}
                discount={item.discount}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
