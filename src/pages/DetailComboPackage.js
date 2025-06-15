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

const DetailComboPackage = () => {
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
  ];

  return (
    <div className="relative w-full bg-cover bg-center">
      <div
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${anhBia})`, backgroundSize: 'center', imageRendering: 'auto' }}
      >
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#3f4c3f] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-20 mb-40">
            Trải nghiệm chèo SUP trên suối Phai Làu
          </h1>

          <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 bg-cBg">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Cột trái */}
              <div className="flex-[5] min-w-0">
                <h2 className="text-2xl md:text-3xl font-semibold text-cocGreen mb-4 font-utm-americana">
                  Trải nghiệm chèo SUP trên suối Phai Lầu
                </h2>
                <p className="text-base text-cocGreen mb-6 leading-relaxed font-gotham font-semibold">
                  Chèo SUP là môn thể thao dưới nước khá mới mẻ ở Việt Nam nhưng đang dần được nhiều bạn trẻ biết đến và ưa chuộng. Bộ môn này là một sự lựa chọn tuyệt vời cho các hoạt động team building, du lịch cùng hội nhóm, bè bạn… Ở các thành phố lớn, giới trẻ tìm đến hoạt động chèo SUP ở những địa điểm quen thuộc như hồ Tây, hồ Đồng Đò (Hà Nội), vịnh Lan Hạ (Hải Phòng); hồ Ba Bể, sông Năng (Bắc Kạn); sông Sài Gòn (TP. Hồ Chí Minh)…Tuy nhiên, nếu đã nhàm chán với những địa điểm quen thuộc đó thì tại sao không thử đến với dòng suối Phai Làu (xã Chiềng Châu, huyện Mai Châu, Hòa Bình) để trải nghiệm một cảm giác khác lạ hơn !
                </p>
                <img src={imgF4} alt="SUP ở Phai Lầu" className="rounded-2xl w-full mb-6" />
                <h2 className="text-2xl md:text-3xl font-semibold text-cocGreen mb-4 font-utm-americana">
                  Suối Phai Làu- địa điểm trải nghiệm lý tưởng cho hoạt động SUP khi đến Mai Châu
                </h2>
                <p className="text-base text-cocGreen mb-6 leading-relaxed font-gotham font-semibold">
                  Cách Sol Bungalows Resort khoảng 200m đi bộ, suối Phai Làu chảy qua các bản làng trong thung lũng Chiềng Châu thơ mộng. Kề bên những dãy núi cao và ruộng lúa chín vàng, Phai Làu như một tấm lụa nhẹ nhàng, uốn lượn giữa cảnh quan hùng vĩ. Khác với những địa điểm chèo SUP quen thuộc khác, suối Phai Làu vừa có thể đáp ứng mọi yêu cầu khác nhau của các tay chèo, vừa đem lại cảm giác mới lạ, thú vị không lẫn vào đâu được. Sở hữu một dòng chảy tự nhiên, được cung cấp từ nước nguồn trong các khe núi, thác nước, suối Phai Làu trong xanh là một món quà quý giá mẹ thiên nhiên đã ban tặng cho Mai Châu.
                </p>
                <img src={imgF4} alt="SUP ở Phai Lầu" className="rounded-2xl w-full mb-6" />
                <h2 className="text-2xl md:text-3xl font-semibold text-cocGreen mb-4 font-utm-americana">
                  Suối Phai Làu- địa điểm trải nghiệm lý tưởng cho hoạt động SUP khi đến Mai Châu
                </h2>
                <p className="text-base text-cocGreen mb-6 leading-relaxed font-gotham font-semibold">
                  Cách Sol Bungalows Resort khoảng 200m đi bộ, suối Phai Làu chảy qua các bản làng trong thung lũng Chiềng Châu thơ mộng. Kề bên những dãy núi cao và ruộng lúa chín vàng, Phai Làu như một tấm lụa nhẹ nhàng, uốn lượn giữa cảnh quan hùng vĩ. Khác với những địa điểm chèo SUP quen thuộc khác, suối Phai Làu vừa có thể đáp ứng mọi yêu cầu khác nhau của các tay chèo, vừa đem lại cảm giác mới lạ, thú vị không lẫn vào đâu được. Sở hữu một dòng chảy tự nhiên, được cung cấp từ nước nguồn trong các khe núi, thác nước, suối Phai Làu trong xanh là một món quà quý giá mẹ thiên nhiên đã ban tặng cho Mai Châu.
                </p>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen mt-6">Liên hệ đặt Combo</h2>

                  <div className="text-base font-gotham text-cocGreen font-semibold space-y-2">
                    <div className="flex items-center gap-2">
                      <img src={iconMail} alt="email icon" className="w-5 h-5" />
                      <p>coretreatdabac@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={iconPhone} alt="phone icon" className="w-5 h-5" />
                      <p>0866 001 900</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={iconMark} alt="location icon" className="w-5 h-5" />
                      <p>Xóm Tằm, Xã Trung Thành, Đà Bắc, Hòa Bình</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Đường ngăn cách */}
              <div className="w-px bg-gray-300 hidden lg:block" />

              {/* Cột phải */}
              <div className="flex-[2] min-w-0 max-w-[240px]">
                <h4 className="text-xl font-grandma font-semibold text-cocGreen mb-4">Khám phá các Package khác</h4>
                <div className='flex flex-col items-center sm:items-center'>
                  {[1, 2, 3, 4].map((_, idx) => (
                    <div key={idx} className="bg-white rounded-[24px] shadow-md mb-4 overflow-hidden">
                      <img src={imgF4} alt="package" className="h-28 w-full object-cover" />
                      <div className="p-4">
                        <p className="text-sm font-gotham text-cocGreen mb-2 font-semibold">
                          TRẢI NGHIỆM CHÈO SUP TRÊN 
                          SUỐI PHAI LÀU
                        </p>
                        <div className="flex justify-center mt-2">
                          <Link
                            to="/combo"
                            className="group w-full max-w-[95%] text-sm font-medium text-cocGreen hover:text-white bg-gray-100 px-4 py-2 rounded-full border border-cocGreen hover:bg-cocGreen transition flex items-center justify-center gap-2"
                          >
                            Xem chi tiết Combo
                            <StarIcon className="transition duration-300 text-cocGreen group-hover:text-white" />
                          </Link>


                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Follow Us */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <p className="text-base font-gotham text-cocGreen font-semibold">Follow Us</p>
              <img src={iconZalo} alt="zalo" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
              <img src={iconFb} alt="facebook" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
              <img src={iconIG} alt="instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
            </div>

            {/* Tìm kiếm */}
            <div className="max-w-3xl w-full mx-auto mt-6 px-4 py-2 bg-white rounded-full flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 text-cocGreen text-sm whitespace-nowrap">
                <img src={Icmark} alt="marker" className="w-4 h-4" />
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
                  <img src={rectangle} alt="search background" className="w-full h-full object-cover rounded-full" />
                  <img src={Icsearch} alt="search icon" className="absolute inset-0 m-auto w-4 h-4 hover:scale-110" />
                </button>
              </div>

              <div className="block sm:hidden w-full flex justify-center items-center gap-2 mt-2 text-cocGreen text-sm font-medium">
                <Link to='/hinh-anh'>Hình ảnh các hoạt động</Link>
                <button className="relative w-9 h-9 flex-shrink-0">
                  <img src={rectangle} alt="search background" className="w-full h-full object-cover rounded-full" />
                  <img src={Icsearch} alt="search icon" className="absolute inset-0 m-auto w-4 h-4 hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComboPackage;
