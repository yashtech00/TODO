import React from "react";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="border-b-1 border-slate-200">
      <div className="flex justify-between">
        <div className="p-4">
          <Link to={'/home'}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/572b90fa8a65e243d508a96d/1467917398510-XOS3LUIP0YTR1MDWLH7A/todo+logo.jpg"
            className="w-[120px] h-[70px] overflow-auto"
          />
          </Link>
        </div>
        <div className="">
          <Link to={'/'}>
          <button className="cursor-pointer my-6 mr-12 p-4 bg-black text-white font-medium rounded-lg">
            Logout 
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
