import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
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
          <h4 className="text-black mx-1">Contact Us</h4>
        </div>
        <h2 className="text-xl font-serif mt-4">
          <span className="text-primary font-serif">■</span>
          Contact Us
        </h2>
        <h2 className="text-lg mt-4">Our Location</h2>
        <div className="border border-lightgrey/30 mt-2 flex items-center p-5">
          <span className="mr-10">
            <h4>Grocery Shopping Hub</h4>
            <p>Address 1</p>
          </span>
          <span>
            <h4>Telephone</h4>
            <p>0224442550</p>
          </span>
        </div>
        <h2 className="text-xl font-serif mt-4">Contact Us</h2>
        <form className="w-[100%] border border-x-0 border-lightgrey/30 border-b-0 flex flex-col mt-3">
          <label className="font-serif text-dark/80 mt-5" htmlFor="name">
            Your Name
          </label>
          <input
            className="border border-lightgrey/40 h-10 focus:outline-primary indent-2 text-sm"
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <label className="font-serif text-dark/80 mt-5" htmlFor="email">
            E-mail Address
          </label>
          <input
            className="border border-lightgrey/40 h-10 focus:outline-primary indent-2 text-sm"
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <label className="font-serif text-dark/80 mt-5" htmlFor="enquiry">
            Enquiry
          </label>
          <textarea
            className="border border-lightgrey/40 h-80 focus:outline-primary indent-2 text-sm"
            name="enquiry"
            required
            onChange={handleChange}
            value={formData.enquiry}
          ></textarea>
          <button className="bg-primary py-2 text-white rounded mt-5 w-40 uppercase hover:bg-primary/70">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
