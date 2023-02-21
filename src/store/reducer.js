const reducer = (state, action) => {
  switch (action.type) {
    case "FAVORITE":
      return { notelist: [action.payload] };
  }
  switch (action.type) {
    case "active":
      return action.payload;
  }
};

export { reducer };
