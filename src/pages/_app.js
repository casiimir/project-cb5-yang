import MainLayouts from "@/layouts/MainLayouts";
import { applicationContext, initialState } from "@/store/state";
import { useReducer } from "react";
import { reducer } from "@/store/reducer";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <applicationContext.Provider value={{ state, dispatch }}>
      <MainLayouts>
        <Component {...pageProps} />;
      </MainLayouts>
    </applicationContext.Provider>
  );
}
