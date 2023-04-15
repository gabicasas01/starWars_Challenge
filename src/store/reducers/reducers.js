import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
  films: filmsReducer,
  characters: charactersReducer
});

export default rootReducer;
