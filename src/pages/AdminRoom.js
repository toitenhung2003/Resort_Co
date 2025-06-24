import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus } from "react-icons/fa";

export default function Room() {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [showNameModal, setShowNameModal] = useState(false);
    const [showPriceModal, setShowPriceModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [id_Category, setId_Category] = useState(null)
    const [Updateloading, setUpdateLoading] = useState(false);



    const [newName, setNewName] = useState(selectedRoom?.name);
    const [Category, setCategory] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingPrice, setEditingPrice] = useState(false);
    const [newPrice, setNewPrice] = useState(selectedRoom?.price || 0);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState(null)
    const [romm_id, setRomm_id] = useState(null)
    const [image_id, setImage_id] = useState(null)




    useEffect(() => {
        getRoom()
    }, []);
    useEffect(() => {
        if (selectedRoom) {
            setNewName(selectedRoom.name);
            setNewPrice(selectedRoom.price);
        }
    }, [selectedRoom]);
    const savePrice = () => {
        setEditingPrice(false);
        // Gửi request cập nhật giá ở đây
        console.log("Giá mới:", newPrice);
    };

    const fileInputRef = useRef(null);

    const handleEditImage = (index, type, room_id, image_id) => {
        if (fileInputRef.current) {
            fileInputRef.current.dataset.index = index;
            fileInputRef.current.click();
            setType(type)
            setRomm_id(room_id)
            setImage_id(image_id)
        }
    };

    const handleFileChange = async (e) => {
        console.log("type: ", type);
        const file = e.target.files[0];
        const index = e.target.dataset.index;

        if (!file) return;

        if (file.size > 4 * 1024 * 1024) {
            alert("File không được vượt quá 4MB");
            return;
        }

        try {
            const imageId = selectedRoom.detail.images[index]._id;
            const roomId = selectedRoom._id;

            const formData = new FormData();
            formData.append("images", file);
            formData.append("type", type)
            formData.append("room_detail", romm_id)
            formData.append("imageId", image_id)
            const token = localStorage.getItem("token");
            const response = await fetch("https://re-contract.vercel.app/image",
                {
                    method: "POST", // hoặc POST tùy server bạn
                    headers: {
                        Authorization: `Bearer ${token}`,

                    },
                    body: formData,
                }
            );
            console.log("res: ", response.json);

            //   if (!response.ok) {
            //     throw new Error("Upload ảnh thất bại");
            //   }

            const result = await response.json();

            // Cập nhật ảnh mới từ server vào UI nếu cần
            const updatedImages = [...selectedRoom.detail.images];
            updatedImages[index] = {
                ...updatedImages[index],
                link: result.newImageUrl || updatedImages[index].link, // server trả về URL mới
            };

            // Cập nhật lại state (nếu dùng state)
            // setSelectedRoom({ ...selectedRoom, detail: { ...selectedRoom.detail, images: updatedImages } });

            alert("Ảnh đã được cập nhật!");
            closeModal()
            getRoom()

        } catch (err) {
            console.error(err);
            alert("Đã xảy ra lỗi khi cập nhật ảnh.");
        }
    };


    const getRoom = async () => {
        setLoading(true)
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
        } finally {
            setLoading(false);
        }
    };



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
    const handleUpdateNamePrice = async () => {
        setUpdateLoading(true)
        if (!newName) return toast.error("Bạn chưa điền tên phòng!");
        if (!newPrice) return toast.error("Bạn chưa điền giá phòng!");
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("roomId", id_Category);
        isEditMode ? formData.append("name", newName) : formData.append("price", newPrice)
        try {

            console.log("formData: ", formData.get("price"));
            console.log("formData: ", formData.get("roomId"));

            const response = await fetch("https://re-contract.vercel.app/roomOverviews/update", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();
            if (data?.errorCode === "S200") {
                toast.success(isEditMode ? "Đã sửa tên phòng!" : "Đã sửa giá phòng!");
                await getRoom();
                isEditMode? setShowNameModal(false):setShowPriceModal(false)
                // resetModal();
                
            } else {
                toast.error("Có lỗi xảy ra!");
            }
        } catch (error) {
            toast.error("Đã xảy ra lỗi ");
            console.error(error.message);
        } finally {
            setUpdateLoading(false)


        }


    }

    return (
        <div className="space-y-6">
            <div className="sticky top-4 z-10 mx-4 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md bg-white/30 border border-white/20 backdrop-saturate-150">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap">Quản lý phòng</h1>
                    {/* <button
                        onClick={handleAddRoom}
                        className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                        }}
                    >
                        <FaPlus size={14} />
                        Thêm phòng
                    </button> */}
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"
                    ></div>
                </div>

            ) : (
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
                                    <p className="text-white text-sm">{new Intl.NumberFormat('vi-VN').format(room.price)} VND/Đêm</p>
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
            )}


            {/* Dialog hiển thị chi tiết */}
            {selectedRoom && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Overlay */}
                    <div
                        className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <div
                        className={`relative bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl transform transition-all duration-300 ${showModal ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
                        >
                            ×
                        </button>

                        {/* Ảnh phòng */}
                        <div className="mb-6 flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-gray-300">
                            {Array.isArray(selectedRoom?.detail?.images) &&
                                selectedRoom.detail.images.map((img, index) => {
                                    const imgUrl = typeof img === "string" ? img : img.link;
                                    return (
                                        <div
                                            key={index}
                                            className="relative group cursor-pointer"
                                        >
                                            <img
                                                src={imgUrl}
                                                alt={`${selectedRoom.name} ${index + 1}`}
                                                className="h-[250px] w-[520px] max-w-none object-cover rounded-xl shadow-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                                            />

                                            {/* Nút tròn chỉ hiện khi hover */}
                                            <button
                                                onClick={() => handleEditImage(index, img.type, selectedRoom.detail._id, img._id)}
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-24 h-24 rounded-full bg-black/30 backdrop-blur-md 
                       text-white font-bold opacity-0 group-hover:opacity-70
                       transition duration-300 flex items-center justify-center border border-white hover:bg-black/30"
                                                title="Sửa ảnh"
                                            >
                                                Sửa ảnh
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>


                        {/* Nội dung phòng */}
                        <div className="mb-4 flex flex-col items-start gap-1">
                            {/* Tên phòng có hover zoom + mở modal */}
                            <h2
                                className="text-3xl font-bold text-gray-800 transition-transform hover:scale-105 transform origin-center cursor-pointer"
                                onClick={() => [setShowNameModal(true), setIsEditMode(true), setId_Category(selectedRoom._id)]}
                                title="Click để sửa tên"
                            >
                                {selectedRoom.name}
                            </h2>

                            {/* Giá tiền có hover zoom + mở modal */}
                            <div
                                className="text-gray-600 text-base transition-transform hover:scale-105 transform origin-center cursor-pointer"
                                onClick={() => [setShowPriceModal(true), setIsEditMode(false), setId_Category(selectedRoom._id)]}
                                title="Click để sửa giá"
                            >
                                Giá: {new Intl.NumberFormat("vi-VN").format(selectedRoom.price)} VND/Đêm
                            </div>
                        </div>





                        <p className="text-sm text-gray-700 mb-6">{selectedRoom.description}</p>

                        {/* Buttons */}
                        {/* <div className="flex justify-end gap-3">
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
                        </div> */}
                    </div>
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            {showNameModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-6 w-96 shadow-xl relative">
                        <button onClick={() => setShowNameModal(false)} className="absolute top-2 right-4 text-xl text-gray-500 hover:text-red-500">×</button>
                        <h3 className="text-lg font-semibold mb-4">Sửa tên phòng</h3>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                        <div className="flex justify-end mt-4 gap-2">
                            <button onClick={() => setShowNameModal(false)} className="px-4 py-2 text-sm border rounded text-gray-600 hover:bg-gray-100">Huỷ</button>
                            <button
                                onClick={() => {
                                    // Cập nhật tên ở đây
                                    handleUpdateNamePrice()
                                    // setShowNameModal(false);
                                }}
                                className="px-4 py-2 text-sm border rounded bg-blue-500 text-white hover:bg-blue-600"
                            >
                                Lưu
                            </button>
                        </div>
                        {Updateloading && (
                            <div className="absolute inset-0 bg-white/60 flex justify-center items-center rounded-xl z-50">
                                <div className="w-8 h-8 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {showPriceModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl p-6 w-96 shadow-xl relative">
                        <button onClick={() => setShowPriceModal(false)} className="absolute top-2 right-4 text-xl text-gray-500 hover:text-red-500">×</button>
                        <h3 className="text-lg font-semibold mb-4">Sửa giá phòng</h3>
                        <input
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                        <div className="flex justify-end mt-4 gap-2">
                            <button onClick={() => setShowPriceModal(false)} className="px-4 py-2 text-sm border rounded text-gray-600 hover:bg-gray-100">Huỷ</button>
                            <button
                                onClick={() => {
                                    // Cập nhật giá ở đây
                                    // updateRoomPrice(newPrice); // bạn phải định nghĩa hàm này
                                    handleUpdateNamePrice()
                                    // setShowPriceModal(false);
                                }}
                                className="px-4 py-2 text-sm border rounded bg-green-500 text-white hover:bg-green-600"
                            >
                                Lưu
                            </button>
                        </div>
                        {Updateloading && (
                            <div className="absolute inset-0 bg-white/60 flex justify-center items-center rounded-xl z-50">
                                <div className="w-8 h-8 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>
                </div>
            )}


        </div>
    );
}
