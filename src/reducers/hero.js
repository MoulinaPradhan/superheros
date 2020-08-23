import { HERO_SUCCESS, HERO_FAILURE, FETCH_HERO_ABOUT } from "../actions/index";

const initalProfileState = {
  hero: {},
};
export default function profile(state = initalProfileState, action) {
  switch (action.type) {
    case HERO_SUCCESS:
      return {
        ...state,

        hero: action.hero,
      };
    case HERO_FAILURE:
      return {
        ...state,
      };
    case FETCH_HERO_ABOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
