import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router";

const Wrapper = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex p-4 overflow-auto text-black ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Wrapper;
