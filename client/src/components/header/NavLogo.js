import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to={"/"}>
      <h1 className="font-bold text-xl">J-Flower</h1>
    </Link>
  );
};

export default NavLogo;
