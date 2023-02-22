import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Login from "@/Login/Login";

const MainLayout = ({ children }) => {
  const [logged, setLogged] = useState("true");

  useEffect(() => {
    setLogged(localStorage.getItem("logged"));
  }, []);

  if (logged === "true") {
    return (
      <>
        <Header />
        {children}
        <Navbar />
      </>
    );
  } else {
    return (
      <>
        <Login />;
      </>
    );
  }
};

export default MainLayout;
