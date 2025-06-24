import React from 'react';
import anhBia from '../imgs/anhBia.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
import { useData } from '../security/DataProvider'



const DetailPhong = () => {
  const location = useLocation();
  const { Category, loading, error } = useData();


  const { room } = location.state || {}; // fallback để tránh lỗi nếu không có dữ liệu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [room]);

  console.log();
  return (
    <div className="relative w-full bg-cover bg-center">
      <div
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${anhBia})` }}
      >
        {/* Lớp phủ chỉ nửa dưới ảnh bìa */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#3f4c3f] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 py-24 ">
          <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-20 mb-40">
            {room?.name}
          </h1>

          <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 flex flex-col gap-10 bg-cBg">
            <div>
              <p className="text-base md:text-lg leading-relaxed text-cocGreen font-gotham font-semibold">
                Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi, thoáng đãng, nhà sàn Sol mang đến cho du khách những trải nghiệm gần gũi với thiên nhiên Mai Châu và văn hóa dân tộc Thái trắng. Mỗi giường đều có đầy đủ chăn ga gối và rèm che, đảm bảo sự riêng tư và thoải mái nhất trong thời gian lưu trú. Ngoài ra, khách còn được sử dụng miễn phí những tiện ích của resort như khu vui chơi, bể bơi và khu billiard, lounge ngoài trời…
              </p>
            </div>

            {/* Ảnh phòng nghỉ */}
            <div className="w-full space-y-4 sm:space-y-0 sm:space-x-0">
              {/* Container dành riêng cho mobile: 4 ảnh theo cột */}
              {Array.isArray(room?.detail?.images) && room.detail.images.length >= 4 ? (
                <div className="flex flex-col gap-4 sm:hidden">
                  {[
                    room.detail.images[3],
                    ...room.detail.images.filter((_, i) => i !== 3).slice(0, 3),
                  ].map((img, i) => (
                    <img
                      key={i}
                      src={typeof img === "string" ? img : img?.link}
                      alt={`ảnh phòng ${i + 1}`}
                      className="w-full h-52 object-cover rounded-xl"
                      onError={(e) => {
                        console.error("Image failed to load:", img);
                      }}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-red-500 sm:hidden">Không đủ ảnh để hiển thị trên mobile.</p>
              )}

              {/* Container dành cho desktop: 1 ảnh chính + 3 ảnh nhỏ */}
              {Array.isArray(room?.detail?.images) &&room?.detail?.images?.length >= 4 && (
                <div className="hidden sm:block">
                  <div className="w-full mb-4">
                    <img
                      src={room.detail.images[room.detail.images.length-1]}
                      alt="Phòng nghỉ"
                      className="rounded-xl w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {room.detail.images
                      // Chuẩn hóa về object { link }
                      .map((img) => {
                        if (typeof img === "string") return { link: img };
                        return img;
                      })
                      // Loại bỏ ảnh thứ 4 (index 3)
                      .filter((_, i) => i !== 3)
                      // Chỉ lấy 3 ảnh đầu
                      .slice(0, 3)
                      // Hiển thị ảnh
                      .map((img, i) => (
                        <img
                          key={i}
                          src={img.link}
                          alt={`Ảnh phụ ${i + 1}`}
                          className="rounded-lg w-full h-52 object-cover"
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>


            {/* Thông tin hướng dẫn */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen">Hướng dẫn check-in</h2>
                <p className="text-base font-gotham text-cocGreen font-semibold">
                  Khi đặt phòng trực tuyến hoặc qua email, quý khách được coi là đã đọc và chấp nhận các Điều khoản và Điều kiện của chúng tôi thay mặt cho tất cả những người trong nhóm.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen">Thanh toán</h2>
                <p className="text-base font-gotham text-cocGreen font-semibold">
                  Khi đặt phòng trực tuyến hoặc qua email, quý khách được coi là đã đọc và chấp nhận các Điều khoản và Điều kiện của chúng tôi thay mặt cho tất cả những người trong nhóm.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen">Chính sách trẻ nhỏ</h2>
                <p className="text-base font-gotham text-cocGreen font-semibold">
                  Miễn phí cho 2 trẻ em dưới 4 tuổi. <br />
                  Các bé từ 4 tuổi đến 11 tuổi, giá ở nhà sàn sẽ bằng 50% giá một người lớn.
                </p>
              </div>
              {/* Hủy phòng */}
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen">Hủy phòng</h2>
                <p className="text-base font-gotham text-cocGreen font-semibold mb-1">
                  Trả phòng sớm và Không nhận phòng:
                </p>
                <ul className="list-disc pl-6 text-base font-gotham text-cocGreen font-semibold space-y-1">
                  <li>Mọi trường hợp hủy phòng trong vòng 30-15 ngày tính đến ngày check-in sẽ phải chịu phí 50% trên tổng số tiền đặt phòng.</li>
                  <li>Mọi trường hợp hủy phòng trong vòng 15-07 ngày tính đến ngày check-in sẽ phải chịu phí 75% trên tổng số tiền đặt phòng.</li>
                  <li>Mọi trường hợp hủy trong vòng 7 ngày kể từ ngày đến; Không nhận phòng hoặc trả phòng sớm phải chịu 100% tổng số tiền đặt phòng.</li>
                </ul>
              </div>

              {/* Giá phòng */}
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen mt-6">Giá {room?.name}</h2>
                <p className="text-3xl font-bold font-grandma text-cocGreen mb-2">{new Intl.NumberFormat('vi-VN').format(room.price)} VND/Đêm</p>
                <ul className=" text-base font-gotham text-cocGreen font-semibold space-y-1">
                  <p>*** Giá trên đã bao gồm nước uống tiêu chuẩn theo ngày, bữa ăn sáng, thuế & phí phục vụ</p>
                  <p>*** Nhà sàn nằm trên phòng lễ tân gần cổng Sol và không có nhà vệ sinh khép kín</p>
                </ul>
              </div>

              {/* Liên hệ đặt phòng */}
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen mt-6">Liên hệ đặt phòng</h2>
                <p className="text-base font-gotham text-cocGreen font-semibold mb-4">
                  Nếu bạn đang tìm kiếm những khoảnh khắc mới mẻ và đáng nhớ, đừng ngần ngại liên hệ với chúng tôi để lên lịch trình trải nghiệm phù hợp nhất.
                </p>
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

              {/*Follow us */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <p className="text-base font-gotham text-cocGreen font-semibold">Follow Us</p>
                <img src={iconZalo} alt="zalo" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                <img src={iconFb} alt="facebook" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                <img src={iconIG} alt="instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
              </div>



            </div>
          </div>
        </div>
      </div>
      {/* Các loại phòng khác */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-cocGreen">
        {/* Tiêu đề */}
        <h2 className="text-4xl md:text-4xl font-utm-americana font-semibold mb-4">LOẠI PHÒNG LƯU TRÚ KHÁC</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Category?.map((room, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-xl group h-[420px]">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Overlay gradient when not hovered */}
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#091911]/100 to-transparent group-hover:opacity-0 transition duration-500 z-10" />
              <div className="absolute bottom-0 z-20 w-full px-6 pb-6 text-white">
                <h3 className="text-3xl font-bold font-utm-americana">{room.name}</h3>
                <p className="text-xl font-semibold mt-1 font-gotham">{new Intl.NumberFormat('vi-VN').format(room.price)} VND/Đêm</p>
                <p className="text-[12px] mt-3 line-clamp-3 font-gotham tracking-widest">
                  Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi, thoáng đãng, nhà sàn Cọ mang đến cho du khách những trải nghiệm gần gũi với thiên nhiên Mai Châu và văn hóa dân tộc Thái trắng.
                </p>
                <Link
                  to="/detail-phong"
                  state={{ room }}
                  className="group/button mt-6 w-full border border-white text-white py-2 rounded-full text-center font-medium hover:bg-white hover:text-cocGreen transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>Xem phòng</span>
                  <StarIcon className="transition duration-300 text-white group-hover/button:text-[#4B6052]" />
                </Link>




              </div>
            </div>
          ))}
        </div>
        {/*container tìm kiếm */}
        <div className="max-w-3xl w-full mx-auto px-4 py-2 bg-white rounded-full flex flex-wrap items-center justify-between gap-4 shadow-md mt-10 overflow-hidden">
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
  );
};

export default DetailPhong;
