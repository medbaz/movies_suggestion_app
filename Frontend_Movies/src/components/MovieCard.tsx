import React from "react";

interface MovieCardProps {
  title: string;
  image: string;
  description: string;
  onSave?: () => void;
  onRate?: (rating: "Bad" | "Good" | "Amazing") => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  image,
  description,
  onSave,
  onRate,
}) => {
  return (
<div className="relative  h-[300px] max-w-2xl  flex  border-4  rounded-lg shadow-lg shadow-black bg-gray-900 border-sky-600">

        {/* Image */}
       
          <img
            src={image}
            alt={title}
            className="rounded-l-md"
          />
             
     

        {/* Content */}
        <div className="  m-4  flex flex-col ">
          {/* Save Button */}
          <button
            onClick={onSave}
            className="absolute top-2  right-2 p-2 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>

          {/* Description */}
          <h3 className="text-xl font-semibold mt-12  mb-2">Description :</h3>

          {/* Description */}
          <p className=" mb-4 font-thin text-sm flex-grow">{description}</p>

          {/* Rating Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onRate?.("Bad")}
              className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Bad
            </button>
            <button
              onClick={() => onRate?.("Good")}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Good
            </button>
            <button
              onClick={() => onRate?.("Amazing")}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Amazing
            </button>
          </div>
        </div>
      </div>

  );
};

export default MovieCard;
