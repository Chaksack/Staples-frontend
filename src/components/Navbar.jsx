import logo from '../images/catalog/logo.png';
import SearchInput from './SearchInput';
import Call from '../images/catalog/icon-call.png';
import Cart from '../images/catalog/carti.png';
import { useState } from 'react';
import Categories from './Categories';
import NavLinks from './NavLinks';
import NavTop from './NavTop';
import Selector from './Selector';

const Navbar = () => {
  const [change, setChange] = useState('');
  const [cart, setCart] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setChange(change);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const cartButton = () =>
    setCart((prevCart) => {
      if (cart > 0) {
        console.log(`Cart has ${cart} items in it`);
      } else {
        alert(`Cart is empty`);
      }
    });

  return (
    <>
      <nav>
        <NavTop />
        <div className="w-screen bg-white min-h-24 flex flex-col md:flex-row justify-between items-start md:items-center lg:px-36 relative">
          <img src={logo} className="ml-2 w-28 lg:w-56 my-1 md:my-0" />
          <div className="flex items-center mb-2">
            <Categories
              class={
                'h-9 w-48 border border-lightgrey rounded-sm px-1 focus:outline-none hidden md:flex'
              }
            />
            <SearchInput
              className="ml-2 md:ml-0 focus:outline-none w-[80vw] md:w-96 h-9 px-2 border border-lightgrey rounded-sm"
              type="text"
              name="search"
              handleChange={handleChange}
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-white bg-primary p-2 hover:bg-secondary transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center px-4 items-center">
            <span className="lg:flex items-center justify-center text-black text-xs mr-2 hidden">
              <img src={Call} className="w-9 mx-2" />
              Call us:
              <br />
              0557804814
            </span>
            <span className="md:flex items-center justify-center text-black text-xs relative hidden">
              <img src={Cart} className="w-8 mx-2" />
              My cart
              <br />
              GH₵0.00
              <button
                onClick={cartButton}
                className="bg-primary px-2 py-1 rounded-xl absolute bottom-0 left-0 text-white"
              >
                {cart}
              </button>
            </span>
          </div>
        </div>
        <div className="w-screen bg-primary h-10 md:flex justify-around items-center px-36 hidden">
          <NavLinks />
        </div>
      </nav>
      <button
        onClick={toggleMenu}
        className="absolute top-2 right-2 z-[999999] md:hidden"
      >
        {!menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div
        className={
          menu
            ? `flex flex-col absolute top-0 bg-white w-[100vw] min-h-[100vh] border text-dark z-[1000] md:hidden`
            : `hidden`
        }
      >
        <Selector state={false} />
        <ul className="flex flex-col">
          <a
            href="#"
            className="w-[100%] pl-2 my-2 hover:text-secondary transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="w-[100%] pl-2 my-2 hover:text-secondary transition-colors"
          >
            Special
          </a>
          <a
            href="#"
            className="w-[100%] pl-2 my-2 hover:text-secondary transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="w-[100%] pl-2 my-2 hover:text-secondary transition-colors"
          >
            SiteMap
          </a>
          <a
            href="#"
            className="w-[100%] pl-2 my-2 hover:text-secondary transition-colors"
          >
            Brand
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
