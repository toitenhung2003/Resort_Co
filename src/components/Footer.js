import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imgF1 from "../imgs/imgF1.png";
import imgF2 from "../imgs/imgF2.png";
import imgF3 from "../imgs/imgF3.png";
import imgF4 from "../imgs/imgF4.png";
import imgF5 from "../imgs/imgF5.png";

import iconZalo from "../imgs/iconZalo.png";
import iconFB from "../imgs/iconFB.png";
import iconIG from "../imgs/iconIG.png";
import iconW from "../imgs/iconW.png";

import iconNext from "../imgs/iconNext.png";
import iconPrev from "../imgs/iconPrev.png";
import { Link } from "react-router-dom";

const images = [imgF1, imgF2, imgF3, imgF4, imgF5];

export default function Footer() {
  const swiperRef = useRef(null);

  // ✅ Quan sát 1 phần tử “mốc” đặt dưới footer
  const { ref: triggerRef, inView: triggerInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (triggerInView) {
      setShowContent(true);
    }
  }, [triggerInView]);
  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        if (
          swiperRef.current &&
          swiperRef.current.pagination &&
          swiperRef.current.pagination.el
        ) {
          swiperRef.current.pagination.destroy();
          swiperRef.current.pagination.init();
          swiperRef.current.pagination.render();
          swiperRef.current.pagination.update();
        }
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [showContent]);

  return (
    <>
      {/* ✅ Đây là phần mốc, đặt ngay SAU footer */}
      <div ref={triggerRef} className="h-1 w-full" />
      <footer className="bg-[#3f4c3f] text-white py-8 box-border overflow-hidden" >
        <div
          className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 w-full px-4 transition-all duration-1000 ease-out
          ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >

          {/* Slide ảnh (mobile: TRÊN - desktop: TRÁI) */}
          <div className="w-full md:w-2/3 flex flex-col items-center order-1 md:order-1">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ el: ".custom-pagination", clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper w-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={src}
                      alt={`slide-${idx}`}
                      className="w-full h-auto object-cover transition-all duration-300 ease-in-out rounded-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Prev - Pagination - Next */}
            <div className="flex items-center justify-center mt-10 gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="hover:opacity-80 transition"
              >
                <img
                  src={iconPrev}
                  alt="prev"
                  className="w-[22px] h-[20px] cursor-pointer"
                />
              </button>

              <div className="custom-pagination flex gap-3" />

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="hover:opacity-80 transition"
              >
                <img
                  src={iconNext}
                  alt="next"
                  className="w-[22px] h-[20px] cursor-pointer"
                />
              </button>
            </div>
          </div>

          {/* Logo + menu (mobile: DƯỚI - desktop: PHẢI) */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 text-white text-sm order-2 md:order-2 mt-10 md:mt-0">
            {/* Logo */}
            <div>
              <img
                src={iconW}
                alt="Co Retreat"
                className="w-[200px] h-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-6 mt-4 font-dmsans">
              {/* Cột 1 */}
              <div className="flex flex-row">
                <div className="w-[1px] bg-white mr-4" />
                <div className="flex flex-col gap-y-7">
                  <Link to="/" className="transition-all duration-200 hover:font-semibold hover:scale-105">Trang Chủ</Link>
                  <Link to="/loai-phong" className="transition-all duration-200 hover:font-semibold hover:scale-105">Loại Phòng</Link>
                  <Link to="/combo" className="transition-all duration-200 hover:font-semibold hover:scale-105">Combo Package</Link>
                </div>
              </div>

              {/* Cột 2 */}
              <div className="flex flex-row">
                <div className="w-[1px] bg-white mr-4" />
                <div className="flex flex-col gap-y-7">
                  <Link to="/gioi-thieu" className="transition-all duration-200 hover:font-semibold hover:scale-105">Giới Thiệu</Link>
                  <Link to="/am-thuc" className="transition-all duration-200 hover:font-semibold hover:scale-105">Ẩm Thực</Link>
                  <Link to="/hinh-anh" className="transition-all duration-200 hover:font-semibold hover:scale-105">Hình Ảnh</Link>
                </div>
              </div>
            </div>


            {/* Social */}
            <div className="flex items-center gap-3 mt-6 font-dmsans">
              <span className="text-white font-light">Follow Us</span>
              <a href="#"><img src={iconZalo} alt="Zalo" className="w-5 h-5 hover:opacity-80" /></a>
              <a href="#"><img src={iconFB} alt="Facebook" className="w-5 h-5 hover:opacity-80" /></a>
              <a href="#"><img src={iconIG} alt="Instagram" className="w-5 h-5 hover:opacity-80" /></a>
            </div>
          </div>
        </div>

        {/* Custom style */}
        <style jsx>{`
        .swiper-slide {
          position: relative;
          transform: scale(0.85);
          filter: brightness(60%);
          border-radius: 1rem;
          transition: all 0.3s ease-in-out;
          overflow: hidden;
        }

        .swiper-slide-active {
          transform: scale(1);
          filter: brightness(100%);
          z-index: 3;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .swiper-slide img {
          border-radius: 1rem;
          width: 100%;
          height: auto;
        }

        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
        }

        .swiper-pagination-bullet-active {
          background: #7b5dfb;
          width: 12px;
          height: 12px;
        }
      `}</style>
      </footer>

    </>


  );
}
