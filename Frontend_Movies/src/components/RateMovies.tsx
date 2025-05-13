import React from 'react'
import MovieCard from './MovieCard'
import movies1 from "../assets/fifthmovie.jpg"
import SearchBar from '../components/SearchBar';



export default function RateMovies() {
  return (

    <div className="flex   p-3  flex-col overflow-scroll min-w-[500px]   justify-between items-center   gap-4 ">
        <h1 className='bg-gray-800 text-white  font-bold p-4 rounded-md '>Keep Rating To Improve Suggestions</h1>

      <div className='flex flex-col '>
        <div className="mb-2 relative w-60 h-90 ">
            <SearchBar />
        </div>
        <div className="flex-1  justify-center items-center">
          <MovieCard
            title="Movie 1"
            image={movies1}
            description="American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. As a result of the bite, he gains superhuman strength, speed, and agility, along with the ability to cling to walls, 
              turning him into Spider-Man   "
          />
        </div>

        
      </div>
</div>
  );
}
