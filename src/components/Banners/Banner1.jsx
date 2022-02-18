import React from 'react';

const Banner1 = () => {
  return (
    <section className="w-screen flex items-center justify-center">
      <div className="flex w[90%] md:w-[75%] items-center justify-center flex-wrap lg:flex-nowrap">
        <a href="#">
          <img
            src="http://templateinspire.com/opencart/Grocery/image/cache/catalog/allbanner/365X400-1-365x400.png"
            alt="banner"
          />
        </a>
        <div className="my-2 md:mx-5">
          <a href="#">
            <img
              src="http://templateinspire.com/opencart/Grocery/image/cache/catalog/allbanner/center-banner-1-380x190.png"
              alt="banner"
              className="mb-5"
            />
          </a>
          <a href="#">
            <img
              src="http://templateinspire.com/opencart/Grocery/image/cache/catalog/allbanner/center-banner-2-380x190.png"
              alt="banner"
              className="mt-5"
            />
          </a>
        </div>
        <a href="#">
          <img
            src="http://templateinspire.com/opencart/Grocery/image/cache/catalog/allbanner/365X400-365x400.png"
            alt="banner"
          />
        </a>
      </div>
    </section>
  );
};

export default Banner1;
