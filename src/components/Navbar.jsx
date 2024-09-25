import React from "react";
import myLogo from "../../public/logo.png";

function Navbar() {
  return (
    <>
      <nav className="flex sticky top-0 z-10 border-red-200 shadow-lg shadow-red-200 px-2 sm:px-4 py-2.5 from-rose-200 via-red-400 to-red-700 bg-gradient-to-r">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <img src={myLogo} alt="horizon logo" className="h-14 lg:h-16" />
        </div>
        <div className="">
          <ul className="flex gap-3 text-white">
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
