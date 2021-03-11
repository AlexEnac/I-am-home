import { turnOff, turnOn } from "./actions";
import { TURN_OFF, TURN_ON } from "./const";

const dispatch = useDispatch();

export const lightActionToDispatch = new Map([
  [TURN_ON, turnOn()],
  [TURN_OFF, turnOff()],
]);
