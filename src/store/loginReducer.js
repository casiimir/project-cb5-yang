const loginReducer = (state, action) => {
  switch (action.type) {
    case "FAVORITE":
      console.log(state);
      return {
        ...state,
        favorite: { ...state.artistName, artistName: action.payload },
      };
  }
};

export { loginReducer };
