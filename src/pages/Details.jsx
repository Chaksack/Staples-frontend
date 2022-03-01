import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Shuffler from '../components/Cards/Shuffler';
import Specifications from '../components/containers/Specifications';

const Details = () => {
  const [count, setCount] = useState(1);

  const info = [
    {
      id: 1,
      name: 'Cleanser',
      brand: 'Yazz',
      price: 'GH₵1200',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officiis dolorum eaque, molestiae ',
      options: [
        'http://templateinspire.com/opencart/Grocery/image/cache/catalog/product/09-300x300.png',
        'http://templateinspire.com/opencart/Grocery/image/cache/catalog/product/14-300x300.png',
        'http://templateinspire.com/opencart/Grocery/image/cache/catalog/product/15-300x300.png',
        'http://templateinspire.com/opencart/Grocery/image/cache/catalog/product/05-300x300.png',
        'http://templateinspire.com/opencart/Grocery/image/cache/catalog/product/07-300x300.png',
      ],
      available: 321,
      rating: 4,
    },
  ];

  return (
    <main className="w-screen pb-5 bg-white flex justify-center items-center">
      <div className="w-[90%] lg:w-[75%]">
        <div className="flex bg-light p-2 items-center rounded mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#51aa1b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#51aa1b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <h4 className="text-black mx-1">Details</h4>
        </div>
        <div className="flex flex-col md:flex-row my-4">
          <Shuffler info={info} />
          <div className="md:ml-3 w-[100%]">
            {info.map((detail) => (
              <div key={detail.id}>
                <h2 className="text-lg font-medium uppercase border border-x-0 border-t-0 border-lightgrey/50 pb-4 mb-2">
                  {detail.name}
                </h2>
                <div className="flex flex-col border border-x-0 border-t-0 border-lightgrey/50 py-4 mb-2 lg:pr-[50%]">
                  <span className="flex items-center justify-between">
                    Brands: <small className="text-base">{detail.brand}</small>
                  </span>
                  <span className="flex items-center justify-between">
                    Product code:{' '}
                    <small className="text-base">Product 16</small>
                  </span>
                  <span className="flex items-center justify-between">
                    Availability:{' '}
                    <small className="text-base">
                      {detail.available ? 'In stock' : 'Out of stock'}
                    </small>
                  </span>
                </div>
                <div className="border border-x-0 border-t-0 border-lightgrey/50 py-4 mb-2">
                  <p>{detail.price}</p>
                  <div>
                    <span>Qty:</span>
                    <button
                      onClick={() =>
                        count > 0
                          ? setCount((count) => count - 1)
                          : setCount(count)
                      }
                      className="bg-primary text-white text-lg rounded-sm px-3 mx-2 "
                    >
                      -
                    </button>
                    <input
                      className="focus:outline-none bg-light p-1 w-12"
                      type="num"
                      onChange={console.log(count)}
                      value={count}
                    />
                    <button
                      onClick={() => setCount((count) => count + 1)}
                      className="bg-primary text-white text-lg rounded-sm px-3 mx-2 "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="border border-x-0 border-t-0 border-lightgrey/50 py-4 mb-2 flex">
                  <button className="py-2 px-3 mr-2 bg-primary text-white rounded transition-colors duration-300 ease-in hover:bg-secondary">
                    Add to cart
                  </button>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-primary rounded text-white mx-2 hover:bg-secondary h-10 w-10 p-2 transition-colors duration-300 ease-in"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-primary rounded text-white mx-2 hover:bg-secondary h-10 w-10 p-2 transition-colors duration-300 ease-in"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="border border-x-0 border-t-0 border-lightgrey/50 py-4 mb-2 flex items-center gap-5">
                  <span className="flex items-center">
                    {new Array(detail.rating).fill(0).map((_, i) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="#51aa1b"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        key={i}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </span>
                  <a href="#">0 Reviews</a>
                  <a href="#">Write a review</a>
                </div>
                <div className="py-4 mb-2">
                  <FontAwesomeIcon
                    className="text-2xl mr-2 text-dark/70 hover:text-blue"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-2xl mr-2 text-dark/70 hover:text-blue"
                    icon={faTwitter}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-2xl mr-2 text-dark/70 hover:text-red"
                    icon={faPinterest}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="text-2xl mr-2 text-dark/70 hover:text-blue"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Specifications />
      </div>
    </main>
  );
};

export default Details;
