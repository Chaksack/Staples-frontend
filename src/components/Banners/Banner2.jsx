import React from 'react';

const Banner2 = () => {
  return (
    <section className="w-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] display flex justify-center lg:justify-between flex-wrap lg:flex-nowrap">
        <a className="my-1" href="#">
          <img
            src="http://templateinspire.com/opencart/Grocery/image/cache/catalog/offerbanner/555X200-555x200.png"
            alt="banners"
          />
        </a>
        <a className="my-1" href="#">
          <img
            src="http://templateinspire.com/opencart/Grocery/image/cache/catalog/offerbanner/555X200-3-555x200.png"
            alt="banners"
          />
        </a>
      </div>
    </section>
  );
};

export default Banner2;
