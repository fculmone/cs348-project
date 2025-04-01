"use client";
import { useEffect, useState } from "react";

// Helper function: Top 5 vs. bottom 5 for color variation
function getCardColor(index) {
  if (index < 5) {
    // Top 5: Bolder cyan-to-purple
    return "bg-gradient-to-br from-cyan-400 to-purple-500 text-white";
  } else {
    // Bottom 5: Slightly lighter cyan-to-purple
    return "bg-gradient-to-br from-cyan-300 to-purple-400 text-white";
  }
}

export default function TopFavCities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTopCities() {
      try {
        const res = await fetch("/api/most-fav");
        if (!res.ok) throw new Error("Failed to fetch top-favourited cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTopCities();
  }, []);

  if (loading) return <div className="p-4">Loading top favourite cities...</div>;
  if (error) return <div className="p-4">Error: {error.message}</div>;

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cities.map((city, index) => (
          <div
            key={city.city_id}
            className={`
              relative
              p-5
              rounded-lg
              shadow-md
              transition-transform
              hover:-translate-y-1
              hover:shadow-xl
              flex
              flex-col
              items-center
              text-center
              ${getCardColor(index)}
            `}
          >
            <h3 className="text-xl font-semibold mb-1">{city.city_name}</h3>
            <p className="text-sm opacity-90 mb-2">{city.country}</p>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
              {city.total_favourites} favourites
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
