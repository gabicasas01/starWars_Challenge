import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFilms } from '../store/actions/actions';
import Loading from '../components/Layout/Loading';
import Films from '../components/Films/Films';
import ErrorMessage from '../components/Layout/ErrorMessage';
import HeaderFilms from '../components/Layout/HeaderFilms'

function FilmsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.films.isLoading)
  const isError = useSelector(state => state.films.error)

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-900'>
      <div className="w-full flex flex-col items-center">
        <HeaderFilms />
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center items-center my-24 md:my-0 min-h-screen'>
        {isLoading ? (
          <Loading />
        ) : (
          isError ? (
            <ErrorMessage message={isError} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Films />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default FilmsPage;
