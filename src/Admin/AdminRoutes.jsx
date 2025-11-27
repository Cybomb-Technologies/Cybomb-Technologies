// Admin/AdminRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

/** Redirects authenticated users away from /admin/login */
const RedirectIfAuthed = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : children;
};

/** Protected route wrapper */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Public login (but bounce if already authed) */}
      <Route
        path="/login"
        element={
          <RedirectIfAuthed>
            <AdminLogin />
          </RedirectIfAuthed>
        }
      />

      {/* Protected admin routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      
      {/* Redirect /admin to /admin/dashboard */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      
      {/* Redirect any other admin routes to dashboard */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
};

export default AdminRoutes;