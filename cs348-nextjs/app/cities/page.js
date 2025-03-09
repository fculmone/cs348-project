"use client";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

// pageNum is a state, totalPages is an int of the value Math.ceil(cities.length / 10)
function Pages({ pageNum, setPageNum, totalPages }) {
  if (totalPages == 1) {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                pageNum == 1
                  ? "text-gray-400 pointer-events-none"
                  : "text-black"
              }
              href="#"
              onClick={() => {
                if (pageNum != 1) setPageNum(pageNum - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="font-extrabold">
              {pageNum}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className={
                pageNum == totalPages
                  ? "text-gray-400 pointer-events-none"
                  : "text-black"
              }
              onClick={() => {
                if (pageNum != totalPages) setPageNum(pageNum + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  } else if (totalPages == 2) {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                pageNum == 1
                  ? "text-gray-400 pointer-events-none"
                  : "text-black"
              }
              href="#"
              onClick={() => {
                if (pageNum != 1) setPageNum(pageNum - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className={pageNum == 1 ? "font-extrabold" : ""}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className={pageNum == 2 ? "font-extrabold" : ""}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className={
                pageNum == totalPages
                  ? "text-gray-400 pointer-events-none"
                  : "text-black"
              }
              onClick={() => {
                if (pageNum != totalPages) setPageNum(pageNum + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  } else {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                pageNum == 1
                  ? "text-gray-400 pointer-events-none"
                  : "text-black"
              }
              href="#"
              onClick={() => {
                if (pageNum != 1) setPageNum(pageNum - 1);
              }}
            />
          </PaginationItem>

          {pageNum < totalPages - 2 ? (
            <>
              <PaginationItem>
                <PaginationLink href="#" className="font-extrabold">
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum + 1)}
                >
                  {pageNum + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="mx-[0.12rem]">
                <PaginationEllipsis />
              </PaginationItem>
            </>
          ) : (
            <></>
          )}
          {pageNum === totalPages - 2 ? (
            <>
              <PaginationItem>
                <PaginationLink href="#" className="font-extrabold">
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum + 1)}
                >
                  {pageNum + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum + 2)}
                >
                  {pageNum + 2}
                </PaginationLink>
              </PaginationItem>
            </>
          ) : (
            <></>
          )}
          {pageNum === totalPages - 1 ? (
            <>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum - 1)}
                >
                  {pageNum - 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="font-extrabold">
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum + 1)}
                >
                  {pageNum + 1}
                </PaginationLink>
              </PaginationItem>
            </>
          ) : (
            <></>
          )}
          {pageNum === totalPages ? (
            <>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum - 2)}
                >
                  {pageNum - 2}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setPageNum(pageNum - 1)}
                >
                  {pageNum - 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="font-extrabold">
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            </>
          ) : (
            <></>
          )}
          <PaginationItem>
            <PaginationNext
              href="#"
              className={
                pageNum == totalPages
                  ? "text-gray-400 pointer-events-none"
                  : "text-black"
              }
              onClick={() => {
                if (pageNum != totalPages) setPageNum(pageNum + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
}

function Card({ cityData }) {
  return (
    <Link href={"/city?city=" + cityData.city + "&country=" + cityData.country}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 hover:cursor-pointer ease-in duration-75">
        <img
          className="w-full"
          src="https://alumni.mcmaster.ca/s/1439/images/editor/qotw/2021/sun_5.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {cityData.city + ", " + cityData.country}
          </div>
          <p className="text-gray-700 text-base">
            {cityData.description.slice(0, 150) + "..."}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #top-{cityData.ranking}
          </span>
          {(cityData.tourism_infrastructure +
            cityData.tourism_performance +
            cityData.tourism_policy) /
            3 <=
          30 ? (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tourism📸
            </span>
          ) : (
            <></>
          )}
          {(cityData.health_safety + cityData.sustainability) / 2 <= 30 ? (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #livability🏡🌿
            </span>
          ) : (
            <></>
          )}
          {cityData.economic_performance <= 30 ? (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #business💸
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function () {
  const [cities, setCities] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  let startPageCityIndex = pageNum * 10 - 10;
  let endPageCityIndex = Math.min(pageNum * 10, cities.length);

  async function onSubmit(event) {
    event.preventDefault();
    setPageNum(1);

    try {
      const formData = new FormData(event.currentTarget);
      const searchString = formData.get("search");
      if (searchString === "") {
        const data = await fetch(`api/cities`);
        const response = await data.json();
        setCities(response);
      } else {
        const data = await fetch(`api/city-search/${searchString}`);
        const response = await data.json();
        setCities(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function Search() {
    return (
      <div className="pt-2 relative mx-auto text-gray-600">
        <form onSubmit={onSubmit}>
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            name="search"
            type="text"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>
      </div>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("api/cities");
        const response = await data.json();
        setCities(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    console.log(cities);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <Search />
      </div>
      <Pages
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPages={Math.ceil(cities.length / 10)}
      />
      <div className="grid grid-cols-2 gap-9 my-6">
        {cities
          .slice(startPageCityIndex, endPageCityIndex)
          .map((city, index) => (
            <div key={index} className="flex justify-center">
              <Card cityData={city} />
            </div>
          ))}
      </div>
      <Pages
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPages={Math.ceil(cities.length / 10)}
      />
    </div>
  );
}
