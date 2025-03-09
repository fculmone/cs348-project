"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState("");

  useEffect(() => {
    const savedUsername = window.localStorage.getItem("username");
    const savedPfp = window.localStorage.getItem("pfp");
    setUsername(savedUsername ? savedUsername : "");
    setPfp(savedPfp ? savedPfp : "");
  }, []);

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="text-xl font-bold flex items-center flex-1">
        Travel Site Name
        <Image
          src="/images/logo.png" // Route of the image file
          height={55} // Desired size with correct aspect ratio
          width={55} // Desired size with correct aspect ratio
          alt="Logo"
          className="ml-4"
        />
      </div>

      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/cities">Cities</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">Services</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <div className="flex-1 flex justify-end">
        {username !== "" ? (
          <Link
            href="/profile"
            className="flex items-center hover:opacity-80 hover:underline"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={`pfp/${pfp}`} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="ml-4 text-gray-700 ">{username}</div>
          </Link>
        ) : (
          <Button
            className="w-24 rounded-full bg-blue-600 hover:bg-blue-500"
            onClick={() => (document.location.href = "/log_in")}
          >
            Log In
          </Button>
        )}
      </div>
    </nav>
  );
}
