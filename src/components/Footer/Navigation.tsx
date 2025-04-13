import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <NavLink to="/" className={"mb-2 hover:underline"}>
        Home
      </NavLink>
      <NavLink to="/search" className={"mb-2 hover:underline"}>
        Search
      </NavLink>
      <NavLink to="/familytree" className={"mb-2 hover:underline"}>
        FamilyTree
      </NavLink>
      <NavLink to="/graves" className={"hover:underline"}>
        Graves
      </NavLink>
    </div>
  );
};

export default Navigation;
