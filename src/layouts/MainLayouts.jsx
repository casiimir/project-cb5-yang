import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  const [logged, setLogged] = useState("true");
  useEffect(() => {
    setLogged(localStorage.getItem("logged"));
  }, []);
  console.log(logged);
  if (logged === "true") {
    return (
      <>
        <Header />
        {children}

        <Navbar />
      </>
    );
  } else {
    return <> {children};</>;
  }
};

export default MainLayout;
