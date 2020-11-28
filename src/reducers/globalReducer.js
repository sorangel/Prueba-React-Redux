import { globalTypes } from "../types";

const initialState = { showImages: false, characters: [] };

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case globalTypes.TOGGLE_IMAGES:
      return {
        ...state,
        showImages: !state.showImages,
      };

    case globalTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.body,
      };

    default:
      return state;
  }
}
