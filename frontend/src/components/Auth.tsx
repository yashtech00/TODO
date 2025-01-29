import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

import { SignupInput } from "@yashgtech007/common-todos-item";
import { Link, useNavigate } from "react-router-dom";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user${
          type === "signup" ? "/signup" : "/signin"
        }`,
        createUser
      );
      const jwt = response.data?.jwt;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/home");
      } else {
        alert("Token not found");
      }
    } catch (e) {
      alert("Error getting details");
    }
  };

  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center items-center">
        <div className=" border-1 border-gray-300 rounded-lg w-[400px] p-4  ">
          <div className="text-center font-bold text-2xl p-4">
            {type === "signup" ? "Sign up" : "Sign in"}
          </div>
          {type === "signup" ? (
            <>
              <div className=" font-semibold text-xl p-2">Username</div>
              <input
                placeholder="Enter your name "
                type="name"
                className="p-4 m-2 border-2 border-gray-200 rounded-xl w-[350px]"
                onChange={(e) => {
                  setCreateUser((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </>
          ) : (
            ""
          )}
          <div className=" font-semibold text-xl p-2">Email</div>
          <input
            placeholder="Enter your email "
            type="email"
            onChange={(e) => {
              setCreateUser((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
            className="p-4 m-2 border-2 border-gray-200 rounded-xl w-[350px]"
          />
          <div className=" font-semibold text-xl p-2">Password</div>
          <input
            placeholder="Enter your password"
            type="password"
            className="p-4 m-2 border-2 border-gray-200 rounded-xl w-[350px]"
            onChange={(e) => {
              setCreateUser((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />

          <div className="flex justify-center m-4">
            <button
              className=" p-4 bg-black text-white rounded-lg cursor-pointer "
              onClick={handleSubmit}
            >
              {type === "signup" ? "Create an account" : "Sign in"}
            </button>
          </div>
          <div className="flex justify-center m-4 text-blue-600 ">
            {type === "signup"
              ? "Already have an account? "
              : "Don't have an account?"}
            <Link to={type === "signup" ? "/signin" : "/signup"}>
              <button className="cursor-pointer underline">
                {" "}
                {type === "signup" ? " Signin" : " Signup"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
