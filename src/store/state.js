import { createContext } from "react";

const initialState = "alfio";

const applicationContext = createContext(initialState);

export { applicationContext, initialState };
