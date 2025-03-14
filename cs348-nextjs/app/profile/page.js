"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [pfp, setPfp] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const savedUsername = window.localStorage.getItem("username");
    const savedPfp = window.localStorage.getItem("pfp");
    setUsername(savedUsername ? savedUsername : "");
    setPfp(savedPfp ? savedPfp : "");

    if (savedUsername) {
      fetchFavourites(savedUsername);
    }
  }, []);

  function logOut() {
    window.localStorage.clear();
    document.location.href = "/";
  }

  const fetchFavourites = async (username) => {
    try {
      
      const response = await fetch(`/api/favourite_cities?username=${encodeURIComponent(username)}`);
      const data = await response.json();

      const promises = data.map(({ city_id, username }, index) => {
        return fetch(`/api/cities/ranking/${city_id}`).then((res) => res.json());
      });
      
      const cities = await Promise.all(promises);

      setCities(cities);
      console.log(cities);

    } catch (error) {
      console.error("Error fetching favourite cities:", error);
    }
  };

  //  Need to add new features such as set preferences, etc.
  return (
    <div className="m-8 max-w-2xl">
      {username !== null ? (
        <div>
          <div className="flex items-center space-x-6">
            <div className="p-1 border-2 border-blue-500 rounded-full">
              <Avatar className="h-24 w-24">
                <AvatarImage src={`pfp/${pfp}`} />
                <AvatarFallback className="bg-gray-200 text-gray-600">CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-2xl font-semibold">
              Hello, <span className="text-blue-600">{username} 👋</span>
            </div>
          </div>
  
          {/* Favourite Cities Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Your Favourite Cities</h2>
            {cities.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-3">
                {cities.map((city, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {city[0].city}, {city[0].country}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500 italic">You have no favourite cities yet.</p>
            )}
          </div>
  
          {/* Logout Button */}
          <div className="mt-10">
            <Button
              onClick={logOut}
              className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-6 rounded-full transition">
              Log Out
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => (document.location.href = "/log_in")}
          className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 transition">
          Log In
        </Button>
      )}
    </div>
  );
}
