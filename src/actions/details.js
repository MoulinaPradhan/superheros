import {
  FETCH_HERO_DETAIL,
  HERO_DETAIL_SUCCESS,
  HERO_DETAIL_FAILURE,
} from "./actionTypes";
export function startFetchHeroDetail() {
  return {
    type: FETCH_HERO_DETAIL,
  };
}
export function heroDetailSuccess(hero) {
  return {
    type: HERO_DETAIL_SUCCESS,
    hero,
  };
}
export function heroDetailFailure(error) {
  return {
    type: HERO_DETAIL_FAILURE,
    error,
  };
}

export function fetchHeroAbout(heroId) {
  return (dispatch) => {
    dispatch(startFetchHeroDetail());
    const api = `https://www.superheroapi.com/api.php/1170962379927864/${heroId}`;
    fetch(api)
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((heroId) => {
        console.log("heroId", heroId);
        dispatch(heroDetailSuccess(heroId.hero));
      });
  };
}
