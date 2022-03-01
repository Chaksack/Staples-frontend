import React, { useState } from 'react';

const Description = ({ show }) => {
  return (
    <div className={show ? `border border-lightgrey/60 p-3` : 'hidden'}>
      <h2 className="text-lg font-medium">Description</h2>
      <p className="text-dark/90 my-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        nesciunt adipisci? Voluptas mollitia quaerat debitis voluptates
        cupiditate consequuntur maxime, reiciendis explicabo corrupti, placeat
        quis officiis iusto exercitationem aspernatur, ducimus odit.
      </p>
      <h2 className="text-lg font-medium">Description</h2>
      <p className="text-dark/90 my-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        nesciunt adipisci? Voluptas mollitia quaerat debitis voluptates
        cupiditate consequuntur maxime, reiciendis explicabo corrupti, placeat
        quis officiis iusto exercitationem aspernatur, ducimus odit.
      </p>
      <h2 className="text-lg font-medium">Description</h2>
      <p className="text-dark/90 my-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        nesciunt adipisci? Voluptas mollitia quaerat debitis voluptates
        cupiditate consequuntur maxime, reiciendis explicabo corrupti, placeat
        quis officiis iusto exercitationem aspernatur, ducimus odit.
      </p>
    </div>
  );
};
const Specification = ({ show }) => {
  return (
    <div className={show ? `border border-lightgrey/60 p-3` : 'hidden'}>
      <h2 className="border border-b-0 border-lightgrey/50 text-lg font-medium text-primary p-1">
        Memory
      </h2>
      <div className="flex justify-between border border-b-0 border-lightgrey/50 ">
        <p className="w-[70%] border-r-[1px] border-lightgrey/60 p-1">Test 1</p>
        <span className="w-[30%] p-1">8GB</span>
      </div>
      <h2 className="border border-b-0 border-lightgrey/50 text-lg font-medium text-primary p-1">
        Processor
      </h2>
      <div className="flex justify-between border border-lightgrey/50 ">
        <p className="w-[70%] border-r-[1px] border-lightgrey/60 p-1">Cores</p>
        <span className="w-[30%] p-1">6</span>
      </div>
    </div>
  );
};
const Reviews = ({ show }) => {
  return (
    <div className={show ? `border border-lightgrey/60 p-3` : 'hidden'}>
      <p>There are no reviews of this product</p>
      <h2 className="text-xl font-serif mt-1">
        <span className="text-primary font-serif">■</span>
        Add A Review
      </h2>
      <form className="flex flex-col gap-1">
        <label htmlFor="name">Your Name</label>
        <input
          className="border border-lightgrey/50 focus:outline-0 focus:border-primary indent-3 text-sm h-9"
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="review">Your Review</label>
        <textarea
          className="border border-lightgrey/50 focus:outline-0 focus:border-primary indent-3 text-sm py-2"
          name="review"
          id="review"
          cols="30"
          rows="10"
        ></textarea>
        <div className="flex gap-4">
          <span>Rating</span>
          <div className="flex items-center gap-2">
            <p>Bad</p>
            <input className="accent-primary" type="radio" name="" id="" />
            <input className="accent-primary" type="radio" name="" id="" />
            <input className="accent-primary" type="radio" name="" id="" />
            <input className="accent-primary" type="radio" name="" id="" />
            <input className="accent-primary" type="radio" name="" id="" />
            <p>Good</p>
          </div>
        </div>
        <button className="py-1 px-2 w-20 ml-auto uppercase hover:bg-secondary hover:text-dark/80 transition-colors duration-300 ease-linear rounded-sm text-white bg-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const Specifications = () => {
  const [desc, setDesc] = useState(true);
  const [specs, setSpecs] = useState(false);
  const [review, setReview] = useState(false);

  const handleDesc = () => {
    setDesc(!desc);
    if (specs) {
      setSpecs(!specs);
    }
    if (review) {
      setReview(!review);
    }
  };
  const handleSpecs = () => {
    setSpecs(!specs);
    if (desc) {
      setDesc(!desc);
    }
    if (review) {
      setReview(!review);
    }
  };
  const handleReview = () => {
    setReview(!review);
    if (desc) {
      setDesc(!desc);
    }
    if (specs) {
      setSpecs(!specs);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between md:justify-start md:gap-2">
        <button
          onClick={handleDesc}
          className={
            desc
              ? `border border-lightgrey/50 border-b-0 p-2 font-medium text-primary`
              : `border border-lightgrey/50 border-b-0 p-2 font-medium`
          }
        >
          Description
        </button>
        <button
          onClick={handleSpecs}
          className={
            specs
              ? `border border-lightgrey/50 border-b-0 p-2 font-medium text-primary`
              : `border border-lightgrey/50 border-b-0 p-2 font-medium`
          }
        >
          Specification
        </button>
        <button
          onClick={handleReview}
          className={
            review
              ? `border border-lightgrey/50 border-b-0 p-2 font-medium text-primary`
              : `border border-lightgrey/50 border-b-0 p-2 font-medium`
          }
        >
          Reviews ({!review ? '0' : '0'})
        </button>
      </div>
      <div>
        <Description show={desc} />
        <Specification show={specs} />
        <Reviews show={review} />
      </div>
    </div>
  );
};

export default Specifications;
