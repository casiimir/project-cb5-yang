import { createContext } from "react";

const initialState = {
  favorite: [
    {
      artistName: "",
      artistImage: "",
      trackName: "",
      albumName: "",
    },
    {
      artistName: "",
      artistImage: "",
      trackName: "",
      albumName: "",
    },
  ],
};

const applicationContext = createContext(initialState);

export { applicationContext, initialState };
