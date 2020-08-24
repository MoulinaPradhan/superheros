import {
  HERO_DETAIL_SUCCESS,
  HERO_DETAIL_FAILURE,
  FETCH_HERO_DETAIL,
} from "../actions/actionTypes";

const initalDetailState = {
  hero: {},
  error: null,
  sucess: null,
};
export default function detail(state = initalDetailState, action) {
  switch (action.type) {
    case HERO_DETAIL_SUCCESS:
      return {
        ...state,
        sucess: true,
        hero: action.hero,
      };
    case HERO_DETAIL_FAILURE:
      return {
        ...state,
        error: hero.action,
      };
    case FETCH_HERO_DETAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
