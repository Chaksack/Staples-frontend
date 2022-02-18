import React, { useState } from 'react';
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterestP,
  faTelegramPlane,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavTop = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setActive((active) => !active);
  };

  const toggle = () => {
    setOpen((open) => !open);
  };

  const langueages = [
    {
      id: 1,
      image: 'http://127.0.0.1:8080/catalog/language/ar/ar.png',
      language: 'Arabic',
    },
    {
      id: 2,
      image: 'http://127.0.0.1:8080/catalog/language/en-gb/en-gb.png',
      language: 'English',
    },
    {
      id: 3,
      image: 'http://127.0.0.1:8080/catalog/language/tr-tr/tr-tr.png',
      language: 'Türkçe',
    },
    {
      id: 4,
      image: 'http://127.0.0.1:8080/catalog/language/fr-fr/fr-fr.png',
      language: 'French',
    },
    {
      id: 5,
      image: 'http://127.0.0.1:8080/catalog/language/it-it/it-it.png',
      language: 'Italian',
    },
    {
      id: 6,
      image: 'http://127.0.0.1:8080/catalog/language/pl-pl/pl-pl.png',
      language: 'Polish',
    },
    {
      id: 7,
      image: 'http://127.0.0.1:8080/catalog/language/es-es/es-es.png',
      language: 'Spanish',
    },
    {
      id: 8,
      image: 'http://127.0.0.1:8080/catalog/language/de-de/de-de.png',
      language: 'German',
    },
    {
      id: 9,
      image: 'http://127.0.0.1:8080/catalog/language/ka-ge/ka-ge.png',
      language: 'Georgian',
    },
    {
      id: 10,
      image: 'http://127.0.0.1:8080/catalog/language/bg-bg/bg-bg.png',
      language: 'Bulgarian',
    },
    {
      id: 11,
      image: 'http://127.0.0.1:8080/catalog/language/zh-cn/zh-cn.png',
      language: 'Chinese',
    },
    {
      id: 12,
      image: 'http://127.0.0.1:8080/catalog/language/he-il/he-il.png',
      language: 'Hebrew',
    },
    {
      id: 13,
      image: 'http://127.0.0.1:8080/catalog/language/sv-se/sv-se.png',
      language: 'Swedish',
    },
    {
      id: 14,
      image: 'http://127.0.0.1:8080/catalog/language/cs-cz/cs-cz.png',
      language: 'Czech',
    },
    {
      id: 15,
      image: 'http://127.0.0.1:8080/catalog/language/fi-fi/fi-fi.png',
      language: 'Finnish',
    },
    {
      id: 16,
      image: 'http://127.0.0.1:8080/catalog/language/hu-hu/hu-hu.png',
      language: 'Hungarian',
    },
  ];

  const account = [
    {
      id: 1,
      title: 'Register',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Login',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Wishlist',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-screen bg-tertiary h-10 shadow md:flex justify-center items-center px-1 hidden">
      <div className="bg-light h-8 shadow-md rounded-sm mx-1 flex flex-1 justify-center items-center">
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-blue"
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-blue"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-blue"
          icon={faTelegramPlane}
        />
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-red"
          icon={faPinterestP}
        />
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-blue"
          icon={faSkype}
        />
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-red"
          icon={faYoutube}
        />
        <FontAwesomeIcon
          className="px-4 text-grey border border-y-0 border-lightgrey hover:text-blue"
          icon={faLinkedin}
        />
      </div>
      <div className="bg-light h-8 shadow-md rounded-sm mx-1 md:flex flex-2 justify-center items-center px-4 hidden">
        <h2 className="text-black font-semibold">
          Coupons: <span className="font-normal text-grey">GROCERY10OFF</span>
        </h2>
      </div>
      <div className="bg-light h-8 shadow-md rounded-sm mx-1 md:flex flex-1 justify-around items-center hidden">
        <div className="relative h-10">
          <button
            onClick={toggle}
            className="flex items-center border border-lightgrey text-sm px-2 py-1 w-28"
          >
            My Account
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
          </button>
          <ul
            className={
              open
                ? `absolute top-[100%] bg-white z-50 w-28 border border-lightgrey/80`
                : 'hidden'
            }
          >
            {account.map((acc) => (
              <a
                className="flex text-dark/80 items-center border border-x-0 border-lightgrey/60"
                href="#"
                key={acc.id}
              >
                {acc.icon}
                {acc.title}
              </a>
            ))}
          </ul>
        </div>
        <div className="relative h-10">
          <button className="flex items-center border border-lightgrey px-2 py-1 w-28 text-sm">
            GH₵ Currency
          </button>
        </div>
        <div className="relative h-10">
          <button
            onClick={handleClick}
            className="flex items-center border border-lightgrey px-2 py-1 w-28"
          >
            <img src="http://127.0.0.1:8080/catalog/language/en-gb/en-gb.png" />
            Language
          </button>
          <ul
            className={
              active
                ? `absolute top-[100%] bg-white z-50 w-28 border border-lightgrey/80`
                : 'hidden'
            }
          >
            {langueages.map((lang) => (
              <a
                className="flex items-center border border-x-0 border-lightgrey/60"
                href="#"
                key={lang.id}
              >
                <img src={lang.image} />
                {lang.language}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
