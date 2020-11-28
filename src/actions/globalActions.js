import { globalTypes } from "../types";

export function toggleShowImages(dispatch, body) {
  dispatch({
    type: globalTypes.TOGGLE_IMAGES,
  });
}

export function setCharacters(dispatch, characters = []) {
  dispatch({
    type: globalTypes.SET_CHARACTERS,
    body: characters,
  });
}
