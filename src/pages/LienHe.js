import React, { useState } from 'react';
import anhBia from '../imgs/anhBia.png';
import imgD1 from '../imgs/imgD1.png';
import iconZalo from '../imgs/Zalo.png';
import iconFb from '../imgs/Facebook.png';
import iconIG from '../imgs/Instagram.png';
import phoneIcon from '../imgs/Phone.png';
import emailIcon from '../imgs/Email.png';
import markIcon from '../imgs/Mark.png';
import sendIcon from '../imgs/Send.png'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const LienHe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👉 Kiểm tra dữ liệu đơn giản
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }


    try {
      const response = await fetch("https://re-contract.vercel.app/data/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('res: ', data);

      if (data.errorCode === "S200") {
        toast.success("✅ Tin nhắn đã được gửi!");
      } else {
        toast.error(data?.result?.result || "Gửi thất bại");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi gửi tin nhắn");
      console.error(error.message);
    }
    // 👉 In dữ liệu ra (hoặc gửi API tại đây)
    console.log('Form submitted:', formData);

    // toast.success('✅ Tin nhắn đã được gửi!');
    // 👉 Reset form nếu cần
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };
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
    space: [imgD1, imgD1],
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
        style={{ backgroundImage: `url(${anhBia})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#42554B]/90" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-20 mb-40">
            LIÊN HỆ
          </h1>

          <div className="bg-[#F6F6F6] text-gray-800 shadow-xl rounded-xl px-6 md:px-12 pt-12 pb-16 bg-cBg space-y-10">

            {/* Google Map đặt lên đầu */}
            <div className="w-full h-[400px] mx-auto px-4">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.860429474468!2d105.09535864538141!3d20.877675131210164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313475725307e607%3A0x83d2a40f71247be7!2zQ-G7jSBSZXRyZWF0IMSQw6AgQuG6r2M!5e0!3m2!1svi!2s!4v1749718569326!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Nội dung mô tả */}
            <div className="space-y-4 max-w-7xl mx-auto px-4">
              <h2 className="text-xl md:text-4xl font-bold text-cocGreen font-grandma">
                Cọ Retreat - Đà Bắc thuộc xóm Tắm, xã Trung Thành, Đà Bắc, Hòa Bình.
              </h2>
              <p className="text-cocGreen leading-relaxed font-gotham font-semibold">
                Cách thủ đô Hà Nội 100km, mất khoảng hơn 2 tiếng để bạn di chuyển đến Cọ Retreat - Đà Bắc.
                Từ Hà Nội, bạn sẽ đi quốc lộ 6 đến thành phố Hòa Bình; đi tiếp khoảng 25km theo đường tỉnh lộ 433
                rẽ trái vào đường Rãng - Tắm - Rãng. Tiếp tục lái xe thêm 10km nữa, bạn sẽ nhìn thấy rừng cọ nguyên sinh
                - nơi Cọ Retreat đang chờ đón bạn.
              </p>
            </div>

            {/* Thông tin liên hệ + Form */}
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
              {/* Left Info */}
              <div className="space-y-6 text-gray-800 text-base">
                <div className="space-y-2">
                  <p className="font-semibold font-utm-americana text-3xl text-cocGreen">Cọ Retreat - Đà Bắc</p>
                  <p className="flex items-center gap-2 font-gotham text-cocGreen font-semibold">
                    <img src={emailIcon} alt="email" className="w-5 h-5" />
                    coretreatdabac@gmail.com
                  </p>
                  <p className="flex items-center gap-2 font-gotham text-cocGreen font-semibold">
                    <img src={markIcon} alt="address" className="w-5 h-5" />
                    Xóm Tắm, Xã Trung Thành, Đà Bắc, Hòa Bình
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold font-utm-americana text-3xl text-cocGreen">Hotline</p>
                  <p className="flex items-center gap-2 font-gotham text-cocGreen font-semibold">
                    <img src={phoneIcon} alt="phone" className="w-5 h-5" />
                    0866 001 900
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <p className="text-base font-gotham text-cocGreen font-semibold">Follow Us</p>
                  <Link to='https://zalo.me/0866001900'>
                    <img src={iconZalo} alt="zalo" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                  </Link>

                  <Link to="https://www.facebook.com/share/1AeioFi6CS/?mibextid=wwXIfr">
                    <img src={iconFb} alt="facebook" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                  </Link>

                  <img src={iconIG} alt="instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                </div>
              </div>


              {/* Right Form */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-full text-cocGreen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-semibold font-grandma text-xl">Họ và tên</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Điền tên của bạn"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold font-grandma text-xl">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email của bạn"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-semibold font-grandma text-xl">Số điện thoại</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Số điện thoại của bạn"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold font-grandma text-xl">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-1 font-semibold font-grandma text-xl">
                    <img src={sendIcon} alt="send" className="w-5 h-5" />
                    Tin nhắn
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Please type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-cocGreen text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
                >
                  Gửi tin nhắn
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default LienHe;
