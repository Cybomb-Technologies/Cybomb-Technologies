import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check JWT
  return token ? children : <Navigate to="/admin/login" />; // redirect if no token
};

export default ProtectedRoute;
