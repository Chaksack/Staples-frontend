import React from 'react';
import WideCard from '../Cards/WideCard';
import data from '../../JSON/Products.json';

const ListView = ({ className }) => {
  return (
    <div className={className}>
      {data.map((item) => (
        <WideCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default ListView;
