import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import "./Css/Inventory.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  // BsPeopleFill,
  // BsFillBellFill,
} from "react-icons/bs";

function Inventory() {
  const [showUnit1Options, setShowUnit1Options] = useState(false);
  const [showUnit2Options, setShowUnit2Options] = useState(false);

  return (
    <>
      <div id="inventorybar">
        <Header />
        <Sidebar />

        <div id="btnspecial">
          <div className="unit-container" id="box">
            <div className="inventory-card" id="book">
              <div className="card-inner">
                <h1
                  className="unit-button"
                  onClick={() => setShowUnit1Options(!showUnit1Options)}
                >
                  Unit 1
                </h1>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
            </div>

            {showUnit1Options && (
              <div className="options">
                <div className="option-card" id="change">
                  <div className="card-inner">
                    <button className="option-button">
                      {" "}
                      <Link to="/Tools">Tools</Link>
                    </button>
                    <FaTools style={{ fontSize: "25px" }} />
                  </div>
                </div>

                <div className="option-card">
                  <div className="card-inner">
                    <button className="option-button">
                      <Link to="/Raw">Raw Materials</Link>{" "}
                    </button>
                    <GrResources style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <br />

          <div className="unit-container" id="box">
            <div className="inventory-card" id="book1">
              <div className="card-inner">
                <h1
                  className="unit-button"
                  onClick={() => setShowUnit2Options(!showUnit2Options)}
                >
                  Unit 2
                </h1>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
            </div>

            {showUnit2Options && (
              <div className="options2">
                <div className="option-card" id="change">
                  <div className="card-inner">
                    <button className="option-button">
                      {" "}
                      <Link to="/Tools2">Tools</Link>
                    </button>
                    <FaTools style={{ fontSize: "25px" }} />
                  </div>
                </div>

                <div className="option-card">
                  <div className="card-inner">
                    <button className="option-button">
                      <Link to="/Raw2">Raw Materials</Link>{" "}
                    </button>
                    <GrResources style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div className="unit-container">
                <button className="unit-button" onClick={() => setShowUnit2Options(!showUnit2Options)}>
                Unit 2
                </button>
                {showUnit2Options && (
                <div className="options">
                    <button className="option-button"><Link to="/Tools2" >Tools</Link>   </button>
                    <button className="option-button"><Link to='/Raw2'> Raw Materials</Link></button>
                </div>
                )}
            </div> */}
        </div>
      </div>
    </>
  );
}

export default Inventory;
