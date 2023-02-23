import { createContext } from "react";

const initialState = { route: "", favorite: [] };

const applicationContext = createContext(initialState);

export { applicationContext, initialState };
