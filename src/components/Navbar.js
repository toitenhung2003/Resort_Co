import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import iconW from '../imgs/iconW.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Trang Chủ', 'Giới Thiệu', 'Loại Phòng', 'Ẩm Thực', 'Combo Package', 'Hình Ảnh'];

  return (
    <nav className="bg-black/0 backdrop-blur-md text-white transition-colors duration-300 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="h-10 w-auto"
              src={iconW}
              alt="Co Retreat"
            />
            
          </div>

          {/* Desktop Trang chủ */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/" className="hover:underline underline-offset-4 transition-all">
              Trang Chủ
            </Link>
          </div>
          {/* Desktop Giới Thiệu */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/gioi-thieu" className="hover:underline underline-offset-4 transition-all">
              Giới Thiệu
            </Link>
          </div>
          {/* Desktop Loại Phòng */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/loai-phong" className="hover:underline underline-offset-4 transition-all">
              Loại Phòng
            </Link>
          </div>
          {/* Desktop Ẩm Thực */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/am-thuc" className="hover:underline underline-offset-4 transition-all">
              Ẩm Thực
            </Link>
          </div>
          {/* Desktop Combo Package */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/combopackage" className="hover:underline underline-offset-4 transition-all">
              Combo Package
            </Link>
          </div>
          {/* Desktop Hình Ảnh */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/hinh-anh" className="hover:underline underline-offset-4 transition-all">
              Hình Ảnh
            </Link>
          </div>

          {/* Contact (Desktop) */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <Phone size={16} />
            <Link to="/lien-he" className='hover:underline underline-offset-4 transition-all'>Liên Hệ</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 text-white px-4 py-4 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-sm hover:underline underline-offset-4"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-2 text-sm pt-4 border-t border-gray-700">
            <Phone size={16} />
            <span>Liên Hệ</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
