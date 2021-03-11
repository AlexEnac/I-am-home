import {
  CHANGE_CHANNEL,
  DECREMENT_CHANNEL,
  INCREMENT_CHANNEL,
  LOWER_VOLUME,
  RAISE_VOLUME,
  TURN_OFF,
  TURN_ON,
} from "../const";

const INIT_TV_STATE = {
  isOn: false,
  channel: 1,
  volume: 10,
};

const tvReducer = (state = INIT_TV_STATE, { type, payload }) => {
  switch (type) {
    case TURN_ON:
      return {
        isOn: true,
        channel: state.channel,
        volume: state.volume,
      };
    case TURN_OFF:
      return {
        isOn: false,
        channel: state.channel,
        volume: state.volume,
      };
    case RAISE_VOLUME:
      return {
        ...state,
        volume: state.volume + 3,
      };
    case LOWER_VOLUME:
      return {
        ...state,
        volume: state.volume - 3,
      };
    case INCREMENT_CHANNEL:
      return {
        ...state,
        channel: state.channel + 1,
      };
    case DECREMENT_CHANNEL:
      return {
        ...state,
        channel: state.channel - 1,
      };
    case CHANGE_CHANNEL:
      return {
        ...state,
        channel: payload,
      };
    default:
      return INIT_TV_STATE;
  }
};

export default tvReducer;
