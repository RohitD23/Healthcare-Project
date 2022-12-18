import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

import { DoctorSidebarData } from "../../models/SidebarData";
import { httpLogout } from "../../utils/request";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarData, setSidebarData] = useState([]);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    setSidebarData(() =>
      DoctorSidebarData.map((item, index) => {
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
    <Container>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavContainer>
          <MenuBars to="#">
            <FaBars onClick={showSidebar} />
          </MenuBars>
        </NavContainer>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <MenuItems onClick={showSidebar}>
            <Toggle>
              <MenuBars to="#">
                <AiOutlineClose />
              </MenuBars>
            </Toggle>

            {sidebarData}

            <MenuItem>
              <Link to="/" onClick={() => httpLogout()}>
                <BiLogOut />
                <span>Logout</span>
              </Link>
            </MenuItem>
          </MenuItems>
        </nav>
      </IconContext.Provider>
    </Container>
  );
}

const Container = styled.div`
  .nav-menu {
    background-color: #3d7cc9;

    width: 25rem;
    height: 100vh;

    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
`;

const NavContainer = styled.div`
  background-color: #3d7cc9;
  height: 6rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;

const MenuBars = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

const MenuItems = styled.ul`
  width: 100%;
`;

const Toggle = styled.li`
  background-color: #3d7cc9;

  width: 100%;
  height: 7rem;

  display: flex;
  justify-content: start;
  align-items: center;
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
    background-color: #060b26;
  }

  span {
    margin-left: 1.6rem;
  }
`;
