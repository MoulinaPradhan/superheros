import { FETCH_HERO_ABOUT, HERO_SUCCESS, HERO_FAILURE } from "./actionTypes";
export function startfetchHeroAbout() {
  return {
    type: FETCH_HERO_ABOUT,
  };
}
export function heroSucess(hero) {
  return {
    type: HERO_SUCCESS,
    hero,
  };
}
export function heroFailure(error) {
  return {
    type: HERO_FAILURE,
    error,
  };
}

export function fetchHeroAbout(heroId) {
  return (dispatch) => {
    dispatch(startfetchHeroAbout());
    const api = `https://www.superheroapi.com/api.php/1170962379927864/${heroId}`;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(heroSucess(data.data.hero));
      });
  };
}
