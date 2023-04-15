import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCharacters } from '../../store/actions/actions';
import { Link } from 'react-router-dom';

function Header({ id }) {
  const dispatch = useDispatch();

  const handleBackHome = () => {
    dispatch(clearCharacters());
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-yellow-500 text-4xl font-bold px-6 ">
          Characters of Film {id}
        </h1>
        <Link to={`/`}>
          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-6 rounded cursor-pointer"
            onClick={handleBackHome}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
