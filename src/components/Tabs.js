import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Tabs = () => {
  const location = useLocation()


    return (
        <Nav variant="pills" className="px-4" >
  <Nav.Item>
    <NavLink className={`navLink ${ ["/Spacious/", ""].includes(location.pathname) ? "active" : "navLink" }`} to="/Spacious">PLANETS</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink className={`navLink ${location.pathname === "/Spacious/characters" ? "active" : "navLink" }`} to="/Spacious/characters">CHARACTERS</NavLink>
  </Nav.Item>
</Nav>
    )
}

export default Tabs
