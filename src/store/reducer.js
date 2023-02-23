const reducer = (state, action) => {
  switch (action.type) {
    case "favorite":
      return {
        ...state,
        favorite: action.payload,
        route: state?.route,
      };
  }
  switch (action.type) {
    case "active":
      return {
        ...state,
        favorite: state?.favorite,
        route: [action.payload],
      };
  }
  switch (action.type) {
    case "remove":
      return {
        ...state,
        favorite: state?.favorite.filter(
          (item) => item.titleTrack !== action.payload
        ),

        route: state?.route,
      };
  }
};

export { reducer };
