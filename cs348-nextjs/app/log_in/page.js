"use client";
import { useState } from "react";
import { useUserStore } from "../store/user-store";

export default function SignUp() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("logInForm");
    const response = await fetch(`api/users/${inputUsername}`);
    const data = await response.json();
    if (data.length === 0) {
      alert(`Could not find an account with the username ${inputUsername}`);
    } else if (data[0].password != inputPassword) {
      alert(`Incorrect password`);
    } else {
      window.localStorage.setItem("username", inputUsername);
      window.localStorage.setItem("pfp", data[0].pfp);
      document.location.href = "/";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <div className="w-full bg-white rounded-lg shadow mx-auto mt-0 max-w-md ">
        <div className=" pace-y-6 p-8">
          <h1 className="font-bold leading-tight tracking-tight text-gray-900 text-2xl mb-6">
            Sign in to your account
          </h1>
          <form
            id="logInForm"
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                maxLength="18"
                required={true}
                onChange={(e) => setInputUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                maxLength="100"
                required={true}
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline"
                onClick={() => (document.location.href = "/sign_up")}
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
