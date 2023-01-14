import { SET_CARDS_DATA, SET_CARD_STATS_DATA_RECEIVED } from "../actionType";
const INIT_STATE = {
  no_workshops: 0,
  no_participants: 0,
  no_ncs: 0,
  no_usage: 0,
  dataReceived: false,
};

export default (state = INIT_STATE, action) => {
  // console.log("action", action);
  switch (action.type) {
    case SET_CARDS_DATA:
      return {
        ...state,
        no_participants: action.payload.no_participants,
        no_ncs: action.payload.no_ncs,
        no_workshops: action.payload.no_workshops,
        no_usage: action.payload.no_usage,
      };
    case SET_CARD_STATS_DATA_RECEIVED:
      return {
        ...state,
        dataReceived: true,
      };
    default:
      return state;
  }
};

// export default reducer;
