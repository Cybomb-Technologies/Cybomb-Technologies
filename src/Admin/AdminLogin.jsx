import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Lock, Mail, Shield, Eye, EyeOff } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5002';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Login failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        login(data.user, data.token);
        navigate("/admin");
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      if (error.message.includes("Failed to fetch")) {
        setError(`Cannot connect to server. Please ensure the backend is running on ${API_BASE_URL}`);
      } else {
        setError(error.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient-primary">
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #00171f, #003459);
        }
        
        .login-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .login-header {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          margin: -1rem -1rem 2rem -1rem;
          border-radius: 20px 20px 20px 20px;
          padding: 3rem 2rem 2rem 2rem;
        }
        
        .form-control-custom {
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          transition: all 0.3s ease;
          background: #ffffff;
        }
        
        .form-control-custom:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }
        
        .btn-primary-custom {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: none;
          border-radius: 12px;
          padding: 14px 20px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .btn-primary-custom:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .btn-primary-custom:disabled {
          opacity: 0.7;
          transform: none;
        }
        
        .password-toggle {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        .password-toggle:hover {
          background: #f1f5f9;
          color: #3b82f6;
        }
        
        .status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        .connection-status {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="login-card p-4 w-100" style={{ maxWidth: "440px" }}>
        {/* Header */}
        <div className="login-header text-center text-white">
          <div className="d-flex justify-content-center mb-3">
            <div className="bg-black bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center"
                 style={{ width: '80px', height: '80px' }}>
              <Shield size={40} />
            </div>
          </div>
          <h2 className="fw-bold mb-2">Admin Portal</h2>
          <p className="opacity-90 mb-0">Sign in to access the dashboard</p>
        </div>

       

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="form-label fw-medium text-slate-700 mb-3">Email Address</label>
            <div className="position-relative">
              <Mail 
                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                size={20}
                color="#64748b"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control form-control-custom ps-5"
                placeholder="Enter your email address"
                disabled={loading}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="form-label fw-medium text-slate-700 mb-3">Password</label>
            <div className="position-relative">
              <Lock 
                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                size={20}
                color="#64748b"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control form-control-custom ps-5 pe-5"
                placeholder="Enter your password"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-warning border-0 rounded-12 mb-4 d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center"
                     style={{ width: '24px', height: '24px' }}>
                  <Shield size={14} className="text-white" />
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="fw-medium text-dark mb-1">Authentication Required</div>
                <div className="small text-muted">{error}</div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary-custom w-100 d-flex align-items-center justify-content-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner-border spinner-border-sm me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                Signing In...
              </>
            ) : (
              <>
                <Lock size={18} className="me-2" />
                Sign In to Dashboard
              </>
            )}
          </button>
        </form>

        {/* Footer Note */}
        <div className="text-center mt-4 pt-3 border-top">
          <p className="small text-muted mb-0">
            Secure access to Cybomb administrative dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;