const initialState = {
  message: "",
  timer: null,
};

const notificationReducer = (state = initialState, action) => {
  console.log("notificationReducer -> state", state);

  switch (action.type) {
    case "SHOW":
      clearTimeout(state.timer);
      return action.data;
    default:
      return state;
  }
};

export const showNotification = (message, time = 3000) => {
  return async (dispatch) => {
    dispatch({
      type: "SHOW",
      data: {
        message,
        timer: setTimeout(() => {
          dispatch({ type: "SHOW", data: { message: "", timer: null } });
        }, time),
      },
    });
  };
};

export default notificationReducer;
