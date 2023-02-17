const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "FAVORITE":
      console.log(state);
      return { notelist: [action.payload] };
  }
};

export { favoriteReducer };
