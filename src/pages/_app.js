import MainLayouts from "@/layouts/MainLayouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayouts >
      <Component {...pageProps} />;
    </MainLayouts>
  ) 
}
