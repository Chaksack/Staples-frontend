import React, { useEffect, useRef, useState } from 'react';

const BlogCard = (props) => {
  const [day, setDay] = useState('0');
  const [date, setDate] = useState('0');
  const [month, setMonth] = useState('0');
  const [year, setYear] = useState('0');

  let interval = useRef();

  const calendar = () => {
    const time = new Date();

    interval = setInterval(() => {
      const days = time.getDay();
      const dates = time.getDate();
      const months = time.getMonth();
      const years = time.getFullYear();
      let weekday;
      let newMonth;

      switch (days) {
        case 0:
          weekday = 'Sunday';
          break;
        case 1:
          weekday = 'Monday';
          break;
        case 2:
          weekday = 'Tuesday';
          break;
        case 3:
          weekday = 'Wednesday';
          break;
        case 4:
          weekday = 'Thursday';
          break;
        case 5:
          weekday = 'Friday';
          break;
        case 6:
          weekday = 'Saturday';
          break;
        default:
          time.getDay();
      }
      switch (months) {
        case 0:
          newMonth = 'January';
          break;
        case 1:
          newMonth = 'February';
          break;
        case 2:
          newMonth = 'March';
          break;
        case 3:
          newMonth = 'April';
          break;
        case 4:
          newMonth = 'May';
          break;
        case 5:
          newMonth = 'June';
          break;
        case 6:
          newMonth = 'July';
          break;
        case 7:
          newMonth = 'August';
          break;
        case 8:
          newMonth = 'September';
          break;
        case 9:
          newMonth = 'October';
          break;
        case 10:
          newMonth = 'November';
          break;
        case 11:
          newMonth = 'December';
          break;
        default:
          time.getMonth();
      }
      setDay(weekday);
      setDate(dates);
      setMonth(newMonth);
      setYear(years);
    }, 3600);
  };

  useEffect(() => {
    calendar();
    return () => {
      clearInterval(interval.current);
    };
  });

  let addOn = 'th';
  if (date === 1 || date === 21 || date === 31) {
    addOn = 'st';
  } else if (date === 2 || date === 22) {
    addOn = 'nd';
  } else if (date === 3 || date === 23) {
    addOn = 'rd';
  }

  return (
    <a
      href="#"
      className="max-w-[17.5rem] h-[20rem] flex flex-col items-center relative blog mb-2"
    >
      <div className="max-w-[17.5rem] h-52 flex flex-col items-center relative">
        <img className="rounded h-52" src={props.image} />
        <span className="bg-primary text-white h-12 max-w-[17.3rem] flex items-center justify-center uppercase text-xs font-serif absolute slide">
          0 comments | {`${day} ${date}${addOn} ${month} ${year}`}
        </span>
      </div>
      <div className="z-10 bg-white absolute bottom-0 max-w-[17.5rem]">
        <h4 className="text-md font-serif my-1 pl-2 uppercase">
          {props.title}
        </h4>
        <p className="text-sm text-dark my-1 pl-2 font-serif">{props.text}</p>
        <button className="text-white bg-primary rounded text-sm my-1 px-2 py-1 md:bg-white md:text-primary">
          Read More...
        </button>
      </div>
    </a>
  );
};

export default BlogCard;
