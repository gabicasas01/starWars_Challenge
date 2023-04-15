import React from 'react'
import { useSelector } from 'react-redux';

function Characters() {
  const characters = useSelector(state => state.characters.charactersFilter);

  return (
    <>
      {characters.length === 0 ? (
        <h2 className='text-white text-3xl font-bold text-center'>Sorry, we did not find any character with the requested characteristics!</h2>
      ) : (
        characters.map(character => (
          <div key={character.name} className='border border-yellow-300 bg-gray-200 rounded-md p-6'>
            <h2 className='text-xl font-semibold text-yellow-600 mb-2'>{character.name}</h2>
            <p className='capitalize mb-2'>Eyes: {character.eye_color}</p>
            <p className='capitalize mb-4'>Gender: {character.gender}</p>
          </div>
        ))
      )}
    </>
  )
}

export default Characters
