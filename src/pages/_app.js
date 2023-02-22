import MainLayouts from "@/layouts/MainLayouts";
import QRcode from "@/components/QRcode/QRcode";
import { applicationContext, initialState } from "@/store/state";
import { useState, useEffect, useReducer } from "react";
import { reducer } from "@/store/reducer";
import MediaQuery from 'react-responsive';

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <applicationContext.Provider value={{ state, dispatch }}>
      {isClient && (
        <>
          <MediaQuery minWidth={768}>
            <QRcode />
          </MediaQuery>

          <MediaQuery maxWidth={767}>
            <MainLayouts>
              <Component {...pageProps} />
            </MainLayouts>
          </MediaQuery>
        </>
      )}
    </applicationContext.Provider>
  );
}