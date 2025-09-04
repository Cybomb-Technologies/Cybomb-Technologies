import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login/login";
import ProtectedRoute from "./ProtectedRoute";
import AdminHome from "./pages/Home";
import FormSubmission from "./pages/Form-submission/Form-submission";

const AdminRoutes = (
  <>
    {/* Login page */}
    <Route path="/admin/login" element={<Login />} />

    {/* Dashboard layout with nested admin pages */}
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <Dashboard /> {/* Sidebar always shows */}
        </ProtectedRoute>
      }
    >
      {/* Nested pages inside Dashboard */}
      <Route index element={<AdminHome />} />        {/* /admin */}
      <Route path="home" element={<AdminHome />} />
      <Route path="form-submission" element={<FormSubmission/>} />
        {/* /admin/home */}
    </Route>
  </>
);

export default AdminRoutes;
