import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQS from "./Pages/FAQS";
import ContactSection from "./Pages/Contact";
import Events from "./Pages/Events";
import Donate from "./Pages/Donateus";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterBeneficiary from './Pages/RegisterBeneficiary';
import RegistrationSuccess from './Pages/RegistrationSuccess';
import LoginOptions from "./Pages/LoginPage";
import VolunteerRegister from "./Pages/VolunteerRegister";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ApproveVolunteers from "./Pages/ApproveVolunteers";
import ScheduleEvents from "./Pages/ScheduleEvents";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Aboutus", element: <About /> },
      { path: "/Contactus", element: <ContactSection /> },
      { path: "/FAQS", element: <FAQS /> },
      { path: "/Events", element: <Events /> },
      { path: "/Donateus", element: <Donate /> },
      {path: "/register-user", element: <RegisterBeneficiary />},
      {path: "/registration-success", element: <RegistrationSuccess />},
      {path: "/login-options", element: <LoginOptions />},
      {path: "/volunteer-register", element: <VolunteerRegister />},
      {path: "/admin-dashboard/approve-volunteers", element: <ApproveVolunteers />},
      {path: "/admin-dashboard/schedule-events", element: <ScheduleEvents />},
      {path: "/admin-login", element: <AdminLogin />},
      {path: "/admin-dashboard", element: (
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      )},

    ],
  },
]);

const App = () => {
  return <RouterProvider router={approuter} />;
};

export default App;
