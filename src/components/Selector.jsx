import React, { useState } from 'react';

const Selector = (props) => {
  const [isOpen, setIsOpen] = useState(props.state);
  const [isListOpen, setIsListOpen] = useState(null);

  const toggleListOpen = (i) => {
    if (isListOpen === i) {
      return setIsListOpen(null);
    }
    setIsListOpen(i);
  };

  const options = [
    'Baby Care',
    'Cleaning & Household',
    'Daily Needs',
    'Dairy & Bakery',
    'Fruits',
    'Beverages',
    'Snacks & Food',
  ];

  const listButtons = [
    {
      id: 1,
      name: 'Oil & Spices',
      options: ['Lavender', 'Jasmine', 'Olive', 'Turmeric', 'Cinamon'],
    },
    {
      id: 2,
      name: 'Personal Care',
      options: ['Deodorants', 'Perfume', 'Toiletries', 'Tampons'],
    },
    {
      id: 3,
      name: 'Rice & Grains',
      options: ['Perfumed', 'Local', 'Corn', 'Millet', 'Barley'],
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="bg-secondary text-dark flex justify-start items-center pr-14 h-10 gap-5 uppercase font-serif w-64 transition ease-linear duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span>Categories</span>
      </button>
      <div className={isOpen ? '' : 'hidden'}>
        <ul className="absolute z-50 top-[100%] flex flex-col bg-white w-64 shadow text-left">
          {options.map((item, index) => (
            <li
              className="capitalize text-dark/90 border border-lightgrey/50 px-1 py-2 hover:text-primary"
              key={index}
            >
              <a href="#">{item}</a>
            </li>
          ))}
          {listButtons.map((list, i) => (
            <>
              <button
                key={i}
                onClick={() => toggleListOpen(i)}
                className="capitalize text-dark/90 border border-lightgrey/50 px-1 py-2 text-left flex flex-col"
              >
                <div className="flex justify-between items-center w-[100%]">
                  <span>{list.name}</span>
                  {isListOpen === i ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </button>
              <ul
                className={
                  isListOpen === i
                    ? `w-[100%] transition ease-linear duration-300`
                    : 'hidden'
                }
              >
                {list.options.map((option, index) => (
                  <li
                    className="text-dark/90 border border-lightgrey/10 shadow-sm my-1 hover:text-primary"
                    key={index}
                  >
                    <a href="">{option}</a>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Selector;
