import { getCharacters } from '../../utils/api';

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const SET_GENRE_FILTER = 'SET_GENRE_FILTER';
export const SET_EYE_COLOR_FILTER = 'SET_EYE_COLOR_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const CLEAR_CHARACTERS = 'CLEAR_CHARACTERS';


export const fetchCharacters = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHARACTERS_REQUEST });

    try {
      const data = await getCharacters(id)
      dispatch({ 
        type: FETCH_CHARACTERS_SUCCESS, 
        payload: data 
      });
    } catch (error) {
      dispatch({ 
        type: FETCH_CHARACTERS_FAILURE, 
        payload: error.message 
      });
    }
  };
};

export const setGenreFilter = (genre) => {
  return { type: SET_GENRE_FILTER, payload: genre };
};

export const setEyeColorFilter = (color) => {
  return { type: SET_EYE_COLOR_FILTER, payload: color };
};

export const clearFilters = () => {
  return { type: CLEAR_FILTERS };
};

export const clearCharacters = () => {
  return { type: CLEAR_CHARACTERS };
};