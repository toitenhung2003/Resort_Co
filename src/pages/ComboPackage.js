import React from 'react';
import anhBia from '../imgs/anhBia.png';


import imgMain from '../imgs/imgF4.png';
import imgD1 from '../imgs/imgD1.png';
import imgD2 from '../imgs/imgD2.png';
import imgD3 from '../imgs/imgD3.png';
import iconMark from '../imgs/Mark.png';
import iconMail from '../imgs/Email.png';
import iconPhone from '../imgs/Phone.png';
import iconFb from '../imgs/Facebook.png';
import iconZalo from '../imgs/Zalo.png';
import iconIG from '../imgs/Instagram.png';
import imgF4 from "../imgs/imgF4.png";
import StarIcon from '../components/StarIcon';
import { Link } from 'react-router-dom';

import Icmark from "../imgs/Mark.png";
import rectangle from "../imgs/rectangle.png";
import Icsearch from "../imgs/Icsearch.png";
import supImage from '../imgs/imgD2.png';

const ComboPackage
  = () => {
    const roomList = [
      {
        name: "Deluxe Double Room",
        price: "2.000.000 VND/Đêm",
      },
      {
        name: "Deluxe Twin Room",
        price: "2.400.000 VND/Đêm",
      },
      {
        name: "Nature Retreat Stilt House",
        price: "2.000.000 VND/Đêm",
      },
      {
        name: "Glamping Suite",
        price: "3.600.000 VND/Đêm",
      },
      {
        name: "Glamping Suite",
        price: "3.600.000 VND/Đêm",
      },
      {
        name: "Glamping Suite",
        price: "3.600.000 VND/Đêm",
      },
    ];
    const SUPCard = () => {
      return (
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden mb-8 w-full mx-auto">
          <img src={supImage} alt="SUP Experience" className="w-full h-72 object-cover" style={{ imageRendering: 'auto', backgroundSize: 'center', }} />
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e2c] mb-4 font-utm-americana">
              Trải nghiệm chèo SUP trên suối Phai Lầu
            </h2>
            <p className="text-base md:text-lg text-cocGreen mb-6 leading-relaxed font-gotham font-semibold">
              Nếu đã nhàm chán với những địa điểm chèo SUP quen thuộc thì tại sao không thử đến với dòng suối Phai Lầu
              (xã Chiềng Châu, huyện Mai Châu, Hòa Bình) để trải nghiệm một cảm giác khác lạ hơn!
              Chèo SUP là môn thể thao dưới nước khá mới mẻ ở Việt Nam […]
            </p>
            <Link
              to="/detail-combopackage"
              className="group/button inline-flex items-center gap-2 px-6 py-3 text-base text-[#2c3e2c] bg-[#f4f4f4] rounded-full shadow-sm hover:bg-cocGreen hover:text-white border border-[#4B6052] transition">
              <span className='text-cocGreen group-hover/button:text-white'>Xem chi tiết Combo</span>
              <StarIcon className="w-5 h-5 text-[#4B6052] group-hover/button:text-white" />
            </Link>
          </div>

        </div>
      );
    };

    return (
      <div className="relative w-full bg-cover bg-center">
        <div
          className="relative bg-center bg-no-repeat bg-cover text-white"
          style={{ backgroundImage: `url(${anhBia})` }}
        >
          {/* Lớp phủ đen + gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#2E463D]/100" />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 py-24 ">
            <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-20 mb-40">
              COMBO PACKAGE
            </h1>

            <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 flex flex-col gap-10 bg-cBg">

              <div className="p-4 w-full mx-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SUPCard key={index} />
                ))}
              </div>
              {/*container tìm kiếm */}
              <div className="max-w-3xl w-full mx-auto px-4 py-2 bg-white rounded-full flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 text-cocGreen text-sm whitespace-nowrap">
                  <img src={Icmark} alt="marker" className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                  <span>Vị trí Cọ Retreat:</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="ml-2 bg-gray-100 px-3 py-1 rounded-lg text-gray-800 font-semibold text-sm hover:bg-gray-200 flex items-center gap-1"
                  >
                    <img
                      src="https://www.gstatic.com/images/icons/material/system/2x/maps_gm_blue_24dp.png"
                      alt="Google Maps"
                      className="w-4 h-4"
                    />
                    Google Maps
                  </a>
                </div>

                <div className="w-px h-6 bg-gray-300 hidden sm:block" />

                <div className="hidden sm:flex items-center gap-4 text-cocGreen text-sm font-medium">
                   <div>
                                    <Link to='/hinh-anh'>Hình ảnh các hoạt động</Link>
                                  </div>
                  <button className="relative w-9 h-9 flex-shrink-0">
                    <img
                      src={rectangle}
                      alt="search background"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <img
                      src={Icsearch}
                      alt="search icon"
                      className="absolute inset-0 m-auto w-4 h-4 transition-transform duration-300 hover:scale-110"
                    />
                  </button>
                </div>

                <div className="block sm:hidden w-full flex justify-center items-center gap-2 mt-2 text-cocGreen text-sm font-medium">
                  <Link to='/hinh-anh'>Hình ảnh các hoạt động</Link>
                  <button className="relative w-9 h-9 flex-shrink-0">
                    <img
                      src={rectangle}
                      alt="search background"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <img
                      src={Icsearch}
                      alt="search icon"
                      className="absolute inset-0 m-auto w-4 h-4 transition-transform duration-300 hover:scale-110"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };

export default ComboPackage
  ;
