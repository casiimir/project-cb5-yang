import MainLayout from "@/layouts/MainLayouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />;
    </MainLayout>
  )
}
