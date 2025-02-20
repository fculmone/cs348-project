"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState("");

  useEffect(() => {
    const savedUsername = window.localStorage.getItem("username");
    const savedPfp = window.localStorage.getItem("pfp");
    setUsername(savedUsername ? savedUsername : "");
    setPfp(savedPfp ? savedPfp : "");
  }, []);

  function logOut() {
    window.localStorage.clear();
    document.location.href = "/";
  }

  // TODO: this page is just for testing at the moment.
  //  Need to add new features such as view favourites, set preferences, etc.
  return (
    <div className="m-8">
      {username !== null ? (
        <div>
          <div className="flex items-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src={`pfp/${pfp}`} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-4 text-2xl">Hello {username}</div>
          </div>
          <div className="mt-20">
            <Button onClick={logOut} className="w-24">
              Log Out
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => (document.location.href = "/log_in")}
          className="w-24 rounded-full bg-blue-600 hover:bg-blue-500"
        >
          Log In
        </Button>
      )}
    </div>
  );
}
