"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("api/cities");
        const response = await data.json();
        setCities(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {cities.map((city, index) => (
        <div key={index}>{city.city_name}</div>
      ))}
      <Button className="font-bold ">Click me</Button>
    </div>
  );
}
