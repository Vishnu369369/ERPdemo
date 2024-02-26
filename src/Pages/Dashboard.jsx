import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import "../Pages/Css/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="flex bg">
        <Header />
        <Sidebar />
        <div className="main-main-cards">
          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>TOTAL PROJECTS</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h1 className="TotalNumber">100</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>COMPLETED PROJECTS</h3>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
              <h1 className="TotalNumber">2</h1>
            </div>
          </div>
          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>ONGOING PROJECTS</h3>
                <BsFillBellFill className="card_icon" />
              </div>
              <h1 className="TotalNumber">23</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>EMPLOYEES</h3>
                <BsPeopleFill className="card_icon" />
              </div>
              <h1 className="TotalNumber">42</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
