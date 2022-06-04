import React from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 w-full">
      <nav className="flex items-center justify-between mx-auto p-4 max-w-content">
        <NavLogo />
        <ul className="flex gap-x-4 items-center">
          <NavItem to={"/prijava"} title={"Prijava"} />
          <NavItem to={"/korpa"} title={"Korpa"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
