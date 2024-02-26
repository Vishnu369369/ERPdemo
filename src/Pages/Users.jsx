import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import './Css/Users.css';


const Users = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20">
        <header>Add Users</header>

        <form method="post" style={{ minHeight: "135px" }}>
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields1">
                <div className="input-field1">
                <label id="label">User Id</label>

                  <input
                    type="text"
                    name="User_id"
                    required
                    placeholder="User Id"
                  />
                </div>

                <br/>

                <div className="input-field1">
                  <label id="label">User Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="User Name"
                  />
                </div>

                <br/>

                <div className="input-field1">
                  <label id="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>

                <br/>

                <div className="input-field1">
                  <label id="label">Password</label>
                  <input
                    type="text"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </div>

                <br/>

                <div className="input-field1">
                  <label id="label">Role</label>
                  <select id="stock1" className="select" name="Role">
                    <option className="subcat" value="">
                      Select Role
                    </option>
                    <option>Super Admin</option>
                    <option>Admin</option>
                    <option>Production Manager</option>
                    <option>Supervisior</option>
                    <option>Quality Check</option>
                    <option>Accounts</option>
                  </select>
                </div>
                <br/>
                <div className="input-field1">
            
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
      </div>
    </div>
  );
};

export default Users;
