import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedin,
  faPinterestP,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGift,
  faWallet,
  faHeadset,
  faShip,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-dark min-h-28 w-screen text-lightgrey py-5">
        <div className="w-[90%] md:w-[75%] min-h-[100%] grid grid-cols-2 place-items-center gap-y-2 md:grid-cols-4">
          <ul className="flex items-center">
            <li className="flex flex-col items-center">
              <FontAwesomeIcon
                className="mr-2 h-8 transition-transform"
                icon={faGift}
              ></FontAwesomeIcon>
              <h4 className="font-serif text-sm">Special Gift Cards</h4>
              <p className="text-xs">Give a perfect gift</p>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="flex flex-col items-center">
              <FontAwesomeIcon
                className="mr-2 h-8 transition-transform"
                icon={faWallet}
              ></FontAwesomeIcon>
              <h4 className="font-serif text-sm">Secure Payments</h4>
              <p className="text-xs">100% secure payment</p>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="flex flex-col items-center">
              <FontAwesomeIcon
                className="mr-2 h-8 transition-transform"
                icon={faHeadset}
              ></FontAwesomeIcon>
              <h4 className="font-serif text-sm">27/7 Support</h4>
              <p className="text-xs">Online support 24/7</p>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="flex flex-col items-center">
              <FontAwesomeIcon
                className="mr-2 h-8 transition-transform"
                icon={faShip}
              ></FontAwesomeIcon>
              <h4 className="font-serif text-sm">Free Shipping</h4>
              <p className="text-xs">On orders above GH₵101</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className=":h-[60vh] bg-black text-white w-screen items-center justify-around flex flex-col">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 w-[90%] md:w-[80%] py-5">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-serif py-2 w-[100%]">Contact Us</h2>
            <ul className="w-[100%]">
              <li className="text-sm text-grey py-1 hover:text-lightgrey transition">
                Accra, Ghana
              </li>
              <li className="text-sm text-grey py-1 hover:text-lightgrey transition">
                staples@ingeniumtechs.com
              </li>
              <li className="text-sm text-grey py-1 hover:text-lightgrey transition">
                (+233) - 557 - 804 - 814
              </li>
              <li className="text-sm text-grey py-1 hover:text-lightgrey transition">
                fax@ingeniumtechs.com
              </li>
            </ul>
          </div>
          <ul className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-serif py-2 w-[100%]">Extras</h2>
            <ul className="w-[100%]">
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Brands
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Gift Certificates
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Affiliate
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Specials
              </a>
            </ul>
          </ul>
          <ul className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-serif py-2 w-[100%]">Information</h2>
            <ul className="w-[100%]">
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Delivery Information
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Site Map
              </a>
            </ul>
          </ul>
          <ul className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-serif py-2 w-[100%]">My Account</h2>
            <ul className="w-[100%]">
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                My Account
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Order History
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Newsletter
              </a>
              <a
                href="#"
                className="block text-sm cursor-pointer text-grey py-1 hover:text-lightgrey transition"
              >
                Returns
              </a>
            </ul>
          </ul>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-serif py-2 w-[100%]">Newsletter</h2>
            <p className="text-sm text-grey py-1 hover:text-lightgrey transition">
              Sign up for our newsletter'
            </p>
            <form className="flex flex-col py-2 flex-grow">
              <input
                className="h-10 w-64 indent-2 bg-dark border border-dark shadow-inner rounded focus:outline-none focus:ring ring-grey my-1 text-sm"
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <button className="bg-primary py-2 my-2 rounded hover:bg-primary/80 font-serif transition-opcity uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center w-[90%] md:w-[75%] py-8 border border-dark border-x-0">
          <div className="pb-2">
            <FontAwesomeIcon
              className="px-2 md:px-3 text-grey hover:text-blue"
              icon={faFacebookF}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="px-2 md:px3 text-grey hover:text-red"
              icon={faPinterestP}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="px-2 md:px-3 text-grey hover:text-blue"
              icon={faSkype}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="px-2 md:px-3 text-grey hover:text-red"
              icon={faYoutube}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="px-2 md:px-3 text-grey hover:text-blue"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </div>
          <div className="flex mb-2">
            <img
              className="px-2"
              src="http://templateinspire.com/opencart/Grocery/image/catalog/app1.png"
            />
            <img
              className="px-2"
              src="http://templateinspire.com/opencart/Grocery/image/catalog/app2.png"
            />
            <img
              className="px-2"
              src="http://templateinspire.com/opencart/Grocery/image/catalog/app3.png"
            />
          </div>
          <div className="flex">
            <img
              className="h-6"
              src="http://templateinspire.com/opencart/Grocery/image/catalog/payment.png"
            />
          </div>
        </div>
        <h4 className="text-grey font-serif text-sm">
          Powered by INGEN CLOUD TECHNOLOGIES © 2022
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
