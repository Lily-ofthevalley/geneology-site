import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl">navigation</h1>
      <div className="flex flex-col items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/familytree">FamilyTree</NavLink>
        <NavLink to="/graves">Graves</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
