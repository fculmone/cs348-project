"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Pencil, Trash } from "lucide-react";
import ReviewModal from "@/components/ui/reviewModal";
import Image from "next/image";
import { Heart } from "lucide-react";

function CityImage({ cityData }) {
  const imgSrc = (
    "/city-images/" +
    cityData.ranking +
    "-" +
    cityData.city +
    "-" +
    cityData.country +
    ".jpg"
  ).replaceAll(" ", "-");

  return (
    <div className="flex justify-center mt-6 mb-2">
      <Image
        src={imgSrc}
        alt={cityData.ranking + "-" + cityData.city + "-" + cityData.country}
        className="rounded-xl object-cover object-middle "
        width={900}
        height={360}
      />
    </div>
  );
}

function FavouriteHeart({ favourites, setFavourites, cityData }) {
  const [savedUsername, setSavedUsername] = useState("");

  useEffect(() => {
    setSavedUsername(window.localStorage.getItem("username"));
    fetch(
      `/api/favourite_cities?username=${window.localStorage.getItem(
        "username"
      )}`
    )
      .then((res) => res.json())
      .then((data) => setFavourites(Array.isArray(data) ? data : []))
      .catch((error) => console.error("Error fetching favourites:", error));
  }, []);

  const toggleFavourites = async () => {
    if (!savedUsername) {
      alert("Please sign in to favourite");
      return;
    }

    const method = favourites.some((fav) => fav.city_id === cityData.ranking)
      ? "DELETE"
      : "POST";

    try {
      const response = await fetch("api/favourite_cities", {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: savedUsername,
          city_id: cityData.ranking,
        }),
      });

      if (response.ok) {
        if (method === "POST") {
          // updating state
          setFavourites([
            ...favourites,
            { username: savedUsername, city_id: cityData.ranking },
          ]);
        } else {
          setFavourites(
            favourites.filter((fav) => fav.city_id !== cityData.ranking)
          );
        }
      } else {
        console.log("Error with updating favourites");
      }
    } catch (error) {
      console.log("Error with updating favourites");
    }
  };

  return (
    <div
      className="bg-white rounded-full p-2 shadow-md cursor-pointer outline outline-1 text-gray-200"
      onClick={(e) => {
        e.stopPropagation(); // prevents navigation when clicking the heart
        toggleFavourites();
      }}
    >
      <Heart
        className={
          favourites.some((fav) => fav.city_id === cityData.ranking)
            ? "text-red-500 fill-red-500"
            : "text-gray-400"
        }
        size={24}
      />
    </div>
  );
}

function WeatherCard({ cityName, countryName, weather }) {
  function generateWeatherDescription() {
    let weatherDesc = `The weather in ${weather.city}, ${weather.country} `;

    if (weather.weather_desc === "clear sky") {
      weatherDesc +=
        "is reported to have clear skies on most days, meaning you can expect to comfortably enjoy the sunshine.";
    } else if (weather.weather_desc === "broken clouds") {
      weatherDesc +=
        "features broken clouds, with the sun occasionally peeking through. It’s a mix of cloud cover and clearer skies.";
    } else if (weather.weather_desc === "shower rain") {
      weatherDesc +=
        "includes intermittent shower rain, so you might want to carry an umbrella just in case of sudden downpours.";
    } else if (weather.weather_desc === "scattered clouds") {
      weatherDesc +=
        "has scattered clouds, creating a partly cloudy atmosphere with plenty of bright spots.";
    } else if (weather.weather_desc === "overcast clouds") {
      weatherDesc +=
        "is dominated by overcast clouds, giving the sky a gray appearance and limiting sunlight.";
    } else if (weather.weather_desc === "light rain") {
      weatherDesc +=
        "is experiencing light rain, which may be gentle and steady—good to be prepared with light rain gear.";
    } else if (weather.weather_desc === "few clouds") {
      weatherDesc +=
        "has just a few clouds in the sky, so you can expect mostly sunny weather with minimal interruptions.";
    } else if (weather.weather_desc === "fog") {
      weatherDesc +=
        "is affected by fog, which may reduce visibility. Exercise caution if you're traveling.";
    } else if (weather.weather_desc === "mist") {
      weatherDesc +=
        "is experiencing misty conditions, with a fine layer of moisture in the air that can make surfaces damp.";
    } else if (weather.weather_desc === "moderate rain") {
      weatherDesc +=
        "includes moderate rain, steady enough to need a raincoat or umbrella when going outside.";
    } else if (weather.weather_desc === "heavy intensity rain") {
      weatherDesc +=
        "is facing heavy intensity rain, which may lead to puddles or minor flooding in some areas—take precautions.";
    } else if (weather.weather_desc === "haze") {
      weatherDesc +=
        "is under hazy conditions, which can dull visibility and give the air a slightly smoky or dusty feel.";
    } else {
      weatherDesc +=
        "has changing conditions. Please check the local forecast for more details.";
    }

    weatherDesc += ` Averaging ${
      Math.round(weather.temperature_celsius * 100) / 100
    } degrees celsius throughout the year, temperatures `;

    if (weather.temperature_celsius < 13) {
      weatherDesc += `can be a bit chilling depending on the season, so ensure you are dressing appropriately.`;
    } else if (weather.temperature_celsius < 20) {
      weatherDesc += `are warm on average, but make sure to check the local forcast.`;
    } else {
      weatherDesc += `remain consistently high, so ensure you are prepared to deal with the heat.`;
    }

    weatherDesc += ` Yearly average wind speeds typically hover around ${
      Math.round(weather.wind_speed_ms * 100) / 100
    } m/s.`;

    return weatherDesc;
  }

  return (
    <div>
      <div>
        {weather != null ? (
          <div>{generateWeatherDescription()}</div>
        ) : (
          <div></div>
        )}
        {console.log(weather)}
      </div>
    </div>
  );
}

