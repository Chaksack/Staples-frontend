import React, { useState } from 'react';

const SidePanel = () => {
  const [value, setValue] = useState(750);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
    <div className="lg:w-72 flex md:flex-col border border-lightgrey/40 w-[100%] justify-center md:justify-between lg:justify-start">
      <ul className="w-[50%] md:w-[100%] rounded hidden md:flex md:flex-col">
        {products.map((item, index) => {
          return (
            <li
              className="border my-1 border-b-lightgrey py-2 px-3 font-serif text-sm text-dark/80 hover:text-primary"
              key={index}
            >
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="lg:my-4">
        <h2 className="border border-lightgrey py-2 px-3 font-serif text-sm text-dark/80 hover:text-primary uppercase">
          Filter
        </h2>
        <div className="w-[100%] border border-lightgrey border-y-0 p-1">
          <h4 className="font-serif text-sm text-dark/80">Price</h4>
          <div className="flex flex-col">
            <input
              className="accent-primary"
              type="range"
              defaultValue={value}
              onChange={handleChange}
              min={0}
              max={1500}
            />
            <div className="flex justify-between">
              <input
                type="number"
                defaultValue={0}
                className="text-center indent-3 border border-lightgrey my-1 text-dark/80 py-1 w-[25%] rounded-sm"
              />
              <input
                type="number"
                defaultValue={value}
                onChange={handleChange}
                className="text-center indent-3 border border-lightgrey my-1 text-dark/80 py-1 w-[25%] rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] border border-lightgrey p-1 ">
          <h4 className="border border-lightgrey py-2 px-3 font-serif text-sm text-dark/80 hover:text-primary uppercase">
            Manufacturer
          </h4>
          <div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="checkbox"
                className="accent-primary mr-2"
                name="apple"
                id="apple"
              />
              <label className="mr-auto text-sm text-dark/80 " htmlFor="apple">
                Apple
              </label>
              <span className="bg-blue absolute right-1 px-2 text-white rounded-sm">
                8
              </span>
            </div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="checkbox"
                className="accent-primary mr-2"
                name="samsung"
                id="samsung"
              />
              <label
                className="mr-auto text-sm text-dark/80 "
                htmlFor="samsung"
              >
                Samsung
              </label>
              <span className="bg-blue absolute right-1 px-2 text-white rounded-sm">
                5
              </span>
            </div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="checkbox"
                className="accent-primary mr-2"
                name="canon"
                id="canon"
              />
              <label className="mr-auto text-sm text-dark/80 " htmlFor="canon">
                Canon
              </label>
              <span className="bg-blue absolute right-1 px-2 text-white rounded-sm">
                2
              </span>
            </div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="checkbox"
                className="accent-primary mr-2"
                name="nikon"
                id="nikon"
              />
              <label className="mr-auto text-sm text-dark/80 " htmlFor="nikon">
                Nikon
              </label>
              <span className="bg-blue absolute right-1 px-2 text-white rounded-sm">
                4
              </span>
            </div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="checkbox"
                className="accent-primary mr-2"
                mr-2="accent-primary"
                name="hewlett-packard"
                id="hewlett-packard"
              />
              <label
                className="mr-auto text-sm text-dark/80 "
                htmlFor="hewlett-packard"
              >
                Hewlett-Packard
              </label>
              <span className="bg-blue absolute right-1 px-2 text-white rounded-sm">
                3
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] border border-lightgrey p-1 ">
          <h4 className="border border-lightgrey py-2 px-3 font-serif text-sm text-dark/80 hover:text-primary uppercase">
            Stock
          </h4>
          <div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="radio"
                className="accent-primary mr-2"
                name="canon"
                id="canon"
              />
              <label className="mr-auto text-sm text-dark/80 " htmlFor="canon">
                In Stock
              </label>
              <span className="bg-blue absolute right-1 px-2 text-white rounded-sm">
                20
              </span>
            </div>
            <div className="w-[100%] border border-lightgrey p-1 relative my-1">
              <input
                type="radio"
                disabled
                className="accent-primary mr-2"
                name="nikon"
                id="nikon"
              />
              <label className="mr-auto text-sm text-dark/80 " htmlFor="nikon">
                Out of Stock
              </label>
              <span className="bg-red absolute right-1 px-2 text-white rounded-sm">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
