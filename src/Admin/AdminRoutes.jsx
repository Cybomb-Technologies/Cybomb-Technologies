import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login/login";
import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = (
  <>
    <Route path="/admin/login" element={<Login />} />
    <Route
      path="/admin/*"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </>
);

export default AdminRoutes;
