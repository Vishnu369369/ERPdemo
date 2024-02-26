import React from "react";
import "../Components/css/Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("dropdown toggled")
    setIsOpen(!isOpen);}
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo">Sand</h2>

        <nav>
          <ul className="hul">
            <li>
              <img
                src="./../assets/logo.png"
                alt="Logo"
                className="logo-header"
              />
            </li>
            <li className="hli">
              <a
                className="ha mail"
                href="/"
                
              >
                <i
                  className="fa-solid fa-envelope"
                  style={{ paddingRight: "10px" }}
                ></i>
                Company@email.com
              </a>
            </li>
            <li className="hli">
              <a
                className="ha phno"
                href="/"
               
              >
                <i
                  class="fa-solid fa-phone"
                  style={{ paddingRight: "10px" }}
                ></i>
                9876543210
              </a>
            </li>
            <li className="hli ">
              <a
                className="ha border p-2 size-1 rounded-full"
                onClick={toggleDropdown}
              >
                <i className="fa-solid fa-user w-5"></i>
                {isOpen && (
                  <div className="menu">
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/profile">
                          <i class="fas fa-user"></i>View Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings">
                          <i class="fa-solid fa-gear"></i>Change Profile
                        </Link>
                      </li>
                      <li>
                        <button onClick={() => console.log("Logout")}>
                          <i class="fa-solid fa-right-from-bracket"></i> Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </a>
            </li>
            {/* <li className="hli">
            <a className="ha" href="/home">Home</a>
          </li>
          <li className="hli">
            <a className="ha" href="/home">Home</a>
          </li>
          <li className="hli">
            <a className="ha" href="/home">Home</a>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
