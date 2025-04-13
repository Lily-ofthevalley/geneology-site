import Search from "./Search";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full bg-indigo-300 flex flex-row">
      <div className="w-7/12 flex flex-row ml-4">
        <NavLink
          to="/"
          className="flex items-center justify-center w-1/5 hover:bg-indigo-400 transition duration-300 py-3 px-6 rounded-lg text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/familytree"
          className="flex items-center justify-center w-1/5 hover:bg-indigo-400 transition duration-300 py-3 px-6 rounded-lg text-white"
        >
          FamilyTree
        </NavLink>
        <NavLink
          to="/graves"
          className="flex items-center justify-center w-1/5 hover:bg-indigo-400 transition duration-300 py-3 px-6 rounded-lg text-white"
        >
          Graves
        </NavLink>
      </div>
      <div className="w-5/12 flex items-center">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
