import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus } from "react-icons/fa";

export default function Food() {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [Category, setCategory] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [previewMainImage, setPreviewMainImage] = useState(null);
    const [totalImageSizeError, setTotalImageSizeError] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [foodToDelete, setFoodToDelete] = useState(null);
    const [loading, setLoading] = useState(true);


    const [newFood, setNewFood] = useState({
        name: "",
        price: "",
        image: "",
        _id: ""
    });

    useEffect(() => {
        getRoom();
    }, []);

    const getRoom = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://re-contract.vercel.app/data/getAllCuisine", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error("Server error");

            const json = await response.json();
            const cuisiness = json?.result?.result?.cuisines;
            if (Array.isArray(cuisiness)) {
                setCategory(cuisiness);
            } else {
                toast.error("Lỗi lấy dữ liệu");
                setCategory([]);
            }
        } catch (error) {
            toast.error("Đã xảy ra lỗi ");
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 4 * 1024 * 1024) {
            setNewFood({ ...newFood, image: file });
            setPreviewMainImage(URL.createObjectURL(file));
        } else {
            toast.error("Ảnh vượt quá dung lượng 4MB");
        }
    };

    const handleAddFood = () => {
        setIsEditMode(false);
        setAddModalOpen(true);
        setNewFood({ name: "", price: "", image: "" });
        setPreviewMainImage(null);
    };

    const handleEditFood = (food) => {
        // console.log("edit: ", food);
        setIsEditMode(true);
        setSelectedFood(food);
        setNewFood({
            name: food.name || "",
            price: food.price || "",
            image: "", // chỉ preview, không set file,
            _id: food._id
        });
        setPreviewMainImage(food.image || null);
        setAddModalOpen(true);
    };



    const handleSaveFood = async () => {
        if (!newFood.name) return toast.error("Bạn chưa điền tên món ăn!");
        if (!newFood.price) return toast.error("Bạn chưa điền giá món ăn!");
        if (!isEditMode && !newFood.image) return toast.error("Bạn chưa có ảnh món ăn!");
        if (totalImageSizeError) return toast.error("Tổng dung lượng ảnh vượt quá 4MB!");

        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("name", newFood.name);
        formData.append("price", newFood.price);
        if (newFood.image) formData.append("image", newFood.image);
        if (isEditMode === true) formData.append("id", newFood._id);

        try {
            const url = isEditMode
                ? "https://re-contract.vercel.app/cuisines/update"
                : "https://re-contract.vercel.app/cuisines";

            const method = isEditMode ? "POST" : "POST";
            // console.log("formData: ", formData);
            const response = await fetch(url, {
                method,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();
            if (data?.errorCode === "S200") {
                toast.success(isEditMode ? "Cập nhật thành công!" : "Đã thêm món ăn!");
                getRoom();
                resetModal();
            } else {
                toast.error("Có lỗi xảy ra!");
            }
        } catch (error) {
            toast.error("Đã xảy ra lỗi ");
            console.error(error.message);
        }
    };

    const resetModal = () => {
        setAddModalOpen(false);
        setNewFood({ name: "", price: "", image: "" });
        setPreviewMainImage(null);
        setSelectedFood(null);
        setIsEditMode(false);
    };

    const openModal = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedFood(null);
    };
    const confirmDelete = (food) => {
        setFoodToDelete(food);
        setShowDeleteDialog(true);

    };
    const handleDeleteFood = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://re-contract.vercel.app/cuisines/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ id: foodToDelete._id }),
            });

            const data = await response.json();
            if (data?.errorCode === "S200") {
                toast.success("Xoá thành công!");
                getRoom();
                setShowModal(false)
            } else {
                toast.error("Xoá thất bại!");
            }
        } catch (error) {
            toast.error("Lỗi khi xoá!");
            console.error(error.message);
        } finally {
            setShowDeleteDialog(false);
            setFoodToDelete(null);
        }
    };


    return (
        <div className="space-y-6">
            <div className="sticky top-4 z-10 mx-4 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md bg-white/30 border border-white/20 backdrop-saturate-150">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap">Quản lý món ăn</h1>
                    <button
                        onClick={handleAddFood}
                        className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #4b5f4b, #6f876f)" }}
                    >
                        <FaPlus size={14} />
                        Thêm Món Ăn
                    </button>
                </div>
            </div>

            {/* Modal Thêm / Sửa */}
            {addModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={resetModal} />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 max-h-[90vh] overflow-y-auto p-6 space-y-5 z-10">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {isEditMode ? "Chỉnh sửa món ăn" : "Thêm món ăn mới"}
                        </h2>

                        <input
                            type="text"
                            placeholder="Tên món ăn"
                            value={newFood.name}
                            onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        />

                        <input
                            type="text"
                            placeholder="Giá món ăn"
                            value={newFood.price}
                            onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                        />

                        <div>
                            {!previewMainImage && (
                                <div className="relative inline-block transition-all duration-300 ease-in-out animate-fade-in">
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("foodImageInput").click()}
                                        style={{
                                            background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                                        }}
                                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-md shadow-md hover:from-green-600 hover:to-emerald-700 transition flex items-center gap-2 hover:shadow-lg hover:scale-105"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 7h4l2-3h6l2 3h4v13H3V7z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 11a3 3 0 100 6 3 3 0 000-6z"
                                            />
                                        </svg>
                                        Chọn ảnh
                                    </button>
                                    <input
                                        id="foodImageInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleMainImageChange}
                                        className="hidden"
                                    />
                                </div>
                            )}


                            {previewMainImage && (
                                <div className="relative mt-4 w-85 h-50 rounded-md overflow-hidden shadow-lg">
                                    <img
                                        src={previewMainImage}
                                        alt="Ảnh món ăn"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => {
                                            setPreviewMainImage(null);
                                            setNewFood({ ...newFood, image: "" });
                                        }}
                                        className="absolute top-1 right-1 bg-black bg-opacity-60 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                        title="Xoá ảnh"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                onClick={resetModal}
                                className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100"
                            >
                                Huỷ
                            </button>
                            <button
                                onClick={handleSaveFood}
                                className="px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition hover:shadow-lg hover:scale-105"
                                style={{
                                    background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                                }}
                            >
                                {isEditMode ? "Cập nhật" : "Gửi"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Danh sách món ăn */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"
                   ></div>
                </div>

            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10">
                    {Category?.map((food) => (
                        <div
                            key={food._id}
                            className="relative group bg-black rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent px-4 pt-4 pb-16 flex flex-col justify-end">
                                <div className="mb-2">
                                    <h2 className="text-lg font-semibold text-white">{food.name}</h2>
                                    <p className="text-white text-sm">{new Intl.NumberFormat('vi-VN').format(food.price)} VND</p>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                                <button
                                    onClick={() => openModal(food)}
                                    className="w-full text-sm font-medium text-white border border-white rounded-full py-2 transition hover:bg-white hover:text-black"
                                >
                                    Chi tiết món ăn
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {/* Modal chi tiết */}
            {selectedFood && showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-40" onClick={closeModal} />
                    <div className="relative bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            ×
                        </button>
                        <img
                            src={selectedFood.image}
                            alt={selectedFood.name}
                            className="w-full h-60 object-cover mb-4 rounded-xl"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedFood.name}</h2>
                        <p className="text-gray-600 mb-2">Giá: {new Intl.NumberFormat('vi-VN').format(selectedFood.price)} VND</p>
                        <p className="text-sm text-gray-700 mb-4">{selectedFood.description}</p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    closeModal();
                                    handleEditFood(selectedFood);
                                }}
                                className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                                Sửa
                            </button>
                            <button
                                onClick={() => confirmDelete(selectedFood)}
                                className="px-4 py-2 text-sm font-medium rounded-full border border-red-400 text-red-600 hover:bg-red-50"
                            >
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showDeleteDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowDeleteDialog(false)} />
                    <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6 z-10">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Bạn chắc chắn muốn xoá?</h3>
                        <p className="text-sm text-gray-600 mb-6">Món ăn này sẽ bị xoá vĩnh viễn khỏi danh sách.</p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowDeleteDialog(false)}
                                className="px-4 py-2 rounded-lg text-sm border border-gray-300 text-gray-600 hover:bg-gray-100"
                            >
                                Huỷ
                            </button>
                            <button
                                onClick={handleDeleteFood}
                                className="px-4 py-2 rounded-lg text-sm bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transition"
                            >
                                Xác nhận xoá
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
