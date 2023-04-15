import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenreFilter, setEyeColorFilter, clearFilters } from '../../store/actions/actions';

function Select() {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.characters.genres);
  const colors = useSelector(state => state.characters.eyeColors);

  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const handleFilterByGenre = e => {
    dispatch(setGenreFilter(e.target.value));
    setSelectedGenre(e.target.value);
  };

  const handleFilterByColor = e => {
    dispatch(setEyeColorFilter(e.target.value));
    setSelectedColor(e.target.value);
  };

  const handleClearFilters = e => {
    dispatch(clearFilters());
    setSelectedGenre('All');
    setSelectedColor('All');
  };

  return (
    <div className='m-2 md:m-4'>
      <div>
        <select value={selectedGenre} onChange={handleFilterByGenre}>
          <optgroup label="Genres">
            <option value="All">All</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <div>
        <select value={selectedColor} onChange={handleFilterByColor}>
          <optgroup label="Color">
            <option value="All">All</option>
            {colors.map(color => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <div>
        <button
            className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400'
            onClick={handleClearFilters}
          >
            Clear
          </button>
      </div>
    </div>
  );
}

export default Select;
