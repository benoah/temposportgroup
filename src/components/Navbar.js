import React from 'react'
 
/*
https://images.squarespace-cdn.com/content/v1/5e956eee226232107a0bc361/1586871418162-7WMF2YF6NVYQ595V5JX2/TEMPO.jpg?format=1000w
<img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
*/
export default function navbar() {
  return (
    <>
    <div data-theme="forest" className="navbar bg-base-100">
    <div className="navbar-start">
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
    <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
    </div>
      <div className="navbar-center">
      <a href="index.html" className="navbarlogo">
      <img src="https://images.squarespace-cdn.com/content/v1/5e956eee226232107a0bc361/1586871418162-7WMF2YF6NVYQ595V5JX2/TEMPO.jpg?format=1000w" className="w-40" alt="Tempo Sport Group" />
      </a>
      </div>
      <div className="navbar-end">
      <a className="btn ">Contact Us</a>
    </div>
    </div>





</>
  )
}




