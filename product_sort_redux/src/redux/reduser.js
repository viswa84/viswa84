import * as types from "./actiontype";

const /* A variable that holds the initial state of the reducer. */
initialstae = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};

const reduser = (state = initialstae, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MUSIC_RECORD_SUCESS:
      return {
        ...state,
        isLoading: true,
        musicRecords: payload,
      };
    case types.GET_MUSIC_RECORD_FAILUR:
      return {
        ...state,
        isLoading: false,
        isError: true,

      };

    default:
      return state;
  }
};
export {reduser}