function HashTags({ cityData }) {
  return (
    <div className="flex flex-row">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
        #top-{cityData.ranking}
      </span>
      {(cityData.tourism_infrastructure +
        cityData.tourism_performance +
        cityData.tourism_policy) /
        3 <=
      30 ? (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
          #tourism📸
        </span>
      ) : (
        <></>
      )}
      {(cityData.health_safety + cityData.sustainability) / 2 <= 30 ? (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
          #livability🏡🌿
        </span>
      ) : (
        <></>
      )}
      {cityData.economic_performance <= 30 ? (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
          #business💸
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function () {
  const searchParams = useSearchParams();
  const cityId = searchParams.get("city_id");
  const cityName = searchParams.get("city");
  const countryName = searchParams.get("country");

  const [savedUsername, setSavedUsername] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewEdit, setReviewEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState({});
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSavedUsername(window.localStorage.getItem("username"));
    }
  }, []);

  const fetchReviews = async () => {
    const reviewsData = await fetch(`api/reviews?city_id=${cityId}`);
    const reviewsResponse = await reviewsData.json();
    setReviews(reviewsResponse);
    console.log("reviews:");
    console.log(reviewsResponse);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/weather/${cityName}/${countryName}`);
        const response = await data.json();
        setCity(response[0]);
        console.log("city:");
        console.log(response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!savedUsername) {
      alert("Please sign in to add a review");
      return;
    }

    const reviewData = {
      city_id: cityId,
      username: savedUsername,
      rating,
      review_text: reviewText,
    };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) throw new Error("Failed to submit review");

      alert("Review submitted successfully!");
      fetchReviews();
      setShowModal(false);
      setReviewText("");
      setRating(5);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review.");
    }
  };

  const onEdit = (review) => {
    setReviewText(review.review_text);
    setRating(review.rating);
    setEditingReviewId(review.review_id);
    setReviewEdit(true);
    setShowModal(true);
  };

  const handleEdit = async (review_id, new_text, new_rating) => {
    try {
      console.log("handleEdit called");
      const response = await fetch(
        `/api/reviews?review_id=${review_id}&new_text=${new_text}&new_rating=${new_rating}`,
        {
          method: "PUT",
        }
      );
      console.log("handleEdit api done");
      if (!response.ok) throw new Error("Failed to edit review");
      setReviewEdit(false);
      alert("Review updated successfully!");
      fetchReviews();
      setShowModal(false);
      setReviewText("");
      setRating(5);
    } catch (error) {
      console.error("Error updating review:", error);
      alert("Error updating review.");
    }
  };

  const handleDelete = async (review_id) => {
    try {
      const response = await fetch(`/api/reviews?review_id=${review_id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete review");

      alert("Review deleted successfully!");
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Error deleting review.");
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="flex mt-12 mx-80 items-center">
          <h1 className="mb-1 text-4xl font-bold mr-4">
            {city.city}, {city.country}
          </h1>
          <div>
            <FavouriteHeart
              favourites={favourites}
              setFavourites={setFavourites}
              cityData={city}
            />
          </div>
        </div>

        <div className="w-full justify-center flex">
          <div className="w-fit ">
            <CityImage cityData={city} />
            <div className="flex items-center">
              <HashTags cityData={city} />
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-80 mt-6">
          <div>
            <h2 className="font-semibold text-xl mb-3">About</h2>
            <p>{city.city_desc}</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-3 mt-10">Weather</h2>
            <WeatherCard
              cityName={cityName}
              countryName={countryName}
              weather={city}
            />
          </div>
        </div>
      </div>

      <div className=""></div>

      <div className="w-full flex justify-center"></div>
      <div className="mx-32 mt-20">
        <h2 className="text-xl my-5 font-semibold">User Reviews</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 mb-5 bg-blue-500 text-white rounded-md"
        >
          Leave a Review
        </button>

        {reviews.map((review) => (
          <div
            key={review.review_id}
            className="bg-gray-100 p-4 rounded-lg mb-3 relative"
          >
            {/* Username + Rating */}
            <div className="flex items-center mb-2">
              <span className="font-bold text-blue-600">
                {!review.is_deleted ? review.username : "Deleted User"}
              </span>
              <span className="ml-2 text-yellow-500">⭐ {review.rating}/5</span>
            </div>

            <p className="text-gray-700">{review.review_text}</p>

            {review.username == savedUsername && (
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => onEdit(review)}
                  className="text-gray-600 hover:text-blue-500"
                >
                  <Pencil size={20} />
                </button>
                <button
                  onClick={() => handleDelete(review.review_id)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <Trash size={20} />
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Overlay Modal */}
        {showModal && (
          <ReviewModal
            cityName={cityName}
            rating={rating}
            setRating={setRating}
            reviewText={reviewText}
            setReviewText={setReviewText}
            handleSubmit={handleSubmit}
            handleEdit={() => handleEdit(editingReviewId, reviewText, rating)}
            reviewEdit={reviewEdit}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
}
