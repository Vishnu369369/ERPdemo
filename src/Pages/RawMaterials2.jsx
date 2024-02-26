import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "./Css/Tools.css";
import { Link } from "react-router-dom";

const RawMaterials2 = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20" style={{ minHeight: "280px" }}>
        <header>Add Raw Materials In Unit2</header>

        <form method="post">
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>Material Name</label>
                  <input
                    type="number"
                    name="Machine Name"
                    required
                    placeholder="Material Name"
                  />
                </div>

                <div className="input-field">
                  <label>Material Type</label>
                  <input type="text" name="Material Type" required />
                </div>

                <div className="input-field">
                  <label>Quantity</label>
                  <input type="number" name=" Quantity" required />
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
                    defaultValue={"Unit2"}
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
          <header>Raw Materials-Unit2</header>

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
                  <span className="heading">Material Name</span>
                </th>
                <th>
                  <span className="heading">Material Type</span>
                </th>
                <th>
                  <span className="heading">Quantity</span>
                </th>

                <th>
                  <span className="heading">Unit Of Measure</span>
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
                <td className="body">Steel</td>
                <td className="body">Hard</td>
                <td className="body">5</td>
                <td className="body">kg</td>
                <td className="body">100 </td>
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


export default RawMaterials2
