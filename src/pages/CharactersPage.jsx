import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters } from '../store/actions/actions';
import Loading from '../components/Layout/Loading';
import Select from '../components/Layout/Select';
import Characters from '../components/Characters/Characters';
import HeaderCharacters from '../components/Layout/HeaderCharacters';
import ErrorMessage from '../components/Layout/ErrorMessage';

function CharactersPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.characters.isLoading)
  const isError = useSelector(state => state.characters.error)

  useEffect(() => {
    dispatch(fetchCharacters(id));
  }, [id]);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-900'>
      <div className='w-full flex flex-col items-center'>
        <HeaderCharacters id={id} />
      </div>
      <div className='my-4 w-full flex flex-col items-center'>
        <Select />
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center items-center my-8 md:my-0'>
        {isLoading ? (
          <Loading />
        ) : (
          isError ? (
            <ErrorMessage message={isError} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              <Characters />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default CharactersPage
