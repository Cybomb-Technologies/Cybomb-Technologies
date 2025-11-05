import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5002';

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@cybomb.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error(`Server responded with ${response.status}`);

      const data = await response.json();

      if (data.success) {
        login(data.user, data.token);
        navigate("/admin");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError(`Cannot connect to backend server. Make sure it's running on ${API_BASE_URL}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white shadow rounded p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Admin Login</h2>

        <div className="alert alert-warning small">
          <strong>Backend URL:</strong> {API_BASE_URL}<br />
          <strong>Status:</strong> {error ? "❌ Not connected" : "🔌 Make sure backend is running"}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>

          {error && (
            <div className="alert alert-danger text-center">
              <strong>Connection Error:</strong><br />
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
