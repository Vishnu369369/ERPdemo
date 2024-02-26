import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import "../Pages/Css/Invoice.css"

const Invoice = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div>
        <h1 className="setting-header">Upload Invoice</h1>
        <form className="setting-form" encType="multipart/form-data">
          <div className="input-field">
            <label>Upload Invoice</label>
            <br />
            <input type="file" name="logo_image" accept="image/*" required />
          </div>
          <div className="buttons setting-button">
            <button className="submit">
              <span className="submit">Submit</span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invoice;
