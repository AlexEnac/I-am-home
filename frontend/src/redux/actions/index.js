export const turnOn = () => {
  return {
    type: "TURN ON",
  };
};

export const turnOff = () => {
  return {
    type: "TURN OFF",
  };
};

export const raiseVolume = () => {
  return {
    type: "RAISE VOLUME",
  };
};

export const lowerVolume = () => {
  return {
    type: "LOWER VOLUME",
  };
};

export const incrementChannel = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementChannel = () => {
  return {
    type: "DECREMENT",
  };
};

export const changeChannel = (data) => {
  return {
    type: "CHANGE",
    payload: data,
  };
};
