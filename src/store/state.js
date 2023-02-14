import { createContext } from "react";

const initialState = {
  login: [
    {
      username: "dario",
      password: "password",
      logged: false,
    },
    { username: "simone", password: "passwordsimone", logged: false },
  ],
  eccolo: [],
};

const loginState = {
  login: [
    {
      username: "dario",
      password: "password",
      logged: false,
    },
    { username: "simone", password: "passwordsimone", logged: false },
  ],
};

const applicationContext = createContext(initialState);

export { applicationContext, initialState };
