const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(state);
      return {
        ...state,
        login: { ...state.logged, logged: action.payload },
      };
  }
};

export { loginReducer };
