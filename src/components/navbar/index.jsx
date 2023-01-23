import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary ">
        <NavLink className="nav-link active navbar-brand text-light fw-bold bg-info bg-secondary-10 border border-info rounded text-wrap p-1" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link active navbar-brand text-light fw-bold bg-info bg-secondary-10 border border-info rounded text-wrap p-1" aria-current="page" to="/form">Add game</NavLink>
    </nav>
  );
};
