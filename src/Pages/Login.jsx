import React, { useState } from "react";
import "./Css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // to check the login details
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "SuperAdmin@gmail.com" && password === "123") {
      navigate("/Dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <section className="bg">
        <div className="content">
          <div className="left">
            <img src="./../assets/1.png" alt="icon" />
            <h1>
              <img src="./../assets/2.png" alt="icon" />
            </h1>
          </div>

          <div className="right">
            <div className="title">
              <h2>Welcome to Sri Maha Lakshmi</h2>
            </div>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="inputbox">
                  <label>Full Name</label>
                  <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="inputbox">
                  <label>Email</label>
                  <input
                    type="email"
                    className="loginInput"
                    placeholder="Enter your Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="inputbox">
                  <label>Password</label>
                  <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <br />

                <div className="create">
                  <button className="loginButton" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Login;
