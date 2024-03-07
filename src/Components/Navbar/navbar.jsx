import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="../images/logo.svg" alt="" />
        </div>
        <div className="link">
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  ` ${isActive ? "active" : "text-gray-800"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  ` ${isActive ? "active" : "text-gray-800"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"services"}
                className={({ isActive }) =>
                  ` ${isActive ? "active" : "text-gray-800"}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  ` ${isActive ? "active" : "text-gray-800"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn">
          <a href="#">
            <div className="tele-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="tele-con">
              <p>Call us</p>
              <p>+91 - 9801516770</p>
            </div>
          </a>
        </div>
      </header>
      <div id="bottom-bar">
        <ul>
        <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                ` ${isActive ? "active" : "text-gray-800"}`
              }
            >
              <i class="fa-solid fa-home"></i>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                ` ${isActive ? "active" : "text-gray-800"}`
              }
            >
              <i class="fa-solid fa-earth"></i>
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"services"}
              className={({ isActive }) =>
                ` ${isActive ? "active" : "text-gray-800"}`
              }
            >
              <i class="fa-solid fa-taxi"></i>
              <p>Services</p>
            </NavLink>
          </li>
          <li>
          <NavLink
              to={"tour"}
              className={({ isActive }) =>
                ` ${isActive ? "active" : "text-gray-800"}`
              }
            >
              <i class="fa-solid fa-taxi"></i>
              <p>Tour</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                ` ${isActive ? "active" : "text-gray-800"}`
              }
            >
              <i class="fa-solid fa-phone"></i>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
