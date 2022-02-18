import React from 'react';
import CategoryCard from '../Cards/CategoryCard';
import products from '../../JSON/TopCategories.json';

const TopCategories = (props) => {
  return (
    <div className="w-[90%] md:w-[75%] mx-auto mt-3">
      <h2 className="text-lg font-serif uppercase">
        <span className="text-primary font-serif">■</span>
        {props.head}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-x-0 border-b-0 border-t-lightgrey items-center pl-5 pt-3 mt-3">
        {products.map((item) => (
          <CategoryCard
            key={item.id}
            image={item.image}
            description={item.description}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
