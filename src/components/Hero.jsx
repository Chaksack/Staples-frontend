import React from 'react';
import banner1 from '../images/cache/catalog/rightsidebanner/right-1-263x215.jpg';
import banner2 from '../images/cache/catalog/rightsidebanner/right-2-263x215.jpg';
import SimpleSlider from './HeroSlider';

const Hero = () => {
  return (
    <section className="min-h-[20vh] flex w-screen items-center justify-center gap-10">
      <SimpleSlider />
      <div className="md:flex flex-col hidden ">
        <img src={banner1} className="mx-1 md:my-2" />
        <img src={banner2} className="mx-1 md:my-2" />
      </div>
    </section>
  );
};

export default Hero;
