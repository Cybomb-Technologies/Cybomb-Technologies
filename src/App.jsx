import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./component/ScrollToTop";
import Nav1 from "./component/nav1/nav1";
import Footer1 from "./component/footer/footer1";
import emp1Routes from "./Emp/emp-1";
import emp2Routes from "./Emp/emp-2";
import emp3Routes from "./Emp/emp-3";
import emp4Routes from "./Emp/emp-4";
import emp5Routes from "./Emp/emp-5";
import AdminRoutes from "./Admin/AdminRoutes";
import { AuthProvider } from "./context/AuthContext";
import PopupForm from "./component/popup-form/popup-form"
function Layout({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin"); 

  return (
    <>
      {!isAdmin &&<PopupForm/>}
      {!isAdmin && <Nav1 />}   {/* Only show Nav if NOT admin */}
      {children}
      {!isAdmin && <Footer1 />} {/* Only show Footer if NOT admin */}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            {emp1Routes}
            {emp2Routes}
            {emp3Routes}
            {emp4Routes}
            {emp5Routes}
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;