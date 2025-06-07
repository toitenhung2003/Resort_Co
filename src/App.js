import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GioiThieu from './pages/GioiThieu';
import LoaiPhong from './pages/LoaiPhong';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <div className="pt-16"> {/* Để không bị che bởi navbar fixed */}
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<Contact />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/loai-phong" element={<LoaiPhong />} />


      </Routes>
      </div>
      
    </Router>
  );
}

export default App;

