import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

function App() {
  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'Welcome back!',
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Sign Up',
      text: 'Redirecting to the sign-up page...',
    });
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center app-bg">
      <div className="row w-75 shadow-lg rounded-4 overflow-hidden animate-container">
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block p-0 image-slide">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1734704722~exp=1734708322~hmac=7c10dcfe9845bd5e3fc6923fb59a2c1233faa1d9342287c45a44784213315c14&w=740"
            alt="Login"
            className="img-fluid h-100 w-100"
          />
        </div>

        {/* Login Form Section */}
        <div className="col-md-6 bg-white p-5 form-fade">
          <h3 className="text-center mb-4 text-primary">Welcome Back!</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
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
              Don't have an account?{' '}
              <a href="#" className="text-primary fw-bold" onClick={handleSignup}>
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
