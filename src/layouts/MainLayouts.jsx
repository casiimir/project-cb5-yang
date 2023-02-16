import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
};

export default MainLayout;
