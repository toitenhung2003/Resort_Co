import React from 'react';
import anhGT from '../imgs/anhGT.png';
import anhBia from '../imgs/anhBia.png';

const GioiThieu = () => {
    return (
        <div className="relative w-full bg-cover bg-center bg-blend-overlay">
            {/* Header ảnh bìa nằm sát top và navbar đè lên */}
            <div
                className="relative h-[300px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-serif tracking-wide"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 51, 34, 0.6), rgba(0, 51, 34, 1)), url(${anhBia})`,
                }}
            >
                <div className="z-10">GIỚI THIỆU</div>
                {/* Phần giới thiệu chính */}
            <div className="max-w-6xl mx-auto px-4 py-12 pt-20">
                <div className="bg-white shadow-xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1 space-y-4 text-gray-800 text-sm md:text-base">
                        <h2 className="text-lg font-semibold">Chào mừng bạn đến với Cọ Retreat</h2>
                        <p>
                            Cách Hà Nội hơn 100km, ẩn mình giữa rừng cọ nguyên sinh và núi đồi trùng điệp của Đà Bắc (Hòa Bình), Cọ Retreat là điểm đến lý tưởng cho những ai muốn tạm rời phố thị để hít thở không khí trong lành, sống chậm lại và tái kết nối với thiên nhiên.
                        </p>
                        <p>
                            Với cảnh sắc hoang sơ, suối nước, ruộng bậc thang và những con đường trekking len lỏi qua rừng, nơi đây mang đến trải nghiệm nghỉ dưỡng đậm bản sắc – vừa thư giãn, vừa đậm chất khám phá.
                        </p>
                        <p>
                            Từ những mái nhà giữa rừng cọ đến bữa cơm bản làng, mọi chi tiết tại Cọ đều được tạo nên để nuôi dưỡng sự bình yên và cảm hứng sống tích cực.
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-56 md:h-64 rounded-lg bg-gray-300 overflow-hidden">
                            <img
                                src={anhGT}
                                alt="Ảnh cọ retreat"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>

            

            {/* Câu chuyện về Cọ */}
            <div className="bg-[#e7eae4] py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">CÂU CHUYỆN VỀ CỌ</h3>
                    <div className="text-gray-700 text-sm md:text-base space-y-4">
                        <p>
                            Giữa những đồi cọ nguyên sinh, thác nước hoang sơ và ruộng bậc thang xanh ngát của vùng Đà Bắc – Hòa Bình, Cọ Retreat mang đến một không gian nghỉ dưỡng thật biệt và đầy đón đợi, nơi nhịp sống được làm chậm lại để con người tái kết nối với thiên nhiên và chính mình. Mỗi sáng, máy lặng lẽ len qua rừng cọ; mỗi chiều, ánh nắng dịu rọi trên tán cọ… tạo nên một chốn dừng chân nhẹ nhàng và sâu lắng.
                        </p>
                        <p>
                            Cọ không chỉ đơn thuần là một nơi lưu trú, mà là một hành trình trải nghiệm: từ trekking rừng, đi xe xuyên bản làng, đến những phút thiền tĩnh lặng bên thác suối. Lấy cảm hứng từ thiên nhiên bản địa và đời sống người Mường bản xứ, từng ngôi nhà, cảnh quan, căn bằng và văn hóa nơi đây đều được thiết kế cẩn trọng.
                        </p>
                    </div>

                    {/* Hình ảnh nhỏ */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="h-40 bg-gray-300 rounded-lg overflow-hidden">
                            <img src="/img1.jpg" className="w-full h-full object-cover" alt="ảnh 1" />
                        </div>
                        <div className="h-40 bg-gray-300 rounded-lg overflow-hidden">
                            <img src="/img2.jpg" className="w-full h-full object-cover" alt="ảnh 2" />
                        </div>
                        <div className="h-40 bg-gray-300 rounded-lg overflow-hidden">
                            <img src="/img3.jpg" className="w-full h-full object-cover" alt="ảnh 3" />
                        </div>
                        <div className="h-40 bg-gray-300 rounded-lg overflow-hidden">
                            <img src="/img4.jpg" className="w-full h-full object-cover" alt="ảnh 4" />
                        </div>
                    </div>

                    {/* Nút điều hướng */}
                    <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            className="px-4 py-2 bg-white border border-gray-500 rounded-full text-sm hover:bg-gray-100"
                        >
                            📍 Vị trí Cọ Retreat
                        </a>
                        <button className="px-4 py-2 bg-white border border-gray-500 rounded-full text-sm hover:bg-gray-100">
                            📷 Hình ảnh các hoạt động
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GioiThieu;
