import React from 'react';
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
import { Link } from 'react-router-dom';

const GioiThieu = () => {
    const staffImages = [imgS1, imgS2, imgS3, imgS4, imgS5, imgS6, imgS7, imgS8];
    return (
        <div className="relative w-full bg-cover bg-center">
            {/* Ảnh bìa + toàn bộ nội dung nằm trong ảnh bìa */}
            <div
                className="relative bg-center bg-no-repeat bg-contain md:bg-cover text-white"
                style={{
                    backgroundImage: `url(${anhBia})`,
                }}
            >
                {/* Lớp phủ đen + gradient */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#2E463D]/100" />
                </div>

                <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
                    {/* Tiêu đề */}
                    <h1 className="text-4xl md:text-6xl font-utm-americana font-semibold text-center mt-10 mb-20">
                        GIỚI THIỆU
                    </h1>

                    {/* Nội dung giới thiệu */}
                    <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-stretch gap-6">
                        {/* Cột chữ */}
                        <div className="md:w-1/2 flex flex-col justify-center space-y-4 text-sm md:text-base">
                            <h2 className="text-2xl font-grandma font-semibold text-txtGreen">
                                Chào mừng bạn đến với Cọ Retreat
                            </h2>
                            <p className="font-gotham text-cocGreen font-semibold">
                                Cách Hà Nội hơn 100km, ẩn mình giữa rừng cọ nguyên sinh và núi đồi trùng điệp của Đà Bắc (Hòa Bình), Cọ Retreat là điểm đến lý tưởng cho những ai muốn tạm rời phố thị để hít thở không khí trong lành, sống chậm lại và tái kết nối với thiên nhiên.
                            </p>
                            <p className="font-gotham text-cocGreen font-semibold">
                                Với cảnh sắc hoang sơ, suối nước, ruộng bậc thang và những con đường trekking len lỏi qua rừng, nơi đây mang đến trải nghiệm nghỉ dưỡng đậm bản sắc – vừa thư giãn, vừa đậm chất khám phá.
                            </p>
                            <p className="font-gotham text-cocGreen font-semibold">
                                Từ những mái nhà giữa rừng cọ đến bữa cơm bản làng, mọi chi tiết tại Cọ đều được tạo nên để nuôi dưỡng sự bình yên và cảm hứng sống tích cực.
                            </p>
                        </div>

                        {/* Cột ảnh */}
                        <div className="md:w-1/2 flex items-center justify-center">
                            <div className="w-full h-56 md:h-[350px] rounded-lg overflow-hidden">
                                <img
                                    src={anhGT}
                                    alt="Ảnh cọ retreat"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Câu chuyện về cọ */}
                    <div className="text-white py-20 px-6">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
                            {/* Cột trái: chữ */}
                            <div className="md:w-1/2 space-y-4">
                                <h2 className="text-3xl md:text-4xl font-utm-americana font-semibold">
                                    CÂU CHUYỆN VỀ CỌ
                                </h2>
                                <p className="text-sm md:text-base font-gotham">
                                    Giữa những đồi cọ nguyên sinh, thác nước hoang sơ và ruộng bậc thang xanh ngát của vùng Đà Bắc – Hòa Bình, Cọ Retreat mang đến một không gian nghỉ dưỡng thật biệt, nơi nhịp sống được làm chậm lại để con người thật sự chạm vào thiên nhiên và chính mình. Mỗi sáng, mây lững lờ trôi qua hiên nhà; mỗi chiều, ánh nắng rơi trên tán cọ – tất cả tạo nên một chốn dừng chân nhẹ nhàng và sâu lắng.
                                </p>
                                <p className="text-sm md:text-base font-gotham">
                                    Cọ không chỉ đơn thuần là nơi lưu trú, mà là một hành trình trải nghiệm: từ trekking giữa rừng, đạp xe xuyên bản làng, đến những phút tĩnh lặng nhâm nhi trà bên suối. Lấy cảm hứng từ thiên nhiên bản địa và đời sống cộng đồng, Cọ hướng đến một lối sống chậm, cân bằng và chan hòa – nơi mọi khoảnh khắc đều được trân trọng.
                                </p>
                            </div>

                            {/* Cột phải: 3 ảnh đứng bo góc đẹp như mockup */}
                            <div className="md:w-1/2 w-full flex justify-center gap-4 md:gap-6 relative">
                                {[img1, img2, img3].map((src, index) => {
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

                        {/* Container tìm kiếm */}
                        <div className="w-full max-w-full md:max-w-3xl px-4 py-3 bg-white rounded-full flex flex-wrap items-center justify-between gap-4 shadow-md ml-0 mt-10 overflow-hidden">
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

            {/* Đội ngũ nhân viên */}
            <div className="max-w-7xl mx-auto px-4 py-16 text-cocGreen">
                <h2 className="text-3xl md:text-4xl font-utm-americana font-semibold mb-4">ĐỘI NGŨ NHÂN VIÊN</h2>
                <p className="font-gotham text-sm md:text-base mb-4">
                    Đội ngũ nhân viên tại Cọ Retreat – những người con dân tộc Thái – luôn tận tâm và nhiệt huyết, đồng hành cùng khu nghỉ dưỡng từ những ngày đầu tiên...
                </p>
                <p className="font-gotham text-sm md:text-base mb-8">
                    Với tâm huyết mang đến trải nghiệm nghỉ dưỡng trọn vẹn, Cọ Retreat không ngừng hoàn thiện dịch vụ để trở thành điểm dừng chân lý tưởng...
                </p>
                <div className="max-w-screen-xl mx-auto px-2 py-12">
                    <div className="grid grid-cols-4 gap-2">
                        {[imgS1, imgS2, imgS3, imgS4, imgS5, imgS6, imgS7, imgS8].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`staff${idx + 1}`}
                                className="w-full h-32 md:h-60 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GioiThieu;
