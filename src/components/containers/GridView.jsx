import React from 'react';
import ProductCard from '../Cards/ProductCard';
import data from '../../JSON/Products.json';

const GridView = ({ className }) => {
  return (
    <div className={className}>
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
