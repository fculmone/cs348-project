"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function () {
  const searchParams = useSearchParams();
  const cityName = searchParams.get("city");
  const countryName = searchParams.get("country");
  const [city, setCity] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`api/cities/${cityName}/${countryName}`);
        const response = await data.json();
        setCity(response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{city.city}</p>
      <p>{city.country}</p>
      <p>{city.description}</p>
    </div>
  );
}
