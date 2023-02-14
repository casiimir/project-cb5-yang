import { createContext } from "react";

const initialState = {
  login: [
    {
      username: "dario",
      password: "provadario",
    },
    { username: "simone", password: "provasimone" },
  ],
};

const applicationContext = createContext(initialState);

export { applicationContext, initialState };
