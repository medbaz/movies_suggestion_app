import React from "react";
import { useForm } from "react-hook-form";
import movies1 from "../assets/fifthmovie.jpg"
import movies2 from "../assets/firstmovie.jpg"
import movies3 from "../assets/thirdmovie.jpg"
import movies4 from "../assets/sixthmovie.jpg"

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
}

const Watchlater: React.FC = () => {
  const { register } = useForm();
  const movies: Movie[] = [
    {
      id: 1,
      title: "Movie 1",
      image: movies1,
      rating: 85,
    },
    {
      id: 2,
      title: "Movie 2",
      image: movies2,
      rating: 92,
    },
    {
      id: 3,
      title: "Movie 3",
      image: movies3,
      rating: 78,
    },{
        id: 3,
        title: "Movie 4",
        image: movies4,
        rating: 78,
      },
  ];

  return (
    <div className="flex-1 min-h-screen  text-lg font-medium">
      <div className="w-full ">
        <div className="flex flex-col items-start justify-between gap-6 mb-8">
          <h1 className="text-2xl opacity-75 text-black font-extrabold">
            Watch later
          </h1>

          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative w-fit  bg-sky-200">
              <select {...register("filter")} className=" bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-sky-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-sky-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option selected value="popular">Popular</option>
                <option value="new_releases">New Releases</option>
                <option value="similar_taste">Similar Taste</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-0 text-slate-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,220px))]   gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative h-[340px] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 flex flex-col justify-end left-0 w-full h-24 bg-gradient-to-t from-slate-950 via-slate-900/90 via-slate-900/80 to-transparent p-4">
                <div className="flex justify-between items-center   text-white ">
                  <h3 className="font-semibold bg text-sm">{movie.title}</h3>
                  <span className="ml-2 text-sm">{movie.rating}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlater;
