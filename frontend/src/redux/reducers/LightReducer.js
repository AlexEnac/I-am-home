import { TURN_OFF, TURN_ON } from "../const";

const INIT_LIGHT_STATE = false;

const lightReducer = (state = INIT_LIGHT_STATE, action) => {
  switch (action.type) {
    case TURN_ON:
      return true;
    case TURN_OFF:
      return false;
    default:
      return state;
  }
};

export default lightReducer;
