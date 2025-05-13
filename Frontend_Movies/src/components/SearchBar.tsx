import React, { useState } from "react";
import { Import, SearchIcon } from 'lucide-react';
interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface SearchBarProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ movies, onMovieSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Filter movies based on search term
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredMovies);
  };

  return (
    <div className="relative   mx-auto">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for movies..."
          className="w-full text-sm px-8 py-2  border-2 opacity-75 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
        />
      <SearchIcon className="absolute left-1 text-xs w-5 ml-1 opacity-60  top-2 "  color="black"/>
        {searchTerm && (
          <button
            onClick={() => handleSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-10">
          {suggestions.map((movie) => (
            <div
              key={movie.id}
              onClick={() => {
                onMovieSelect(movie);
                setSearchTerm("");
                setSuggestions([]);
              }}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-12 h-16 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold">{movie.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
