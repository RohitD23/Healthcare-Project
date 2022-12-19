import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import { BiLogOut } from "react-icons/bi";

import { AdminSidebarData } from "../../models/SidebarData";
import { httpLogout } from "../../utils/request";

export default function Navbar() {
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    setSidebarData(() =>
      AdminSidebarData.map((item, index) => {
        return (
          <MenuItem key={index}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </MenuItem>
        );
      })
    );
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavMenu>
          <MenuItems>
            {sidebarData}

            <MenuItem>
              <Link to="/" onClick={() => httpLogout()}>
                <BiLogOut />
                <span>Logout</span>
              </Link>
            </MenuItem>
          </MenuItems>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
}

const NavMenu = styled.nav`
  background-color: #3d7cc9;

  width: 25rem;
  height: 100vh;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
`;

const MenuItems = styled.ul`
  width: 100%;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;

  list-style: none;

  padding: 0.8rem 0 0.8rem 1.6rem;
  height: 6rem;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 1.8rem;

    width: 95%;
    height: 100%;

    display: flex;
    align-items: center;

    padding: 0 1.6rem;
    border-radius: 0.4rem;
  }

  a:hover {
    background-color: #013778;
  }

  span {
    margin-left: 1.6rem;
  }
`;
