import { combineReducers } from "redux";
import {
  ADD_HEROS,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITES,
  ADD_HERO_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions/actionTypes";

const initialHerosState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function heros(state = initialHerosState, action) {
  switch (action.type) {
    case ADD_HEROS:
      return {
        ...state,
        list: action.heros,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.hero, ...state.favourites],
      };

    case REMOVE_FAVOURITE:
      let filtered = state.favourites.filter((hero) => {
        return hero.Title !== action.hero.Title;
      });
      return {
        ...state,
        favourites: filtered,
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.showFavourites,
      };

    case ADD_HERO_TO_LIST:
      return {
        ...state,
        list: [action.hero, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: [],
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.hero,
        showSearchResults: true,
      };
    case ADD_HERO_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

export default combineReducers({
  heros,
  search,
});
