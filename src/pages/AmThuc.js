import React, { useState, useEffect } from 'react';
import anhGT from '../imgs/anhGT.png';
import anhBia from '../imgs/anhBia.png';
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"
import Icmark from "../imgs/Mark.png";
import rectangle from "../imgs/rectangle.png";
import Icsearch from "../imgs/Icsearch.png";
import imgS1 from "../imgs/imgS1.png"
import imgS2 from "../imgs/imgS2.png"
import imgS3 from "../imgs/imgS3.png"
import imgS4 from "../imgs/imgS4.png"
import imgS5 from "../imgs/imgS5.png"
import imgS6 from "../imgs/imgS6.png"
import imgS7 from "../imgs/imgS7.png"
import imgS8 from "../imgs/imgS8.png"
import iconMark from '../imgs/Mark.png';
import iconMail from '../imgs/Email.png';
import iconPhone from '../imgs/Phone.png';
import iconFb from '../imgs/Facebook.png';
import iconZalo from '../imgs/Zalo.png';
import iconIG from '../imgs/Instagram.png';
import iconPrevA from '../imgs/iconPrevA.png';
import iconNextA from '../imgs/iconNextA.png';
import imgA1 from "../imgs/imgA1.jpg"
import { div } from 'framer-motion/client';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import imgGT1 from "../imgs/imgGT1.png"
import imgGT2 from "../imgs/imgGT2.png"
import imgGT3 from "../imgs/imgGT3.png"

