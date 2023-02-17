import MainLayouts from "@/layouts/MainLayouts";
import { applicationContext, initialState } from "@/store/state";
import { useReducer } from "react";
import favoriteReducer from "./favourite_page";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  return (
    <MainLayouts>
      <applicationContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />;
      </applicationContext.Provider>
    </MainLayouts>
  );
}
