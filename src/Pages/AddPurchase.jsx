import React from 'react'
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

const AddPurchase = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20">
        <header>Add Purchase Order</header>

        <form method="post">
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>Purchase Order Number</label>
                  <input
                    type="number"
                    name="purchase_order_number"
                    required
                    placeholder="Purchase Order Number"
                  />
                </div>
                <div className="input-field">
                  <label>Purchase Order Type</label>
                  <select id="stock" name="purchase_order_type">
                    <option className="subcat" value="">
                      Select Purchase Order Type
                    </option>
                    <option>Customer</option>
                    <option>Patner</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Purchase Order Date</label>
                  <input type="date" name="purchase_order_date" required />
                </div>

                <div className="input-field">
                  <label>Purchse Order Updated Date</label>
                  <input
                    type="date"
                    name="purchase_order_updated_date"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>SO Date</label>
                  <input type="date" name="so_date" required />
                </div>

                <div className="input-field">
                  <label>Bid Number</label>
                  <input
                    type="text"
                    name="bid_number"
                    required
                    placeholder="Bid Number"
                  />
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
                  <label>Tender No</label>
                  <input type="text" name="po_number" placeholder="Po Number" />
                </div>
                <div className="input-field">
                  <label>Payment Terms</label>
                  <select id="stock" name="payment_terms">
                    <option classNameName="subcat" value="">
                      Select Payment
                    </option>

                    <option>30 days</option>
                    <option>60 days</option>
                  </select>
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

                {/* <div className="input-field">
                  <label>Bid#</label>
                  <input
                    type="number"
                    name="Bid"
                    required
                    placeholder="Bid"
                   

                  />
                </div> */}
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

        <header>List Items</header>
        <form method="post">
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>Line Number</label>
                  <input
                    type="number"
                    name="Line_Number"
                    required
                    placeholder="Line_Number"
                  />
                </div>
                <div className="input-field">
                  <label>Item Number</label>
                  <input
                    type="number"
                    name="Item_Number"
                    required
                    placeholder="Item_Number"
                  />
                </div>
                <div className="input-field">
                  <label>Description</label>
                  <input
                    type="text"
                    name="Description"
                    placeholder="Description"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Quantity</label>
                  <input
                    type="number"
                    name="Quantity"
                    placeholder="Quantity"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>UOM</label>
                  <input type="text" name="UOM" placeholder="UOM" required />
                </div>

                <div className="input-field">
                  <label>Discount</label>
                  <input type="text" name="Discount" placeholder="Discount" />
                </div>
                <div className="input-field">
                  <label>Amount </label>
                  <input placeholder="Amount" type="number" name="Amount" r />
                </div>

                <div className="input-field">
                  <label>Line Status</label>
                  <select id="stock" name="line_status">
                    <option className="subcat" value="">
                      Select Status
                    </option>
                    <option>Pending</option>
                    <option>Approved</option>
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
      </div>
    </div>
  );
}

export default AddPurchase