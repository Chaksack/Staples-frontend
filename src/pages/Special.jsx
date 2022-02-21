import React, { useState } from 'react';
import GridView from '../components/containers/GridView';
import ListView from '../components/containers/ListView';

const Special = () => {
  const [list, setList] = useState(false);
  const [grid, setGrid] = useState(true);

  const handleList = () => {
    if (grid) {
      setGrid((grid) => false);
      return;
    }
    if (list === false) {
      setList((list) => true);
      return;
    }
    console.log(grid, list);
  };
  const handleGrid = () => {
    if (list) {
      setList((list) => false);
      return;
    }
    if (grid === false) {
      setGrid((grid) => true);
      return;
    }
    console.log(grid, list);
  };

  return (
    <main className="w-screen pb-5 bg-white flex justify-center items-center">
      <div className="w-[90%] md:w-[75%]">
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
          <h4 className="text-black mx-1">Special Offers</h4>
        </div>
        <h2 className="text-xl font-serif mt-4">
          <span className="text-primary font-serif">■</span>
          Special Offers
        </h2>
        <div className="border border-lightgrey h-14 rounded md:flex items-center justify-around mt-4 relative">
          <div className="hidden md:flex gap-2">
            <button className="focus:border" onClick={handleList}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button className="focus:border" onClick={handleGrid}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>
          <div className="text-primary hidden lg:block">Product compare(0)</div>
          <div className="absolute top-3 left-[25%] md:relative md:left-0 md:top-0">
            <label htmlFor="sort">Sort by:</label>
            <select
              name="sort"
              className="border border-lightgrey/80 w-44 py-1 ml-2 rounded-sm focus:outline-none focus:border-dark text-dark/80 text-sm"
            >
              <option value="Default" defaultValue={`Default`}>
                Default
              </option>
              <option value="Name1">Name(A-Z)</option>
              <option value="Name2">Name(Z-A)</option>
              <option value="Price1">Price(Low {'>'} High)</option>
              <option value="Price2">Price(High {'>'} Low)</option>
              <option value="Rating1">Rating(Highest)</option>
              <option value="Rating2">Rating(Lowest)</option>
              <option value="Model1">Model(A-Z)</option>
              <option value="Model2">Model(Z-A)</option>
            </select>
          </div>
          <div className="hidden md:inline">
            <label htmlFor="show">Show:</label>
            <select
              name="show"
              className="border border-lightgrey/80 w-36 py-1 ml-2 rounded-sm focus:outline-none focus:border-dark text-dark/80 text-sm"
            >
              <option value="view0">10</option>
              <option value="view1" defaultValue={25}>
                25
              </option>
              <option value="view2">50</option>
              <option value="view3">75</option>
              <option value="view4">100</option>
            </select>
          </div>
        </div>
        <div>{grid ? <GridView /> : <ListView />}</div>
        <span className="text-sm text-dark/80">Showing Page:1 of 6</span>
      </div>
    </main>
  );
};

export default Special;
