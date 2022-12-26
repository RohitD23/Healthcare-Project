import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { BiLogOut } from "react-icons/bi";

import {
  AdminSidebarData,
  DoctorSidebarData,
  PatientSidebarData,
} from "../../models/SidebarData";

import {
  httpCheckUserLoggedIn,
  httpLogout,
  httpGetAccountType,
} from "../../utils/request";

export default function Navbar() {
  const [sidebarData, setSidebarData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setSidebarData(() =>
      selectedData.map((item, index) => {
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
  }, [selectedData]);

  useEffect(() => {
    async function checkUserLoggedIn() {
      const response = await httpCheckUserLoggedIn();
      if (!response.ok) navigate("/");
    }

    checkUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function getAccountType() {
      const response = await httpGetAccountType();

      if (response.type === "patient") setSelectedData(PatientSidebarData);
      else {
        if (response.type === "admin") setSelectedData(AdminSidebarData);
        else setSelectedData(DoctorSidebarData);
      }
    }

    getAccountType();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavMenu>
          <MenuItems>
            <LogoName href="/">
              <img src="/images/company-logo.png" alt="logo" />
              Mamta Hospital
            </LogoName>
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

  width: 30rem;
  height: 100vh;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
`;

const LogoName = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;

  margin: 2rem 1rem;

  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
  }
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
