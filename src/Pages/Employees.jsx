import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20">
        <header>Add Employees</header>

        <form method="post" style={{ minHeight: "135px" }}>
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>Employee Id</label>
                  <input
                    type="text"
                    name="employee_id"
                    required
                    placeholder="Employee Id"
                  />
                </div>
                <div className="input-field">
                  <label>Employee Name</label>
                  <input
                    type="text"
                    name="employee_name"
                    required
                    placeholder="Employee Name"
                  />
                </div>
                <div className="input-field">
                  <label>Date Of Birth</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    required
                    placeholder="Date Of Birth"
                  />
                </div>
                <div className="input-field">
                  <label>Salary</label>
                  <input
                    type="text"
                    name="salary"
                    required
                    placeholder="Salary"
                  />
                </div>
                <div className="input-field">
                  <label>Joining Date</label>
                  <input
                    type="date"
                    name="joining_date"
                    required
                    placeholder="Joining Date"
                  />
                </div>
                <div className="input-field">
                  <label>Role</label>
                  <input type="text" name="role" required placeholder="Role" />
                </div>
                <div className="input-field">
                  <label>Location</label>
                  <select id="stock" name="location">
                    <option className="subcat" value="">
                      Select Location
                    </option>
                    <option>Unit 1</option>
                    <option>Unit 2</option>
                  </select>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    hidden
                  />
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
        <div id="wrapper" className="scroll-bar">
          <div className="headerr">
            <header>Employees</header>

            <div className="fields">
              <div className="input-field">
                <input
                  type="text"
                  name="Search"
                  required
                  placeholder="Search"
                  style={{
                    position: "relative",
                    left: "356px",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <table cellSpacing="0" cellPadding="0">
              <thead style={{ border: "1px solid" }}>
                <tr>
                  <th>
                    <span className="heading">Employee Id</span>
                  </th>
                  <th>
                    <span className="heading">Employee Name</span>
                  </th>
                  <th>
                    <span className="heading">Date Of Birth</span>
                  </th>
                  <th>
                    <span className="heading">Salary</span>
                  </th>
                  <th>
                    <span className="heading">Joining Date</span>
                  </th>
                  <th>
                    <span className="heading">Role</span>
                  </th>
                  {/* <th>
                  <span className="heading">PO number</span>
                </th> */}
                  <th>
                    <span className="heading">Loction</span>
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
                  <td className="body">1</td>
                  <td className="body">Bhavana</td>
                  <td className="body">18/05/2003</td>
                  <td className="body">123456</td>
                  <td className="body">1/12/2023</td>
                  <td className="body">Software</td>
                  <td className="body">Unit 1</td>

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
                <tr>
                  <td className="body">2</td>
                  <td className="body">Vishnu</td>
                  <td className="body">21/11/2000</td>
                  <td className="body">123456</td>
                  <td className="body">1/1/2024</td>
                  <td className="body">Hardware</td>
                  <td className="body">Unit 2</td>
                  {/* <td className="body">{product.po_number}</td> */}

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
    </div>
  );
};

export default Employees;
