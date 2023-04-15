import { getFilms } from '../../utils/api';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';

export const fetchFilms = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_FILMS_REQUEST });
  
      try {
        const data = await getFilms()
        const films = data.results  
        dispatch({ 
          type: FETCH_FILMS_SUCCESS, 
          payload: films 
        });
      } catch (error) {
        dispatch({ 
          type: FETCH_FILMS_FAILURE, 
          payload: error.message 
        });
      }
    };
  };