import React from "react";
import { Link } from "react-router-dom";
 // Make sure to import the CSS file

const Header = ({ isAdmin }) => {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-link">
            <b>Dashboard</b>
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="nav-link">
            <b>Calendar</b>
          </Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/admin" className="nav-link">
                <b>Admin</b>
              </Link>
            </li>
            <li>
              <Link to="/admin/companies" className="nav-link">
                <b>Company Management</b>
              </Link>
            </li>
            <li>
              <Link to="/admin/methods" className="nav-link">
                <b>Communication Methods</b>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
