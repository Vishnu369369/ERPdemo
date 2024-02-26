import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import "../Pages/Css/ManageProjects.css";

const ManageProduct = () => {
  return (
    <div className="flex manageproducts bg" >
      <Header />
      <Sidebar />
      <div id="wrapper" className="scroll-bar">
        <div className="headerr">
          <header>Manage Projects</header>
          <button className="Add">
            <Link to="/Sales">Add</Link>
          </button>
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
        <div>
          <table cellSpacing="0" cellPadding="0">
            <thead style={{ border: "1px solid" }}>
              <tr>
                <th>
                  <span className="heading">SO Number</span>
                </th>
                <th>
                  <span className="heading">SO Date</span>
                </th>
                <th>
                  <span className="heading">SO Update Date</span>
                </th>
                <th>
                  <span className="heading">SO Type</span>
                </th>
                <th>
                  <span className="heading">Created By</span>
                </th>
                <th>
                  <span className="heading">Updated By</span>
                </th>
                {/* <th>
                  <span className="heading">PO number</span>
                </th> */}
                <th>
                  <span className="heading">PO Date</span>
                </th>
                <th>
                  <span className="heading">Payment Terms</span>
                </th>
                <th>
                  <span className="heading">Customer Name</span>
                </th>
                <th>
                  <span className="heading">Customer Ship Address</span>
                </th>
                <th>
                  <span className="heading">Delivery Date</span>
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
                <td className="body">1</td>
                <td className="body">22/2/24</td>
                <td className="body">22/2/24</td>
                <td className="body">Patner</td>
                <td className="body">Bhavana</td>
                <td className="body">Bhavana</td>
                <td className="body">22/2/24</td>
                {/* <td className="body">{product.po_number}</td> */}
                <td className="body">UPI</td>
                <td className="body">Bhavana</td>
                <td className="body">Kukatpally</td>
                <td className="body">22/2/24</td>
                <td className="body">Pending</td>

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
                <td className="body">23/2/24</td>
                <td className="body">23/2/24</td>
                <td className="body">Patner</td>
                <td className="body">Vishnu</td>
                <td className="body">Vishnu</td>
                <td className="body">23/2/24</td>
                {/* <td className="body">{product.po_number}</td> */}
                <td className="body">UPI</td>
                <td className="body">Vishnu</td>
                <td className="body">Warangal</td>
                <td className="body">23/2/24</td>
                <td className="body">Pending</td>

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
        <div id="wrapper" className="scroll-bar">
          <div className="headerr">
            <header>List Items</header>
            <button className="Add">
              <Link to="/Sales">Add</Link>
            </button>
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
          <div>
            <table cellSpacing="0" cellPadding="0">
              <thead style={{ border: "1px solid" }}>
                <tr>
                  <th>
                    <span className="heading">Line Number</span>
                  </th>
                  <th>
                    <span className="heading">Item Number</span>
                  </th>
                  <th>
                    <span className="heading">Description</span>
                  </th>
                  <th>
                    <span className="heading">Qty</span>
                  </th>
                  <th>
                    <span className="heading">UOM</span>
                  </th>
                  <th>
                    <span className="heading">Unit Price</span>
                  </th>
                  <th>
                    <span className="heading">Price List ID</span>
                  </th>
                  <th>
                    <span className="heading">Discount%</span>
                  </th>
                  <th>
                    <span className="heading">Amount</span>
                  </th>
                  <th>
                    <span className="heading">Line Status</span>
                  </th>

                  <th>
                    <span className="heading">Action</span>
                  </th>
                  <th>
                    <span className="heading">Disable Update</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lalign body">1</td>
                  <td className="body">1</td>
                  <td className="body">Description</td>
                  <td className="body">3</td>
                  <td className="body">Kg</td>
                  <td className="body">100</td>
                  <td className="body">100</td>
                  <td className="body">20</td>
                  <td className="body">300</td>
                  <td className="body">Pending</td>
                  <td>
                    <>
                      <button className="pl-2">
                        <i
                          className="fa-solid fa-pen-to-square fa-lg"
                          style={{ color: "#ff0000" }}
                        ></i>
                      </button>
                    </>
                  </td>
                  <td>
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

export default ManageProduct;

