import React from 'react';
import Selector from './Selector';

const NavLinks = () => {
  return (
    <div className="flex gap-5">
      <Selector state={false} />
      <ul className="h-10 font-serif text-white mr-auto px-2 lg:px-10 flex items-center justify-around">
        <a
          href="#"
          className="mx-4 lg:mx-10 hover:text-secondary transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="mx-4 lg:mx-10 hover:text-secondary transition-colors"
        >
          Special
        </a>
        <a
          href="#"
          className="mx-4 lg:mx-10 hover:text-secondary transition-colors"
        >
          Contact
        </a>
        <a
          href="#"
          className="mx-4 lg:mx-10 hover:text-secondary transition-colors"
        >
          SiteMap
        </a>
        <a
          href="#"
          className="mx-4 lg:mx-10 hover:text-secondary transition-colors"
        >
          Brand
        </a>
      </ul>
    </div>
  );
};

export default NavLinks;
