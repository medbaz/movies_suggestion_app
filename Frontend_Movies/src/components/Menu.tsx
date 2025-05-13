import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'; // you can also use Heroicons

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>

      <div className={` lg:hidden p-2 m-2 h-full roun z-50  sticky top-0    flex justify-between items-center`}>
        
        <button onClick={toggleMenu} className="text-black ">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={` fixed top-0 left-0 h-screen border-r-2 text-black border-r-sky-200 w-60 bg-gray-200 shadow-lg p-4 transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:sticky lg:block`}
      >
        <button onClick={toggleMenu} className="text-black lg:hidden ">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="  mt-20 lg:mt-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="mb-2 text-sky-900 font-medium text-sm">Level 3</div>
            <div className="h-2 bg-gray-300 rounded-full mb-2">
              <div
                className="h-full bg-green-600 rounded-full"
                style={{ width: '75%' }} >

              </div>
            </div>
          </div>

          <Link to="/rate_movies">
            <button className="w-full  py-2 rounded-md mb-2  bg-sky-900  
text-sm font-medium  dark:text-white hover:bg-sky-800
focus:ring-sky-600 ">
              Keep Rating
            </button>
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* My Library Section */}
          <div>
            <h2 className="text-xl opacity-85 font-bold mb-4">My Library</h2>
            <div className="space-y-2 text-sky-900  opacity-70">
              <Link to="/suggestions">
                <button className="w-full text-left px-4 py-2  rounded-sm hover:bg-sky-200 hover:font-bold transition-colors">
                  Top Matches
                </button>
              </Link>
              <Link to="/watch_later">
                <button className="w-full text-left px-4 py-2 rounded-sm hover:bg-sky-300 hover:font-bold transition-colors">
                  Watch Later
                </button>
              </Link>
              <Link to="/ratings">
                <button className="w-full text-left px-4 py-2 rounded-sm hover:bg-sky-300 hover:font-bold transition-colors">
                  Ratings
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
