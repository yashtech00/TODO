import React from "react";
import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <div className="">
          <Quote />
        </div>
        <div>
          <Auth  type="signin"/>
        </div>
      </div>
    </div>
  );
};

export default Signin;
