import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.msg || "Login failed");
      }
    } catch (err) {
      setError("Server Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.loginContainer}`}>
      <div className={`card ${styles.loginCard}`}>
        <div className="card-body">
          <div className={styles.brandWrapper}>
            <h2 className={`card-title ${styles.title}`}>
              <i className="bi bi-shield-lock"></i> Admin Portal
            </h2>
          </div>
          <p className={styles.subtitle}>Sign in to your account</p>
          
          <form onSubmit={handleLogin}>
            {error && (
              <div className={`alert alert-danger ${styles.alert}`} role="alert">
                <i className="bi bi-exclamation-triangle"></i> {error}
              </div>
            )}
            
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  className={`form-control ${styles.inputField}`}
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <i className="bi bi-key"></i>
                </span>
                <input
                  type="password"
                  className={`form-control ${styles.inputField}`}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className={`btn btn-primary ${styles.loginButton}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner} role="status" aria-hidden="true"></span>
                  Signing in...
                </>
              ) : (
                <>
                  <i className="bi bi-box-arrow-in-right"></i> Sign in
                </>
              )}
            </button>
          </form>
          
          <div className={styles.footer}>
            <a href="#" className={styles.forgotLink}>Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;