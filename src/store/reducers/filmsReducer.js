import { FETCH_FILMS_REQUEST, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAILURE } from '../actions/filmsActions';

const initialState = {
  isLoading: false,
  films: [],
  error: null,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.payload,
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filmsReducer;
