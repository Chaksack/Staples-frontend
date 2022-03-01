import React from 'react';

const SidePanel = () => {
  const products = [
    'Baby Care (17)',
    'Cleaning & Household (0)',
    'Daily Needs (7)',
    'Dairy & Bakery (15)',
    'Fruits (16)',
    'Beverages (17)',
    'Oil &Spices (19)',
    'Personal Care (15)',
    'Rice & Grains (18)',
    'Snacks & Food (12)',
  ];

  return (
    <div className="md:w-72">
      <ul className="border border-lightgrey border-b-0 w-[100%] rounded">
        {products.map((item, index) => {
          return (
            <li
              className="border border-x-0 border-t-0 border-b-lightgrey py-2 px-3 font-serif text-sm text-dark/80 hover:text-primary"
              key={index}
            >
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidePanel;
