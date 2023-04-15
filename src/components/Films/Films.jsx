import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Films() {
  const films = useSelector(state => state.films.films)

  return (
    <>
      {films.map(film => (
        <div key={film.episode_id} className='border border-yellow-300 bg-gray-200 rounded-md p-6'>
          <h2 className='text-xl font-semibold text-yellow-600 mb-2'>{film.title}</h2>
          <p className='capitalize mb-2'>Episode: {film.episode_id}</p>
          <p className='capitalize mb-4'>Director: {film.director}</p>
          <Link to={`/films/${film.episode_id}/characters`}>
            <button className='bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
              See Characters
            </button>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Films;
