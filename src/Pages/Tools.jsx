import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "./Css/Tools.css";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20">
        <header>Add Tools</header>

        <form method="post" style={{ minHeight: "280px" }}>
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>Machine Name</label>
                  <input
                    type="number"
                    name="Machine Name"
                    required
                    placeholder="Machine Name"
                  />
                </div>

                <div className="input-field">
                  <label>Machine Type</label>
                  <input type="text" name="Machine_Tyoe" required />
                </div>

                <div className="input-field">
                  <label>Operation Date</label>
                  <input type="date" name="Operation Date" required />
                </div>

                <div className="input-field">
                  <label>Operator Name</label>
                  <input
                    type="text"
                    name="Operator Name"
                    required
                    placeholder="Operator Name"
                  />
                </div>

                <div className="input-field">
                  <label>Unit Price</label>
                  <input
                    type="text"
                    name="Unit Price"
                    required
                    placeholder="Unit Price"
                  />
                </div>

                <div className="input-field">
                  <label>Unit Name</label>
                  <input
                    type="text"
                    name="Unit"
                    required
                    readOnly
                    defaultValue={"Unit1"}
                  />
                </div>

                <div className="input-field">
                  <label>Status</label>
                  <select id="stock" name="status">
                    <option value="">Select Status</option>

                    <option>Pending</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="buttons">
              <button className="submit">
                <span className="submit">submit</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="headerr">
          <header>Manage Sales</header>

          <div className="fields">
            <div className="input-field">
              <input
                type="text"
                name="Search"
                required
                placeholder="Search"
                style={{
                  position: "relative",
                  left: "550px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table
            cellSpacing="0"
            cellPadding="0"
            style={{ border: "1px solid" }}
          >
            <thead style={{ border: "1px solid" }}>
              <tr>
                <th>
                  <span className="heading">Machine Name</span>
                </th>
                <th>
                  <span className="heading">Machine Type</span>
                </th>
                <th>
                  <span className="heading">Operation Date</span>
                </th>
                <th>
                  <span className="heading">Operator Name</span>
                </th>
                <th>
                  <span className="heading">Unit Price</span>
                </th>

                <th>
                  <span className="heading">Unit Name</span>
                </th>
                <th>
                  <span className="heading">Status</span>
                </th>

                <th>
                  <span className="heading">Action</span>
                </th>
                <th>
                  <span className="heading">Disable </span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="body">CNS</td>
                <td className="body">Eletrical</td>
                <td className="body">25/02/2024</td>
                <td className="body">kim</td>
                <td className="body">500466</td>
                <td className="body">TN23S</td>
                <td className="body">Active</td>

                <td className="body">
                  <>
                    <button className="pl-2">
                      <i
                        className="fa-solid fa-pen-to-square fa-lg"
                        style={{ color: "#ff0000" }}
                      ></i>
                    </button>
                  </>
                </td>
                <td className="body">
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tools;
