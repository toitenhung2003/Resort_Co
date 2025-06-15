import React from 'react';
import anhBia from '../imgs/anhBia.png';

import Icmark from "../imgs/Mark.png";
import rectangle from "../imgs/rectangle.png";
import Icsearch from "../imgs/Icsearch.png";
import imgF4 from "../imgs/imgF4.png";
import StarIcon from '../components/StarIcon';
import { Link } from 'react-router-dom';

const LoaiPhong = () => {
  const roomList = [
    { name: "Deluxe Double Room", price: "2.000.000 VND/Đêm" },
    { name: "Deluxe Twin Room", price: "2.400.000 VND/Đêm" },
    { name: "Nature Retreat Stilt House", price: "2.000.000 VND/Đêm" },
    { name: "Glamping Suite", price: "3.600.000 VND/Đêm" },
    { name: "Glamping Suite", price: "3.600.000 VND/Đêm" },
    { name: "Glamping Suite", price: "3.600.000 VND/Đêm" },
  ];

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${anhBia})` }}
      >
        {/* Lớp phủ toàn ảnh: gradient + lớp mờ */}
        <div className="absolute inset-0 bg-black/40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#42554B]/90" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-20 mb-40 text-white">
            LOẠI PHÒNG LƯU TRÚ
          </h1>

          <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 flex flex-col gap-10">
            <div>
              <p className="text-base md:text-lg leading-relaxed text-cocGreen font-gotham font-semibold">
                Cọ Retreat Đà Bắc mang đến 21 phòng nghỉ đa dạng từ tiêu chuẩn đến sang trọng, được thiết kế để đáp ứng mọi nhu cầu của khách.
                Mỗi phòng đều được chăm chút với nội thất gỗ mộc mạc hòa quyện cùng các họa tiết đặc trưng của văn hóa Thái – Mường,
                tạo nên không gian vừa ấm cúng vừa đậm đà bản sắc địa phương.
                Từ ban công, du khách có thể tận hưởng tầm nhìn bao quát ra những cánh đồng lúa xanh mướt và những ngọn núi hùng vĩ,
                giúp tâm hồn thư thái và kết nối sâu sắc với thiên nhiên.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roomList.map((room, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-xl group h-[420px]">
                  <img
                    src={imgF4}
                    alt={room.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#091911]/100 to-transparent group-hover:opacity-0 transition duration-500 z-10" />
                  <div className="absolute bottom-0 z-20 w-full px-6 pb-6 text-white">
                    <h3 className="text-3xl font-bold font-utm-americana">{room.name}</h3>
                    <p className="text-xl font-semibold mt-1 font-gotham">{room.price}</p>
                    <p className="text-[12px] mt-3 line-clamp-3 font-gotham tracking-widest">
                      Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi, thoáng đãng, nhà sàn Cọ mang đến cho du khách những trải nghiệm gần gũi với thiên nhiên Mai Châu và văn hóa dân tộc Thái trắng.
                    </p>
                    <Link
                      to="/detail-phong"
                      className="group/button mt-6 w-full border border-white text-white py-2 rounded-full text-center font-medium hover:bg-white hover:text-cocGreen transition duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Xem phòng</span>
                      <StarIcon className="transition duration-300 text-white group-hover/button:text-[#4B6052]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl w-full mx-auto px-4 py-3 bg-white rounded-full flex flex-wrap items-center justify-between gap-4 shadow-md mt-10 overflow-hidden">
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

export default LoaiPhong;
