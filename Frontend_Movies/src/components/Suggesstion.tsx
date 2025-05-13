import React from "react";
import { useForm } from "react-hook-form";
import movies1 from "../assets/fifthmovie.jpg"
import movies2 from "../assets/firstmovie.jpg"
import movies3 from "../assets/thirdmovie.jpg"
import movies4 from "../assets/sixthmovie.jpg"
import Menu from "./Menu.tsx"

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
}

const Suggestion: React.FC = () => {
  const { register } = useForm();
  // Mock data for movies - replace with actual API data later
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
    // Add more movies as needed
  ];

  return (
    <div className="flex-1 min-h-screen bg-[#E0E0E0] text-lg font-medium">


      <div className="w-full ">
        <div className="flex flex-col items-start justify-between gap-6 mb-8">
          <h1 className="text-2xl font-bold">Top Matches</h1>
          <div className="">
          <select
            {...register("filter")}
            className="px-4 py-3 border rounded-lg bg-[#C19696] "
          >
            <option value="popular">Popular</option>
            <option value="new_releases">New Releases</option>
            <option value="similar_taste">Similar Taste</option>
          </select>
          </div>

        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,250px))]   gap-4">


          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 h-[340px] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-[270px] object-cover"
              />
              <div className="p-4">
                
                <div className="flex justify-between items-center">
                <h3 className="font-semibold mb-2">{movie.title}</h3>
                  <span className="ml-2 text-sm ">
                    {movie.rating}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
