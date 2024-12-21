import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login Data:", { email, password });

    try {
      const response = await fetch("http://localhost:3001/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.message) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
      }
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong!",
      });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log("Redirecting to the sign-up page...");

    Swal.fire({
      icon: "info",
      title: "Sign Up",
      text: "Redirecting to the sign-up page...",
    });
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center app-bg">
      <div className="row w-75 shadow-lg rounded-4 overflow-hidden animate-container">
        <div className="col-md-6 d-none d-md-block p-0 image-slide">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1734704722~exp=1734708322~hmac=7c10dcfe9845bd5e3fc6923fb59a2c1233faa1d9342287c45a44784213315c14&w=740"
            alt="Login"
            className="img-fluid h-100 w-100"
          />
        </div>

        <div className="col-md-6 bg-white p-5 form-fade">
          <h3 className="text-center mb-4 text-primary">Welcome Back!</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="ms-2">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary w-100 btn-hover">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <small>
              Don't have an account?{" "}
              <a
                href="#"
                className="text-primary fw-bold"
                onClick={handleSignup}
              >
                Sign up
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
