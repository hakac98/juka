import { Link } from "react-router-dom";

const NavItem = ({ to, title }) => {
  return (
    <li>
      <Link to={to}>
        <div className="border border-slate-150 px-4 py-2 rounded">
          <h1>{title}</h1>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
