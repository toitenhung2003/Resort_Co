import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import anhBia from '../imgs/anhBia.png';
import anhBia2 from '../imgs/anhBia2.png';
import anhBia3 from '../imgs/anhBia3.png';
import imgH1 from '../imgs/imgH1.png';
import iconPlay from '../imgs/iconPlay.png';
import imgF4 from "../imgs/imgF4.png";
import iconMark from '../imgs/Mark.png';

import StarIcon from '../components/StarIcon';
import iconFbH from '../imgs/Facebook.png';
import iconZaloH from '../imgs/Zalo.png';
import iconIGH from '../imgs/Instagram.png';
import iconFb from '../imgs/iconFBH.png';
import iconZalo from '../imgs/iconZaloH.png';
import iconIG from '../imgs/iconIGH.png';
import { Link } from 'react-router-dom';
import iconH1 from '../imgs/iconH1.png';
import iconH2 from '../imgs/iconH2.png';
import iconH3 from '../imgs/iconH3.png';
import iconH4 from '../imgs/iconH4.png';
import iconMail from '../imgs/Email.png';
import iconPhone from '../imgs/Phone.png';
import imgH2 from '../imgs/imgH2.png';
import imgH3 from '../imgs/imgH3.png';
import imgH4 from '../imgs/imgH4.png';
import {useData} from '../security/DataProvider'
const slides = [
  {
    image: anhBia,
    title: 'MUÔN NẺO QUANH CO...',
    subtitle: 'TÌM VỀ VỚI CỌ',
    description:
      'Ẩn mình trong rừng cọ nguyên sinh hàng trăm năm tuổi tại Hòa Bình, Cọ Retreat Đà Bắc là nơi để bạn cảm nhận thiên nhiên và thật sự kết nối với chính mình.',
  },
  {
    image: anhBia2,
    title: 'KHÁM PHÁ ĐẠI NGÀN',
    subtitle: 'SỐNG CHẬM GIỮA NÚI RỪNG',
    description:
      'Tổ hợp nghỉ dưỡng giữa rừng cọ Hòa Bình, nơi bạn retreat, cắm trại, trekking và sống chậm giữa thiên nhiên.',
  },
  {
    image: anhBia3,
    title: '“CỌ XÒE Ô CHE NẮNG,',
    subtitle: 'RÂM MÁT ĐƯƠNG EM ĐI.I.I..I.....I........”',
    description:
      'Một hành trình tĩnh lặng, nơi bạn cảm nhận từng hơi thở của thiên nhiên và những phút giây an yên giữa đại ngàn.',
  },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const { Category, loading, error } = useData();

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
    
  }, [current]);
  useEffect(() => {
    console.log("data ",Category);
  }, []);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Nếu là slide đầu tiên thì render luôn ảnh 1 không hiệu ứng */}
        {prev === null ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#42554B]/90" />
          </div>
        ) : (
          <>
            {/* Ảnh cũ trượt đi */}
            {prevSlide && (
              <motion.div
                key={`prev-${prev}`}
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${prevSlide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#42554B]/90" />
              </motion.div>
            )}
            {/* Ảnh mới trượt vào */}
            <motion.div
              key={`current-${current}`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#42554B]/90" />
            </motion.div>
          </>
        )}

        {/* Nội dung chữ */}
        <div className="relative z-20 flex flex-col justify-center h-full max-w-4xl px-4 sm:px-6 md:px-12 text-white">
          <motion.div
            key={`text-${current}`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-xl md:text-[44px] font-medium tracking-widest uppercase mb-2 font-utm-americana">
              {slide.title}
            </h2>
            <h1 className="text-3xl md:text-[56px] font-semibold uppercase leading-tight mb-4 font-utm-americana whitespace-normal md:whitespace-nowrap">
              {slide.subtitle}
            </h1>
            <p className="text-2xl leading-[32px] max-w-xl mb-6 font-grandma font-medium">
              {slide.description}
            </p>
            <Link
              to="/gioi-thieu"
              className="group/button w-[180px] inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-white border border-white bg-transparent rounded-full hover:bg-white hover:text-cocGreen transition"
            >
              <StarIcon className="w-4 h-4 text-white group-hover/button:text-cocGreen" />
              <span className="font-gotham font-semibold">Xem Giới Thiệu</span>
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            key={`social-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center gap-4 sm:gap-6 mt-6 flex-wrap"
          >
            <p className="text-base font-gotham text-[#B0B89C] font-semibold">Follow Us</p>
            <img src={iconZalo} alt="zalo" className="w-6 h-6 hover:scale-125 transition-transform duration-300" />
            <img src={iconFb} alt="facebook" className="w-6 h-6 hover:scale-125 transition-transform duration-300" />
            <img src={iconIG} alt="instagram" className="w-6 h-6 hover:scale-125 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-white flex justify-center items-center">
        <div className="relative max-w-[1120px] w-full flex flex-col md:flex-row items-center gap-8 px-4">

          {/* Ảnh bên trái */}
          <div className="relative z-10 flex-shrink-0">
            <img
              src={imgH1}
              alt="Giới thiệu"
              className="rounded-2xl h-[300px] md:h-[520px] w-full md:w-[354px] object-cover"
            />
          </div>

          {/* Nội dung bên phải */}
          <div className="relative z-20 md:-translate-x-20 bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-8 md:pl-12 w-full md:w-[670px] md:h-[376px]">
            <h2 className="text-xl md:text-3xl font-utm-americana font-bold text-cocGreen leading-tight mb-4 uppercase">
              Cọ XÒE Ô CHE NẮNG,<br />RÂM MÁT ĐƯỜNG EM ĐI.I.I…
            </h2>
            <p className="text-cocGreen text-[18px] md:text-[22px] leading-relaxed mb-4 font-grandma font-semibold">
              Tổ hợp nghỉ dưỡng giữa rừng cọ Hòa Bình, nơi bạn retreat, cắm trại,
              trekking và sống chậm giữa thiên nhiên.
            </p>
            <p className="text-cocGreen text-base md:text-[18px] leading-relaxed mb-6 font-gotham font-semibold">
              Cọ Retreat tái hiện tinh thần văn hóa Mường – Thái qua kiến trúc nhà sàn, món ăn bản địa và không gian giữa rừng cọ – nơi bạn tìm lại sự cân bằng giữa thiên nhiên và hiện đại
            </p>

            <Link to='/gioi-thieu' className="inline-flex items-center gap-2 px-6 py-3 text-sm text-cocGreen border border-cocGreen rounded-full hover:bg-[#2c3e2c] hover:text-white transition">
              <span className="font-semibold font-gotham">KHÁM PHÁ NGAY</span>
              <img src={iconPlay} alt="Play Icon" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/*Giới thiệu loại phòng */}
      <div className="py-20 bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10">

          {/* Cột trái - Tiêu đề */}
          <div className="w-full md:w-1/3">
            <h2 className="text-cocGreen text-[24px] md:text-[44px] leading-tight font-utm-americana font-bold uppercase">
              LOẠI PHÒNG<br />LƯU TRÚ
            </h2>
          </div>

          {/* Cột phải - Nội dung mô tả */}
          <div className="w-full md:w-2/3">
            <p className="text-cocGreen font-semibold text-base md:text-lg font-gotham leading-relaxed text-justify">
              Cọ Retreat Đà Bắc mang đến 21 phòng nghỉ đa dạng từ tiêu chuẩn đến sang trọng, được thiết kế để đáp ứng mọi nhu cầu của khách. Mỗi phòng đều được chăm chút với nội thất gỗ mộc mạc hòa quyện cùng các họa tiết đặc trưng của văn hóa Thái – Mường, tạo nên không gian vừa ấm cúng vừa đậm đà bản sắc địa phương. Từ ban công, du khách có thể tận hưởng tầm nhìn bao quát ra những cánh đồng lúa xanh mướt và những ngọn núi hùng vĩ, giúp tâm hồn thư thái và kết nối sâu sắc với thiên nhiên.
            </p>
          </div>
        </div>
      </div>
      {/* list phòng */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
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
              <h3 className="text-[24px] md:text-3xl font-bold font-utm-americana">{room.name}</h3>
              <p className="text-xl font-semibold mt-1 font-gotham">{new Intl.NumberFormat('vi-VN').format(room.price)} VND/Đêm</p>

              <Link
                to="/detail-phong"
                state={{ room }}
                className="group/button mt-6 w-full border border-white text-white py-2 rounded-full text-center font-medium hover:bg-white hover:text-cocGreen transition duration-300 flex items-center justify-center gap-2"
              >
                <span>Xem phòng</span>
                <StarIcon className="transition duration-300 text-white group-hover/button:text-cocGreen" />
              </Link>




            </div>
          </div>
        ))}
      </div>
      <div className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:grid md:grid-cols-2 gap-10 items-start">

          {/* Cột trái: Tiêu đề, mô tả, icon, hộp trắng */}
          <div className="text-left w-full">
            <h2 className="text-[24px] md:text-[44px] font-utm-americana text-cocGreen font-bold uppercase leading-snug mt-[50px]">
              ĐẶC SẢN ĐỊA PHƯƠNG
            </h2>
            <p className="text-cocGreen mt-4 font-grandma font-semibold text-[20px] md:text-[24px] leading-relaxed">
              Ẩn mình giữa rừng cọ nguyên sơ và những thửa ruộng bậc thang xanh mướt, nhà hàng tại Cọ Retreat là nơi hội tụ những hương vị mộc mạc, chân thật từ núi rừng Hòa Bình.
            </p>

            {/* Icon hàng ngang */}
            <div className="mt-6 flex justify-between max-w-[580px]">
              <img src={iconH1} alt="Icon 1" className="w-12 h-12" />
              <img src={iconH2} alt="Icon 2" className="w-12 h-12" />
              <img src={iconH3} alt="Icon 3" className="w-12 h-12" />
              <img src={iconH4} alt="Icon 4" className="w-12 h-12" />
            </div>

            {/* Hộp trắng nằm đè lên ảnh */}
            <div className="bg-white/30 rounded-xl p-6 w-full md:w-[680px] mt-10 md:mt-20 backdrop-blur-md"
              style={{
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.10), 0 -10px 20px rgba(0, 0, 0, 0.1), 10px 0 20px rgba(0, 0, 0, 0.1), -10px 0 20px rgba(0, 0, 0, 0.1)'
              }}>
              <p className="text-[#42554B] text-base leading-relaxed font-gotham mb-4">
                Tọa lạc ngay bên cạnh hồ bơi và phòng tắm mát ra khung cảnh ruộng bậc thang cùng núi rừng trùng điệp, quầy bar ngoài trời tại Cọ Retreat là một trong những điểm dừng chân lý tưởng để thư giãn giữa thiên nhiên trong lành.
              </p>
              <Link to='/am-thuc'
                className="group/button group-hover inline-flex items-center gap-2 px-5 py-2 text-sm text-cocGreen border border-cocGreen rounded-full hover:bg-cocGreen hover:text-white transition font-gotham font-semibold">
                <span>Xem menu </span>
                <StarIcon className="transition duration-300 text-cocGreen group-hover/button:text-white" />
              </Link>
            </div>
          </div>

          {/* Cột phải: Ảnh - xử lý responsive layout */}
          <div className="w-full px-4 sm:px-6 md:px-0 max-w-[768px] md:max-w-none mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-[16px]">

              {/* Cột trái gồm 2 ảnh dọc */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-8">
                <div className="w-[45vw] md:w-[245px] h-[200px] md:h-[345px] rounded-[30px] overflow-hidden shadow-2xl shadow-gray/80">
                  <img src={anhBia} alt="Ảnh 1" className="w-full h-full object-cover block" />
                </div>
                <div className="w-[45vw] md:w-[245px] h-[200px] md:h-[345px] rounded-[30px] overflow-hidden shadow-2xl shadow-gray/80">
                  <img src={anhBia2} alt="Ảnh 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Ảnh bên phải */}
              <div className="w-[90vw] md:w-[330px] h-[250px] md:h-[493px] rounded-[30px] overflow-hidden shadow-2xl shadow-gray/80 self-center md:self-center">
                <img src={anhBia3} alt="Ảnh giữa" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-white py-16 px-4 md:px-10 border-t border-gray-300">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Khối ảnh */}
    <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
      {/* Ảnh sau nghiêng */}
      <img
        src={anhBia}
        alt="hoatdong1"
        className="w-60 h-auto md:w-80 rounded-lg shadow-xl transform rotate-[-10deg] absolute md:top-8 md:left-4 z-0 hidden md:block"
      />
      
      {/* Ảnh trước */}
      <div className="relative z-10">
        <img
          src={anhBia3}
          alt="hoatdong2"
          className="w-60 md:w-80 rounded-xl shadow-2xl mx-auto"
        />
        <Link to='/combopackage' className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-2 w-max text-white font-medium text-base rounded-[10px] bg-white/10 backdrop-blur-md transition hover:bg-white/20 z-10">
          <span>Xem các hoạt động ▶</span>
        </Link>
      </div>
    </div>

    {/* Khối nội dung */}
    <div className="text-[#42554B]">
      <h2 className="text-[24px] md:text-[44px] font-bold font-utm-americana mb-6 leading-snug text-left md:text-left">
        HOẠT ĐỘNG TẠI CỌ<br />RETREAT
      </h2>
      <p className="text-base md:text-[24px] font-grandma leading-relaxed font-semibold text-left md:text-left">
        Tại Cọ Retreat, hành trình của bạn sẽ được làm đầy bằng những hoạt động trải nghiệm phong phú và gần gũi với thiên nhiên địa phương. Từ những buổi dạo bộ thong thả qua rừng cọ, tắm mát dưới dòng thác mát lành, cho đến những buổi ngắm hoàng hôn giữa ruộng bậc thang – mỗi trải nghiệm đều là một cách chạm vào vẻ đẹp yên bình và nguyên bản của Đà Bắc.
      </p>
    </div>
  </div>
</div>



      <div className="w-full px-2 py-10 md:py-6 bg-white border-t border-gray-300 " >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Bên trái: Thông tin liên hệ */}
          <div>
            <h2 className="text-2xl font-semibold mb-1 font-utm-americana text-cocGreen ">
              Liên hệ đặt phòng
            </h2>
            <p className="text-base font-gotham text-cocGreen font-semibold mb-4 py-2 ">
              Nếu bạn đang tìm kiếm những khoảnh khắc mới mẻ và đáng nhớ, đừng ngần ngại liên hệ với chúng tôi để lên lịch trình trải nghiệm phù hợp nhất.
            </p>
            <div className="text-base font-gotham text-cocGreen font-semibold py-4">
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

            {/* Follow Us */}
            <div className="flex items-center gap-8 mt-8">
              <p className="text-base font-gotham text-cocGreen font-semibold">Follow Us</p>
              <img src={iconZaloH} alt="zalo" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
              <img src={iconFbH} alt="facebook" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
              <img src={iconIGH} alt="instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
            </div>
          </div>

          {/* Bên phải: Ảnh bản đồ */}
          <div className="w-full h-[400px] relative mx-auto px-4 mt-14 mb-6">
            {/* Ảnh nền đằng sau (xoay 15 độ + border trắng) */}
            <img
              src={anhBia3}
              alt="background"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[90%] object-cover rounded-lg shadow-lg rotate-[15deg] z-0 border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />

            {/* Bản đồ Google nằm trên (có viền trắng) */}
            <iframe
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[90%] rounded-lg shadow-2xl z-10 border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.860429474468!2d105.09535864538141!3d20.877675131210164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313475725307e607%3A0x83d2a40f71247be7!2zQ-G7jSBSZXRyZWF0IMSQw6AgQuG6r2M!5e0!3m2!1svi!2s!4v1749718569326!5m2!1svi!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Home;
