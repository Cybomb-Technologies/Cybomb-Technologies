import styles from "./login.module.css";
import { useState } from "react";

function AdminLogin() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.cybombtechnologies.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });
      
      if (response.ok) {
        const data = await response.json();
        // Handle successful login (store token, redirect, etc.)
        console.log('Login successful:', data);
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={`container-fluid ${styles.gradientBackground}`}>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
          <div className={`card shadow-lg ${styles.loginCard}`}>
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <img 
                  src="/images/logo-11.png" 
                  alt="Cybomb Technologies" 
                  className={`img-fluid ${styles.logo}`}
                />
                {/* <h3 className="mt-3 mb-2">Cybomb Technologies</h3> */}
                {/* <p className="text-muted">Secure Admin Portal</p> */}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      value={loginData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#forgot-password" className="text-decoration-none">
                    Forgot password?
                  </a>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary w-100 ${styles.loginBtn}`}
                >
                  Login
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="mb-0">
                  Need help? <a href="#support" className="text-decoration-none">Contact support</a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;