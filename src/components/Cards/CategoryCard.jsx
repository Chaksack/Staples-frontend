import React from 'react';

const CategoryCard = (props) => {
  return (
    <a
      href="#"
      className="mx-2 flex flex-col items-center font-mono text-dark text-sm"
    >
      <img src={props.image} />
      <p>
        {props.description}({props.quantity})
      </p>
    </a>
  );
};

export default CategoryCard;
