import React, { useState } from 'react';
import anhBia from '../imgs/anhBia.png';
import imgD1 from '../imgs/imgD1.png';
import iconZalo from '../imgs/Zalo.png';
import iconFb from '../imgs/Facebook.png';
import iconIG from '../imgs/Instagram.png';
import imgSp1 from '../imgs/imgSp1.JPG';
import imgSp2 from '../imgs/imgSp2.JPG';
import imgSp3 from '../imgs/imgSp3.JPG';
import imgSp4 from '../imgs/imgSp4.JPG';
import imgSp5 from '../imgs/imgSp5.JPG';
import imgSp6 from '../imgs/imgSp6.JPG';
import imgSp7 from '../imgs/imgSp7.JPG';
import imgSp8 from '../imgs/imgSp8.JPG';
import { Link } from 'react-router-dom';



const HinhAnh = () => {
  const tabs = [
    { label: 'Tất cả', key: 'all' },
    { label: 'Phòng lưu trú', key: 'room' },
    { label: 'Không gian', key: 'space' },
    { label: 'Nhà hàng', key: 'restaurant' },
    { label: 'Bể bơi', key: 'pool' },
    { label: 'Hoạt động', key: 'activity' },
  ];

  const imagesByCategory = {
    room: [imgD1, imgD1, imgD1, imgD1],
    space: [imgSp1, imgSp2, imgSp3, imgSp4,],
    restaurant: [imgD1, imgD1],
    pool: [imgD1, imgD1],
    activity: [imgD1, imgD1],
  };

  const allImages = [
    ...imagesByCategory.room,
    ...imagesByCategory.space,
    ...imagesByCategory.restaurant,
    ...imagesByCategory.pool,
    ...imagesByCategory.activity,
  ];

  const [activeTab, setActiveTab] = useState('all');

  const getImagesToShow = () => {
    if (activeTab === 'all') return allImages;
    return imagesByCategory[activeTab] || [];
  };

  return (
    <div className="relative w-full bg-cover bg-center">
      <div
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${anhBia})`, }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#42554B]/90" />


        <div className="relative z-10 max-w-[1360px] mx-auto px-4 py-24 ">
          <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-20 mb-40">
            HÌNH ẢNH
          </h1>

          <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 bg-cBg">

            {/* Tabs */}
            <div className="flex w-full rounded-xl overflow-hidden shadow-lg  mb-8 bg-white">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.key;
                const isLast = index === tabs.length - 1;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-3 text-sm md:text-base text-center transition-all duration-300
          ${isActive
                        ? 'bg-[#CBD3B4] text-white font-semibold'
                        : 'bg-white text-cocGreen hover:bg-[#f0f3ec]'}
          group
          ${!isLast ? 'border-r border-[#d4d4d4]' : ''}
        `}
                  >
                    <span className={`
                      inline-block transition-all duration-300
                      font-dmsans
                      ${isActive ? 'translate-x-0 scale-105 font-semibold' : ''}
                      md:group-hover:translate-x-[-24px] md:group-hover:scale-105 md:group-hover:font-semibold
`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>


            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  transition-all duration-300">

              {getImagesToShow().map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`img-${idx}`}
                  className="w-full h-[333px] rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>

            {/* Follow Us */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <p className="text-base font-gotham text-cocGreen font-semibold">Follow Us</p>
              <Link to='https://zalo.me/0866001900'>
              <img src={iconZalo} alt="zalo" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />

              </Link>

              <Link to='https://www.facebook.com/coretreatdabac'>
              <img src={iconFb} alt="facebook" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />

              </Link>
              <img src={iconIG} alt="instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HinhAnh;
