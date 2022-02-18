import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductCard = (props) => {
  return (
    <a
      href="#"
      className="h-96 flex flex-col bg-tertiary/50 md:bg-white items-center border text-center text-dark border-lightgrey/40 my-2 rounded-md md:shadow-md md:w-64 relative hover:shadow-2xl card mt-2 md:mt-0"
    >
      <img className="h-64 rounded-md" src={props.image} />
      <h2 className="text-lg font-serif py-2">{props.title}</h2>
      <b className="text-sm text-primary">{props.price}</b>
      <div className="absolute top-1/3 flex items-center justify-around h-12 transition-opacity icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bg-primary rounded-full text-white mx-3 hover:bg-secondary h-10 w-10 p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bg-primary rounded-full text-white mx-3 hover:bg-secondary h-10 w-10 p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bg-primary rounded-full text-white mx-3 hover:bg-secondary h-10 w-10 p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>
      <form className="absolute h-10 bottom-0 flex w-60 items-center mb-2 px-8">
        <p className="mr-2">Qty</p>
        <input
          className="w-16 h-10 indent-1 border mr-5 border-grey/25 rounded shadow-sm"
          type="number"
          defaultValue={1}
        />
        <button className="bg-primary px-5 h-10 flex items-center justify-center rounded-md text-white hover:bg-primary/70">
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </button>
      </form>
    </a>
  );
};

export default ProductCard;
