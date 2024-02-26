import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

const Proposal = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20 bg">
        <header>Add Purposal</header>

        <form method="post">
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>your Company name</label>
                  <input
                    type="number"
                    name="company_name"
                    required
                    placeholder="Company Name"
                  />
                </div>
                <div className="input-field">
                  <label>Company Logo</label>
                  <input
                    type="file"
                    name="purchase_order_number"
                    required
                    placeholder="Purchase Order Number"
                  />
                </div>

                <div className="input-field">
                  <label>Customer Company Name</label>
                  <input
                    type="text"
                    name="customer_company_name"
                    placeholder="Company Name"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Customer Company Logo</label>
                  <input type="file" name="customer_company_logo" required />
                </div>

                <div className="input-field">
                  <label>Bid Number</label>
                  <input
                    type="text"
                    placeholder="BID number"
                    name="so_date"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Purposal Order Date</label>
                  <input
                    type="text"
                    name="Purposal_order_date"
                    required
                    placeholder="Purposal Order Date"
                  />
                </div>
                <div className="input-field">
                  <label>Purposal Type</label>
                  <select id="stock" name="purposal_type">
                    <option classNameName="subcat" value="">
                      Select Purposal Type
                    </option>

                    <option>UPI</option>
                    <option>NetBanking</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Created By </label>
                  <input
                    placeholder="Created By"
                    type="text"
                    name="created_by"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Updated By</label>
                  <input
                    type="text"
                    name="updated_by"
                    placeholder="Updated By"
                  />
                </div>
                <div className="input-field">
                  <label>Bid Submitted Date</label>
                  <input type="date" name="so_date" required />
                </div>
                <div className="input-field">
                  <label>Bid Ending Date</label>
                  <input type="date" name="so_date" required />
                </div>
                <div className="input-field">
                  <label>PO No</label>
                  <input type="text" name="po_number" placeholder="Po Number" />
                </div>

                <div className="input-field">
                  <label>Customer/Vendor Name</label>
                  <input
                    type="text"
                    name="customer_name"
                    required
                    placeholder="Customer Name"
                  />
                </div>

                <div className="input-field">
                  <label>Status</label>
                  <select id="stock" name="status">
                    <option value="">Select Status</option>

                    <option>Open</option>
                    <option>In-Closed</option>
                    <option>In-Process</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="buttons">
              <button className="submit">
                <span className="submit">submit</span>
                <i className="uil uil-navigator"></i>
              </button>
              <button className="submit">
                <span className="submit">Download PDF</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Proposal;
