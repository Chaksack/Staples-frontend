import React from 'react';
import data from '../JSON/SIteMap.json';

const SiteMap = () => {
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
          <h4 className="text-black mx-1">Site Map</h4>
        </div>
        <h2 className="text-xl font-serif mt-4">
          <span className="text-primary font-serif">■</span>
          Site Map
        </h2>
        <div className="mt-4 grid md:grid-cols-2">
          {data.map((link) => (
            <div className="font" key={link.id}>
              <h2 className="font-medium">{link.item}</h2>
              <ul className="ml-10 list-disc">
                {link.subitems
                  ? link.subitems.map((sub, index) => (
                      <li key={index}>
                        <p>{sub.name}</p>
                        <ul className="ml-10 list-decimal">
                          {sub.list
                            ? sub.list.map((opt, index) => (
                                <li key={index}>{opt}</li>
                              ))
                            : ''}
                        </ul>
                      </li>
                    ))
                  : ''}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SiteMap;
