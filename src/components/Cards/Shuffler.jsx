import React, { useState } from 'react';

const Shuffler = ({ info }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="mx-auto w-90% md:w-auto mb-3 md:mb-0">
      {info.map((item) => (
        <div key={item.id}>
          <img
            className="w-[100%] lg:w-[26rem] h-25 md:h-[30rem] mb-3"
            src={item.options[index]}
          />
          <div className="flex md:w-[26rem] justify-between">
            {item.options.map((img, i) => (
              <button key={i}>
                <img
                  className="h-12 w-12 md:h-20 md:w-20"
                  src={img}
                  onClick={() => setIndex(i)}
                />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shuffler;
