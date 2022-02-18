const Brand = () => {
  const options = [
    'Login',
    'Register',
    'Forgotten Password',
    'My Account',
    'Address Book',
    'White List',
    'Order History',
    'Downloads',
    'Recurring Payments',
    'Reward Points',
    'Returns',
    'Transactions',
    'Newsletter',
  ];

  return (
    <main className="w-screen pb-5 bg-white flex justify-center items-center">
      <div className="w-[90%] lg:w-[75%]">
        <div className="flex bg-light p-2 items-center rounded mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition hover:scale-125"
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
          <h4 className="text-black mx-1">Brand</h4>
        </div>
        <div className="md:flex items-start justify-around py-5 mr-2">
          <ul className="border border-lightgrey border-b-0 w-[100%] md:w-64 rounded">
            {options.map((item, index) => {
              return (
                <li
                  className="border border-x-0 border-t-0 border-b-lightgrey py-2 px-3 font-serif text-sm text-dark/80 hover:text-primary"
                  key={index}
                >
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
          <div className="sm:w-[100%] md:w-[75%]">
            <h2 className="text-lg font-serif">
              <span className="text-primary font-serif">■</span>
              Find Your Favourite Brand
            </h2>
            <div className="pb-3">
              <strong>Brand Index:</strong>
              <a href="A" className="text-dark/80 mx-2 hover:text-primary">
                A
              </a>
              <a href="C" className="text-dark/80 mx-2 hover:text-primary">
                C
              </a>
              <a href="H" className="text-dark/80 mx-2 hover:text-primary">
                H
              </a>
              <a href="P" className="text-dark/80 mx-2 hover:text-primary">
                P
              </a>
              <a href="S" className="text-dark/80 mx-2 hover:text-primary">
                S
              </a>
            </div>
            <ul>
              <li
                id="A"
                className="w-[100%] border border-lightgrey/40 pt-3 pb-2 px-5 rounded mb-3"
              >
                <span className="block border border-lightgrey/40 indent-2 p-1 rounded">
                  A
                </span>
                Apple
              </li>
              <li
                id="C"
                className="w-[100%] border border-lightgrey/40 pt-3 pb-2 px-5 rounded mb-3"
              >
                <span className="block border border-lightgrey/40 indent-2 p-1 rounded">
                  C
                </span>
                Canon
              </li>
              <li
                id="H"
                className="w-[100%] border border-lightgrey/40 pt-3 pb-2 px-5 rounded mb-3"
              >
                <span className="block border border-lightgrey/40 indent-2 p-1 rounded">
                  H
                </span>
                Hewlett-Packard
              </li>
              <li
                id="P"
                className="w-[100%] border border-lightgrey/40 pt-3 pb-2 px-5 rounded mb-3"
              >
                <span className="block border border-lightgrey/40 indent-2 p-1 rounded">
                  P
                </span>
                Palm
              </li>
              <li
                id="S"
                className="w-[100%] border border-lightgrey/40 pt-3 pb-2 px-5 rounded mb-3"
              >
                <span className="block border border-lightgrey/40 indent-2 p-1 rounded">
                  S
                </span>
                Samsung
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brand;