const AmThuc = () => {
    const staffImages = [imgS1, imgS2, imgS3, imgS4, imgS5, imgS6, imgS7, imgS8];
    const [Category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const STORAGE_KEY = "cached-foods";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://re-contract.vercel.app/data/getAllCuisine", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                    // không truyền body nếu không cần
                });

                if (!response.ok) throw new Error("Server error");

                const json = await response.json();
                console.log("Full JSON:", json); // Kiểm tra

                const cuisiness = json?.result?.result?.cuisines;
                if (Array.isArray(cuisiness)) {
                    console.log("cuisiness: ", cuisiness);
                    setCategory(cuisiness);
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(cuisiness));
                } else {
                    toast.error("❌ Dữ liệu phòng không hợp lệ");
                    setCategory([]);
                }
            } catch (err) {
                const cached = localStorage.getItem(STORAGE_KEY);
                if (cached) {
                    setCategory(JSON.parse(cached));
                    setError("⚠️ Dữ liệu đang bị gián đoạn");
                } else {
                    setError("❌ Không có dữ liệu và lỗi kết nối mạng.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const MenuImages = [
        {
            img: imgA1,
            name: 'Rau muống xào tỏi',
            price: 20000,
            desc: 'Món rau thanh đạm, xào cùng tỏi thơm nức mũi.',
        },
        {
            img: imgA1,
            name: 'Gà rang muối',
            price: 85000,
            desc: 'Gà giòn bên ngoài, đậm vị bên trong.',
        },
        {
            img: imgA1,
            name: 'Canh chua cá lóc',
            price: 70000,
            desc: 'Canh chua đậm đà vị miền Nam.',
        },
        {
            img: imgA1,
            name: 'Bò lúc lắc',
            price: 95000,
            desc: 'Thịt bò mềm, sốt đậm đà, ăn cùng khoai tây chiên.',
        },
        {
            img: imgA1,
            name: 'Bò lúc lắc',
            price: 95000,
            desc: 'Thịt bò mềm, sốt đậm đà, ăn cùng khoai tây chiên.',
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCount = isMobile ? 1 : 3;

    const handlePrev = () => {
        const maxIndex = staffImages.length - visibleCount;
        setStartIndex((prev) =>
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    const handleNext = () => {
        const maxIndex = staffImages.length - visibleCount;
        setStartIndex((prev) =>
            prev >= maxIndex ? 0 : prev + 1
        );
    };


    const visibleCountMenu = isMobile ? 1 : 4;

    const handlePrevMenu = () => {
        const maxVisibleImages = 4;
        const maxIndex = MenuImages.length - visibleCountMenu;

        if (startIndex <= 0) {
            setStartIndex(maxIndex); // quay về cuối
        } else {
            setStartIndex((prev) => prev - 1);
        }
    };
    const handleNextMenu = () => {
        const maxVisibleImages = 4;
        const maxIndex = MenuImages.length - visibleCountMenu;

        if (startIndex >= maxIndex) {
            setStartIndex(0); // quay lại ảnh đầu
        } else {
            setStartIndex((prev) => prev + 1);
        }
    };


    const visibleImages = staffImages.slice(startIndex, startIndex + visibleCount);

    return (
        <div className="relative w-full bg-cover bg-center">
            <div
                className="relative bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${anhBia})` }}
            >
                {/* Lớp phủ đen + gradient */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#2E463D]/100" />
                </div>

                <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-10 mb-20">
                        ẨM THỰC
                    </h1>

                    <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 flex flex-col gap-6">
                        <div className="w-full relative">
                            <div className="relative flex items-center justify-center">
                                {/* Prev Button */}
                                <button onClick={handlePrev} className="absolute left-0 z-10">
                                    <img
                                        src={iconPrevA}
                                        alt="prev"
                                        className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                    />
                                </button>

                                {/* Slider wrapper */}
                                <div className="w-full flex justify-center items-center relative">
                                    {/* Prev Button */}
                                    <button onClick={handlePrev} className="absolute left-0 z-10">
                                        <img
                                            src={iconPrevA}
                                            alt="prev"
                                            className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                        />
                                    </button>

                                    {/* Image Slider */}
                                    {isMobile ? (
                                        // ===== MOBILE VERSION =====
                                        <div className="overflow-hidden w-full flex justify-center">
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{
                                                    transform: `translateX(-${startIndex * (isMobile ? 100 : 366)}%)`,
                                                    width: `${staffImages.length * (isMobile ? 100 : 366)}%`,
                                                }}
                                            >
                                                {staffImages.map((img, index) => (
                                                    <div
                                                        key={index}
                                                        className={`${isMobile ? 'w-full' : 'w-[350px]'
                                                            } flex-shrink-0 px-2 box-border`}
                                                        style={{ maxWidth: isMobile ? '100%' : '350px' }}
                                                    >
                                                        <img
                                                            src={img}
                                                            alt={`slide-${index}`}
                                                            className="w-full h-[195px] object-cover rounded-xl"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    ) : (
                                        // ===== DESKTOP VERSION =====
                                        <div className="w-[1080px] overflow-hidden mx-10">
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{
                                                    transform: `translateX(-${startIndex * 366}px)`,
                                                }}
                                            >
                                                {staffImages.map((img, index) => (
                                                    <img
                                                        key={index}
                                                        src={img}
                                                        alt={`slide-${index}`}
                                                        className="w-[350px] h-[195px] object-cover rounded-xl flex-shrink-0 mr-4"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Next Button */}
                                    <button onClick={handleNext} className="absolute right-0 z-10">
                                        <img
                                            src={iconNextA}
                                            alt="next"
                                            className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                        />
                                    </button>
                                </div>



                                {/* Next Button */}
                                <button onClick={handleNext} className="absolute right-0 z-10">
                                    <img
                                        src={iconNextA}
                                        alt="next"
                                        className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                    />
                                </button>
                            </div>
                        </div>


                        <div className="w-full flex flex-col justify-center space-y-4">
                            <h2 className="text-2xl md:text-3xl font-utm-americana font-semibold text-cocGreen">
                                Nhà hàng Cọ Retreat
                            </h2>
                            <p className="text-sm md:text-base font-gotham text-cocGreen font-semibold">
                                Ẩn mình giữa rừng cọ nguyên sơ và những thửa ruộng bậc thang xanh mướt, nhà hàng tại Cọ Retreat là nơi hội tụ những hương vị mộc mạc, chân thật từ núi rừng Hòa Bình.
                            </p>
                            <p className="text-sm md:text-base font-gotham text-cocGreen font-semibold">
                                Lấy cảm hứng từ ẩm thực truyền thống và lối sống gắn bó với thiên nhiên của đồng bào địa phương, mỗi món ăn nơi đây không chỉ ngon miệng mà còn đậm đà bản sắc vùng cao. Nguyên liệu sử dụng đều được tuyển chọn kỹ lưỡng từ nông sản bản địa – tươi, sạch và theo mùa – mang lại trải nghiệm ẩm thực trọn vẹn và tinh tế.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white pt-0 pb-5 px-6">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
                    {/* Khối nội dung bên trái */}
                    <div className="md:w-max space-y-8  ">
                        <h2 className="text-2xl md:text-3xl font-utm-americana font-semibold text-cocGreen mt-10">
                            Quầy bar ngoài trời tại Cọ Retreat
                        </h2>
                        <p className="text-sm md:text-base font-gotham text-cocGreen">
                            Tọa lạc ngay bên cạnh hồ bơi và phóng tầm mắt ra khung cảnh ruộng bậc thang cùng núi rừng trùng điệp, quầy bar ngoài trời tại Cọ Retreat là một trong những điểm dừng chân lý tưởng để thư giãn giữa thiên nhiên trong lành.
                        </p>
                        <p className="text-sm md:text-base font-gotham text-cocGreen">
                            Tại đây, bạn có thể tận hưởng cảm giác nhẹ nhàng, tĩnh tại bên ly đồ uống yêu thích – từ cà phê buổi sớm đến thức uống mát lạnh cho buổi chiều lười biếng. Không gian mở, thoáng đãng và gần gũi với thiên nhiên giúp mọi khoảnh khắc nghỉ dưỡng thêm trọn vẹn và tiện nghi.
                        </p>
                    </div>

                    {/* Khối ảnh bên phải — đã thêm mt-[60px] */}
                    <div className="md:w-1/2 w-full flex justify-center relative mt-[60px]">
                        <div className="flex gap-10 md:gap-12">
                            {[imgGT1, imgGT2, imgGT3].map((src, index) => {
                                const offsets = [0, 25, 45];
                                return (
                                    <div
                                        key={index}
                                        className="relative w-[100px] md:w-[166px] h-[180px] md:h-[350px] rounded-[1.25rem] overflow-hidden shadow-md border-[2px] border-white bg-[#2E463D] transform transition-transform duration-300 hover:scale-105"
                                        style={{ top: `${offsets[index]}px` }}
                                    >
                                        <img
                                            src={src}
                                            alt={`ảnh ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                <div className='max-w-7xl mx-auto'>
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
                    <div className="flex items-start justify-start gap-6 mt-10">
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

                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-2xl md:text-3xl font-utm-americana font-semibold text-cocGreen mt-10">
                        MENU
                    </h2>

                    <div className="w-full flex justify-center mt-10">
                        <div className="relative w-[90%] md:w-full flex items-center justify-center px-4 md:px-0">
                            {/* Prev Button */}
                            <button
                                onClick={handlePrevMenu}
                                className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-10"
                            >
                                <img
                                    src={iconPrevA}
                                    alt="prev"
                                    className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                />
                            </button>

                            {/* Slider wrapper */}
                            <div className="w-full flex justify-center items-center relative">
                                {isMobile ? (
                                    <div className="relative w-full overflow-hidden">
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out"
                                            style={{
                                                width: `${Category.length * 100}%`,
                                                transform: `translateX(-${startIndex * (100 / Category.length)}%)`,
                                            }}
                                        >
                                            {Category?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="w-full flex-shrink-0 relative"
                                                    style={{ flex: `0 0 ${100 / Category.length}%` }}
                                                >
                                                    <img
                                                        src={item?.image}
                                                        alt={`slide-${index}`}
                                                        className="w-full h-[400px] object-cover rounded-xl"
                                                    />
                                                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#091911]/90 to-transparent rounded-b-xl z-10" />
                                                    <div className="absolute bottom-0 z-20 w-full px-4 pb-4 text-white">
                                                        <h3 className="text-xl font-bold font-utm-americana">{item?.name}</h3>
                                                        <p className="text-sm font-semibold mt-1 font-gotham">
                                                            {item?.price.toLocaleString('vi-VN')}₫
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                ) : (
                                    <div className="w-[1236px] overflow-hidden mx-auto">
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out"
                                            style={{
                                                transform: `translateX(-${startIndex * 313}px)`,
                                            }}
                                        >
                                            {Category.map((item, index) => (
                                                <div key={index} className="relative group w-[297px] h-[400px] flex-shrink-0 mr-4">
                                                    <img
                                                        src={item?.image}
                                                        alt={`slide-${index}`}
                                                        className="w-full h-full object-cover rounded-xl"
                                                    />

                                                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#091911]/100 to-transparent group-hover:opacity-0 transition duration-500 z-10 rounded-b-xl" />

                                                    <div className="absolute bottom-0 z-20 w-full px-4 pb-4 text-white">
                                                        <h3 className="text-xl font-bold font-utm-americana">{item?.name}</h3>
                                                        <p className="text-sm font-semibold mt-1 font-gotham">
                                                            {item?.price.toLocaleString('vi-VN')}₫
                                                        </p>

                                                    </div>
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNextMenu}
                                className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-10"
                            >
                                <img
                                    src={iconNextA}
                                    alt="next"
                                    className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AmThuc;