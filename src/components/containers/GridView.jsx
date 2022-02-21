import React from 'react';
import ProductCard from '../Cards/ProductCard';
import data from '../../JSON/Products.json';

const GridView = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-5 gap-y-5 place-items-center">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default GridView;
