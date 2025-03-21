import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import EmployeeTable from "./pages/Tables/EmployeeTable";
import FormElements from "./pages/Forms/FormElements";
import CustomerRoute from "./pages/customers/CustomerRoute";
import MyProfile from "./pages/MyAccount/Profile";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import { ToastContainer } from "react-toastify";
import PrivateAuthRoute from "./util/PrivateAuthRoute";
import { AuthProvider } from "./context/AuthContext";
import Support from "./pages/Support";
import Unauthorized from "./pages/UnAuthorized";
import ForgotPassword from "./pages/AuthPages/ResetPassword";
// import Hero from "./pages/customers/Home";

export default function App() {
  // console.log("Rendering App component...");

  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<CustomerRoute />} />
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/support" element={<Support />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Forms */}
          <Route path="/admin/form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="/admin/customers-table" element={<BasicTables />} />
          <Route path="/admin/employees-table" element={<EmployeeTable />} />

          {/* UI Elements */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />

          {/* Charts */}
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
          {/* Dashboard Layout */}
          {/* Public Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/my profile"
            element={
              <PrivateAuthRoute roles={[1, 2]}>
                <MyProfile />
              </PrivateAuthRoute>
            }
          />
          {/* Private Routes Based on Roles */}
          <Route element={<AppLayout />}>
            <Route
              path="/admin"
              element={
                <PrivateAuthRoute roles={[3]}>
                  <Home />
                </PrivateAuthRoute>
              }
            />
          </Route>

          {/* Customer Routes */}
          {/* <Route path="/customer/*" element={<CustomerRoute />} /> */}

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </AuthProvider>{" "}
    </Router>
  );
}
