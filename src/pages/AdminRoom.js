import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus } from "react-icons/fa";

export default function Room() {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [Category, setCategory] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [previewMainImage, setPreviewMainImage] = useState(null);
    const [totalImageSizeError, setTotalImageSizeError] = useState(false);
    const [previewDetailImages, setPreviewDetailImages] = useState([]);


    const [newRoom, setNewRoom] = useState({
        name: "",
        price: "",
        time: "",
        description: "",
        image: "",
        overviewId: "",
        detail: {
            description: "",
            images: [],
        },
    });

    useEffect(() => {
        getRoom()
    }, []);

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 4 * 1024 * 1024) {
            setNewRoom({ ...newRoom, image: file });
            setPreviewMainImage(URL.createObjectURL(file));
        } else {
            toast.error("Ảnh vượt quá dung lượng 4MB");
        }
    };

    const handleDetailImagesChange = (e) => {
        const files = Array.from(e.target.files);
        const totalSize = files.reduce((acc, file) => acc + file.size, 0);
        const maxSize = 4 * 1024 * 1024; // 4MB

        if (totalSize > maxSize) {
            setTotalImageSizeError(true);
            setPreviewDetailImages([]);
            return;
        }

        setTotalImageSizeError(false);
        setNewRoom((prev) => ({
            ...prev,
            detail: { ...prev.detail, images: files },
        }));

        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewDetailImages(previews);
    };

    const getRoom = async () => {
        try {
            const response = await fetch("https://re-contract.vercel.app/data/getAllRoom", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(),
            });

            const data = await response.json();
            const overviews = data?.result?.result?.[0]?.overviews;
            if (Array.isArray(overviews)) {
                setCategory(overviews);
            } else {
                toast.error("Dữ liệu phòng không hợp lệ");
                setCategory([]);
            }
            console.log("phòng: ", data?.result?.result?.[0].overviews);
        } catch (error) {
            toast.error("Đã xảy ra lỗi ");
            console.error(error.message);
        }
    };

    const rooms = [
        {
            id: 1,
            name: "Deluxe Double Room",
            type: "Deluxe",
            price: "2.000.000 VND/Đêm",
            description: "Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi...",
            image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20023343-b563ceac0ffec67e86cf3cb1ebd5cb28.jpeg",
        },
        {
            id: 2,
            name: "Deluxe Double Room",
            type: "Deluxe",
            price: "2.000.000 VND/Đêm",
            description: "Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi...",
            image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20023343-b563ceac0ffec67e86cf3cb1ebd5cb28.jpeg",
        },
        {
            id: 3,
            name: "Deluxe Double Room",
            type: "Deluxe",
            price: "2.000.000 VND/Đêm",
            description: "Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi...",
            image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20023343-b563ceac0ffec67e86cf3cb1ebd5cb28.jpeg",
        },
        {
            id: 4,
            name: "Deluxe Double Room",
            type: "Deluxe",
            price: "2.000.000 VND/Đêm",
            description: "Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi...",
            image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20023343-b563ceac0ffec67e86cf3cb1ebd5cb28.jpeg",
        },
        {
            id: 5,
            name: "Deluxe Double Room",
            type: "Deluxe",
            price: "2.000.000 VND/Đêm",
            description: "Nằm trên vị trí cao, được xây dựng từ vật liệu gỗ tự nhiên, với thiết kế truyền thống và không gian rộng rãi...",
            image: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20023343-b563ceac0ffec67e86cf3cb1ebd5cb28.jpeg",
        },
        // Thêm các phòng khác tương tự...
    ];

    const handleAddRoom = () => {
        setAddModalOpen(true);
    };

    const openModal = (room) => {
        setSelectedRoom(room);
        setShowModal(true);
        console.log("room: ", room);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedRoom(null);
    };
    const handleCloseDialog = () => setSelectedRoom(null);

    return (
        <div className="space-y-6">
            <div className="sticky top-4 z-10 mx-4 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md bg-white/30 border border-white/20 backdrop-saturate-150">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap">Quản lý phòng</h1>
                    <button
                        onClick={handleAddRoom}
                        className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                        }}
                    >
                        <FaPlus size={14} />
                        Thêm phòng
                    </button>
                </div>
            </div>

            {addModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setAddModalOpen(false)}
                    />

                    {/* Modal */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 max-h-[90vh] overflow-y-auto p-6 space-y-5 z-10">
                        <h2 className="text-2xl font-bold text-gray-800">Thêm phòng mới</h2>

                        <input
                            type="text"
                            placeholder="Tên phòng"
                            value={newRoom.name}
                            onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        />

                        <input
                            type="text"
                            placeholder="Giá phòng"
                            value={newRoom.price}
                            onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                        />

                        <input
                            type="text"
                            placeholder="Thời gian (VD: VND/Đêm)"
                            value={newRoom.time}
                            onChange={(e) => setNewRoom({ ...newRoom, time: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                        />

                        <textarea
                            placeholder="Mô tả ngắn"
                            value={newRoom.description}
                            onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none"
                            rows={3}
                        />

                        <div>
                            <label className="font-medium text-sm text-gray-700">Ảnh đại diện</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleMainImageChange}
                                className="mt-1"
                            />
                            {previewMainImage && (
                                <img
                                    src={previewMainImage}
                                    alt="Ảnh đại diện"
                                    className="mt-2 h-32 w-full object-cover rounded-md shadow"
                                />
                            )}
                        </div>

                        <input
                            type="text"
                            placeholder="ID tổng quan phòng (overviewId)"
                            value={newRoom.overviewId}
                            onChange={(e) => setNewRoom({ ...newRoom, overviewId: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                        />

                        <textarea
                            placeholder="Mô tả chi tiết"
                            value={newRoom.detail.description}
                            onChange={(e) =>
                                setNewRoom({
                                    ...newRoom,
                                    detail: {
                                        ...newRoom.detail,
                                        description: e.target.value,
                                    },
                                })
                            }
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none"
                            rows={4}
                        />

                        <div>
                            <label className="font-medium text-sm text-gray-700">
                                Ảnh chi tiết (Tổng dưới 4MB)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleDetailImagesChange}
                                className="mt-1"
                            />
                            <div className="flex flex-wrap gap-3 mt-2">
                                {previewDetailImages.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`Ảnh chi tiết ${i + 1}`}
                                        className="h-24 w-24 object-cover rounded-md shadow"
                                    />
                                ))}
                            </div>
                            {totalImageSizeError && (
                                <p className="text-red-600 text-sm mt-1">Tổng dung lượng ảnh phải dưới 4MB!</p>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                onClick={() => setAddModalOpen(false)}
                                className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100"
                            >
                                Huỷ
                            </button>
                            <button
                                onClick={() => {
                                    if (totalImageSizeError) return toast.error("Tổng dung lượng ảnh vượt quá 4MB!");
                                    console.log("Dữ liệu gửi:", newRoom);
                                    toast.success("Đã gửi yêu cầu thêm phòng!");
                                    setAddModalOpen(false);
                                    setNewRoom({
                                        name: "",
                                        price: "",
                                        time: "",
                                        description: "",
                                        image: "",
                                        overviewId: "",
                                        detail: { description: "", images: [] },
                                    });
                                    setPreviewMainImage(null);
                                    setPreviewDetailImages([]);
                                }}
                                className="px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                            >
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10">
                {Category?.map((room) => (
                    <div
                        key={room._id}
                        className="relative group bg-black rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                    >
                        {/* Ảnh nền */}
                        <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                        />

                        {/* Overlay gradient toàn bộ */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent px-4 pt-4 pb-16 flex flex-col justify-end">

                            {/* Tên + giá (luôn hiện) */}
                            <div className="mb-2">
                                <h2 className="text-lg font-semibold text-white">{room.name}</h2>
                                <p className="text-white text-sm">{room.price}</p>
                            </div>

                            {/* Mô tả ẩn, hover mới hiện */}
                            <div className="text-sm text-gray-200 overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24">
                                {room.description}
                            </div>
                        </div>

                        {/* Nút luôn ở dưới cùng */}
                        <div
                            key={room.id}
                            onClick={() => openModal(room)}
                            className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                            <button className="w-full text-sm font-medium text-white border border-white rounded-full py-2 transition hover:bg-white hover:text-black">
                                Xem phòng
                            </button>
                        </div>
                    </div>



                ))}
            </div>

            {/* Dialog hiển thị chi tiết */}
            {selectedRoom && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Overlay */}
                    <div
                        className={`absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <div
                        className={`relative bg-white rounded-lg max-w-md w-full p-6 shadow-xl transform transition-all duration-300 ${showModal
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0 pointer-events-none"
                            }`}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            ×
                        </button>
                        <div className="mb-4 flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-gray-300">
                            {Array.isArray(selectedRoom?.detail?.images) &&
                                selectedRoom.detail.images.map((imgUrl, index) => (
                                    <img
                                        key={index}
                                        src={imgUrl}
                                        alt={`${selectedRoom.name} ${index + 1}`}
                                        className="h-60 min-w-[500px] object-cover rounded-xl shadow-lg"
                                    />
                                ))}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {selectedRoom.name}
                        </h2>
                        <p className="text-gray-600">Loại phòng: {selectedRoom.type}</p>
                        <p className="text-gray-600">Giá: {selectedRoom.price}</p>
                        <p className="text-sm text-gray-700 mt-2">
                            {selectedRoom.description}
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => alert("Chức năng sửa đang phát triển")}
                                className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                                Sửa
                            </button>
                            <button
                                onClick={() => alert("Bạn chắc chắn muốn xoá?")}
                                className="px-4 py-2 text-sm font-medium rounded-full border border-red-400 text-red-600 hover:bg-red-50 transition"
                            >
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
