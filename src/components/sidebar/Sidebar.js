import React, { useState } from "react";
import SidebarLogic from "./SidebarLinks";
import { NavLink } from "react-router-dom";



function Sidebar() {
  
  const {links} = SidebarLogic();

  return (
    <div className="flex-col-4 md:flex-row-start md:justify-center gap-4 items-center w-full text-center font-barlow">
      {links.map((link, index) => (
        link?.show &&
        <NavLink
          className={({ isActive }) =>
            isActive ? "active" : "text-black hover:text-primary"
          }
          key={link.id}
          to={link.url}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
