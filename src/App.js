import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProtectedRoute from "../src/security/ProtectedRoute";
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GioiThieu from './pages/GioiThieu';
import LoaiPhong from './pages/LoaiPhong';
import Admin from './pages/Admin';
import LoginAdmin from './pages/LoginAdmin';
import Room from './pages/AdminRoom';
import Food from './pages/AdminFood';
import Setting from './pages/AdminSetting';
import OtpVerification from './pages/AdminOTP';
import ChangePassword from './pages/AdminResetPass';
import { PasswordResetProvider } from "../src/security/PasswordResetContext";

function App() {
  return (
    <PasswordResetProvider>
      <Router>
        {/* Toast notification container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

        {/* <NavBar /> */}
        <div className="pt-16"> {/* Để không bị che bởi navbar fixed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gioi-thieu" element={<GioiThieu />} />
            <Route path="/loai-phong" element={<LoaiPhong />} />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/send-otp" element={<OtpVerification />} />
            <Route path="/reset-password" element={<ChangePassword />} />

            <Route
              path="/home-admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="admin-room" replace />} />
              <Route path="admin-room" element={<Room />} />
              <Route path="admin-food" element={<Food />} />
              <Route path="admin-settings" element={<Setting />} />
            </Route>

            {/* Redirect all unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </PasswordResetProvider>

  );
}

export default App;
