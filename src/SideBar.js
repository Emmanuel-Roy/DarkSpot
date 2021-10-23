import React from 'react';
import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <div class="nes-container with-title mt-4 flex flex-row justify-center space-x-52 mx-48 mb-10">
      <Link to="/">
        <button class="nes-btn font-bold h-12 w-28 bg-red-500 hover:bg-black hover:text-white transition-all duration-300 ease-linear
    shadow-lg">Home</button>
      </Link>
      <Link to="/about">
        <button class="nes-btn font-bold h-12 w-28 bg-red-500 hover:bg-black hover:text-white transition-all duration-300 ease-linear
    shadow-lg">About</button>
      </Link>
    </div>
  );
};



export default SideBar;
