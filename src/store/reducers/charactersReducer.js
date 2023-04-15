import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE, SET_GENRE_FILTER, SET_EYE_COLOR_FILTER, CLEAR_FILTERS, CLEAR_CHARACTERS } from '../actions/charactersActions';

const initialState = {
  characters: [],
  charactersFilter: [],
  isLoading: false,
  error: null,
  genres: [],
  eyeColors: [],
  filters: {
    gender: 'All',
    eyeColor: 'All',
  },
};

function filterCharacters(characters, filters) {
  return characters.filter((char) => {
    if (filters.gender !== 'All' && char.gender !== filters.gender) {
      return false;
    }
    if (filters.eyeColor !== 'All' && char.eye_color !== filters.eyeColor) {
      return false;
    }
    return true;
  });
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_CHARACTERS_SUCCESS:
      const characters = action.payload

      return {
        ...state,
        characters: characters,
        charactersFilter: characters,
        genres: [...new Set(characters.map(char => char.gender))],
        eyeColors: [...new Set(characters.map(char => char.eye_color))],
        isLoading: false
      };

    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state, error:
          action.payload,
          isLoading: false
      };

    case SET_GENRE_FILTER:
      var newFilters = { ...state.filters, gender: action.payload };
      var filteredCharacters = filterCharacters(state.characters, newFilters);
      return {
        ...state,
        charactersFilter: filteredCharacters,
        filters: newFilters,
      };

    case SET_EYE_COLOR_FILTER:
      var newFilters = { ...state.filters, eyeColor: action.payload };
      var filteredCharacters = filterCharacters(state.characters, newFilters);
      return {
        ...state,
        charactersFilter: filteredCharacters,
        filters: newFilters,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        charactersFilter: state.characters,
      };

    case CLEAR_CHARACTERS:
      return {
        ...state,
        charactersFilter: [],
        characters: []
      };

    default:
      return state;
  }
};

export default charactersReducer;
