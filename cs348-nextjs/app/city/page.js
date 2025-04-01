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
    <div className="flex justify-center my-6">
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
        const data = await fetch(`api/cities/${cityName}/${countryName}`);
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
          <CityImage cityData={city} />
        </div>
        <div className="flex mx-80 mt-6">
          <p>{city.description}</p>
        </div>
      </div>
      <div className="w-full flex justify-center"></div>

      <h1 className="text-xl my-5">User Reviews</h1>
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
            <span className="font-bold text-blue-600">{review.username}</span>
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
  );
}
