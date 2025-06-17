import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './assets/fonts.css';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GioiThieu from './pages/GioiThieu';
import LoaiPhong from './pages/LoaiPhong';
import DetailPhong from './pages/DetailPhong';
import ComboPackage from './pages/ComboPackage';
import DetailComboPackage from './pages/DetailComboPackage';
import HinhAnh from './pages/HinhAnh';
import LienHe from './pages/LienHe';
import AmThuc from './pages/AmThuc';

import Admin from './pages/Admin';
import LoginAdmin from './pages/LoginAdmin';
import Room from './pages/AdminRoom';
import Food from './pages/AdminFood';
import Setting from './pages/AdminSetting';
import OtpVerification from './pages/AdminOTP';
import ChangePassword from './pages/AdminResetPass';

import ProtectedRoute from './security/ProtectedRoute';
import { PasswordResetProvider } from './security/PasswordResetContext';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAdmin = location.pathname.startsWith('/home-admin'); // ✅ check đúng cả trang con

  return (
    <>
      {!isHome && !isAdmin && <NavBar />}

      <ScrollToTop />

      <div className="pt-0">
        <Routes>
          {/* Public Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gioi-thieu' element={<GioiThieu />} />
          <Route path='/loai-phong' element={<LoaiPhong />} />
          <Route path='/detail-phong' element={<DetailPhong />} />
          <Route path='/am-thuc' element={<AmThuc />} />
          <Route path='/combopackage' element={<ComboPackage />} />
          <Route path='/detail-combopackage' element={<DetailComboPackage />} />
          <Route path='/hinh-anh' element={<HinhAnh />} />
          <Route path='/lien-he' element={<LienHe />} />

          {/* Auth Pages */}
          <Route path='/admin' element={<LoginAdmin />} />
          <Route path='/send-otp' element={<OtpVerification />} />
          <Route path='/reset-password' element={<ChangePassword />} />

          {/* Admin Pages */}
          <Route
            path='/home-admin/*'
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="admin-room" replace />} />
            <Route path='admin-room' element={<Room />} />
            <Route path='admin-food' element={<Food />} />
            <Route path='admin-settings' element={<Setting />} />
          </Route>

          {/* Fallback */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>

      { !isAdmin && <Footer />}
    </>
  );
}


function App() {
  return (
    <PasswordResetProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <AppLayout />
      </Router>
    </PasswordResetProvider>
  );
}

export default App;
