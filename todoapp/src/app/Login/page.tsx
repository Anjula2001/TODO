"use client";

import { useActionState, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react"; 
//import {useFormStatus} from "react-dom"; 
import { login } from "@/lib/actions";

export default function LoginForm() {
    
  const [state, loginAction] = useActionState(login, undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /*const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };*/

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left section */}
      <div className="flex-[1] bg-teal-500 text-black flex flex-col justify-center px-16 rounded-r-[30px]">
        <h1 className="text-7xl font-bold mb-6">TODO.</h1>
        <hr className="border-t-2 border-white w-4/4 my-4 mb-8" />
        <h2 className="text-4xl font-semibold mb-4">Welcome to TaskFlow</h2>
        <p className="text-base text-justify leading-8 text-white w-3/4 mb-6">
             A secure, modern platform designed to help you manage your work, stay organized, 
             and access personalized features that keep you productive every day, anywhere.
        </p>
      </div>

      {/* Right section */}
      <div className="flex-[1] bg-white flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
            <span className="mb-3 text-sm text-gray-500">Do it with me</span>
            <br />
            <br />
            <div className="mb-6 flex space-x-4">
                <div className="w-8 h-30 bg-teal-500 rounded-full mb-2"></div>
                <div className="w-8 h-20 bg-teal-300 rounded-full mb-2"></div>
                <div className="w-8 h-10 bg-teal-100 rounded-full mb-2"></div>
            </div>
        </div>

        {/* Login Form */}
        <form
          action={loginAction}
          //onSubmit={handleLogin}
          className="w-[300px] flex flex-col items-center"
        >
            <h3 className="mb-6 text-2xl text-gray-800 font-medium">User Login</h3>
            
            {/* Username */}
            <input
                type="text"
                name="username"
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mb-6 px-4 py-3 rounded-lg bg-teal-100 placeholder-gray-600 focus:outline-none focus:text-black text-black"
            />
            {state?.errors?.username && (
                <p className="mt-2 text-sm text-red-600">{state.errors.username}</p>
            )}

            {/* Password */}
            <div className="relative w-full mb-5">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-lg bg-teal-100 placeholder-gray-600 focus:outline-none focus:text-black text-black"
                />
                {state?.errors?.password && (
                    <p className="mt-2 text-sm text-red-600">{state.errors.password[0]}</p>
                )}

                {/* 👁 Show/Hide Button */}
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600"
                >
                    {showPassword ? (
                    <EyeOffIcon className="w-5 h-5" />
                    ) : (
                    <EyeIcon className="w-5 h-5" />
                    )}
                </button>
            </div>
            
            <button
                type="submit"
                className="w-3/4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-all"
                >
                Login
            </button>

            <p className="mt-3 text-sm text-teal-600 cursor-pointer hover:underline"> 
                <a href="/PasswordManagement">
                    Can’t remember your password?
                </a>
            </p>

            <p className="mt-5 text-sm text-gray-600">
                New here? Sign up and get started!
            </p>
            
            <button
                onClick={() => window.open('/Register', '_blank')}
                type="button"
                className="mt-3 w-3/4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-all"
            > 
                Sign Up
            </button>
            
        </form>
      </div>
    </div>
  );
}





