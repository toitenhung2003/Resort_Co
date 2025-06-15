import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './assets/fonts.css';

import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GioiThieu from './pages/GioiThieu';
import LoaiPhong from './pages/LoaiPhong';
import Footer from './components/Footer';
import DetailPhong from './pages/DetailPhong';
import ComboPackage from './pages/ComboPackage';
import DetailComboPackage from './pages/DetailComboPackage';
import ScrollToTop from './components/ScrollToTop';
import HinhAnh from './pages/HinhAnh';
import LienHe from './pages/LienHe';
import AmThuc from './pages/AmThuc';

// ✅ Component này nằm BÊN TRONG <Router>
function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <NavBar />}
      <ScrollToTop />
      <div className="pt-0">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/loai-phong" element={<LoaiPhong />} />
          <Route path="/detail-phong" element={<DetailPhong />} />
          <Route path="/am-thuc" element={<AmThuc />} />
          <Route path="/combopackage" element={<ComboPackage />} />
          <Route path="/detail-combopackage" element={<DetailComboPackage />} />
          <Route path="/hinh-anh" element={<HinhAnh />} />
          <Route path="/lien-he" element={<LienHe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
