import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router";

const Wrapper = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="flex-1 p-4 bg-[#F4F5F9] dark:bg-gray-800 overflow-auto text-black dark:text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Wrapper;
