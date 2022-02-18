import React from 'react';

const Categories = (props) => {
  return (
    <div>
      <select className={props.class}>
        <option value="0">Categories</option>
        <option value="59">Baby Care</option>
        <option value="71">Cleaning &amp; Household</option>
        <option value="60">Daily Needs</option>
        <option value="70">Dairy &amp; Bakery</option>
        <option value="68">Fruits</option>
        <option value="69">Beverages</option>
        <option value="20">Oil &amp; Spices</option>
        <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PC</option>
        <option value="61">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;beuty
          &amp; Spa
        </option>
        <option value="63">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smart
          Phone
        </option>
        <option value="62">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smart
          watch
        </option>
        <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mac</option>
        <option value="66">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decor
        </option>
        <option value="64">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Printers
        </option>
        <option value="65">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trackballs
        </option>
        <option value="18">Personal Care</option>
        <option value="46">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Macs</option>
        <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows</option>
        <option value="25">Rice &amp; Grains</option>
        <option value="29">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mice and Trackballs
        </option>
        <option value="28">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monitors</option>
        <option value="35">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test
          1
        </option>
        <option value="36">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test
          2
        </option>
        <option value="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Printers</option>
        <option value="31">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanners
        </option>
        <option value="32">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web
          Cameras
        </option>
        <option value="57">Snacks &amp; Food</option>
      </select>
    </div>
  );
};

export default Categories;
