import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import iconZalo from '../imgs/Zalo.png';
import { Link } from 'react-router-dom';



export default function Setting() {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showGuideModal, setShowGuideModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)
    // const [status, setStatus] = useState(false);


    const handleUpdatePass = async (status) => {
        console.log("status: ", status);
        setLoading(true)

        if (!currentPassword || !newPassword && status == true || !confirmPassword && status == true) {
            toast.error("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Mật khẩu mới và xác nhận không khớp.");
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("Mật khẩu mới và xác nhận không khớp.");
            return;
        }
        if (!email && status == false) {
            toast.error("Bạn chưa điền email");
            return;
        }
        const token = localStorage.getItem("token");
        const formData = new FormData();

        if (status) {
            formData.append("passwordNew", newPassword);
            formData.append("passwordOld", currentPassword);
        } else {
            formData.append("email", email);
        }

        try {
            console.log("formData: ", formData.get("passwordNew"));
            console.log("formData: ", formData.get("passwordOld"));
            const body = status
                ? {
                    passwordOld: currentPassword,
                    passwordNew: newPassword,
                }
                : {
                    email,
                    passwordOld: currentPassword,
                };

            const response = await fetch("https://re-contract.vercel.app/admin/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log("data: ", data);
            if (data?.result?.result === "Update successfully!") {
                toast.success("Cập nhật thành công");
                // setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
                setCurrentPassword("")
                setEmail("")
                setShowEmailModal(false)
                setShowPasswordModal(false)
            } else if (data?.result?.result === "Update fail!") {
                toast.error("Đã xảy ra lỗi hãy thử lại !");
                return;
            }



            // setCurrentPassword("");
            // setNewPassword("");
            // setConfirmPassword("");
        } catch (error) {
            toast.error("Đã xảy ra lỗi khi đăng nhập");
            console.error(error.message);
        } finally {
            setLoading(false);
        }



    }

    return (
        <div className="space-y-6">
            <div className="sticky top-4 z-10 mx-4 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md bg-white/30 border border-white/20 backdrop-saturate-150">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap">Cài đặt quản trị</h1>
                </div>
            </div>
            <div className="p-10 max-w-3xl mx-auto ">


                <div className="grid gap-6">
                    <button
                        onClick={() => setShowPasswordModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 px-5 py-2.5"
                        style={{
                            background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                        }}
                    >
                        Đổi mật khẩu
                    </button>

                    <button
                        onClick={() => setShowEmailModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 px-5 py-2.5"
                        style={{
                            background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                        }}
                    >
                        Cập nhật Email
                    </button>

                    <button
                        onClick={() => setShowGuideModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 px-5 py-2.5"
                        style={{
                            background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                        }}
                    >
                        Hướng dẫn sử dụng
                    </button>
                </div>

                {/* Modal Đổi mật khẩu */}
                {showPasswordModal && (
                    <Modal title="Đổi mật khẩu" onClose={() => setShowPasswordModal(false)}>
                        <form className="space-y-4">
                            <input
                                type="password"
                                placeholder="Mật khẩu hiện tại"
                                className="w-full px-4 py-2 border rounded-lg"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}

                            />
                            <input
                                type="password"
                                placeholder="Mật khẩu mới"
                                className="w-full px-4 py-2 border rounded-lg"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Xác nhận mật khẩu mới"
                                className="w-full px-4 py-2 border rounded-lg"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold w-full shadow transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 px-5 py-2.5"
                                style={{
                                    background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleUpdatePass(true);
                                }}
                            >
                                Cập nhật
                            </button>
                        </form>
                    </Modal>
                )}

                {/* Modal Cập nhật email */}
                {showEmailModal && (
                    <Modal title="Cập nhật Email" onClose={() => setShowEmailModal(false)}>
                        <form className="space-y-4">
                            <input
                                type="password"
                                placeholder="Mật khẩu hiện tại"
                                className="w-full px-4 py-2 border rounded-lg"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}

                            />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                placeholder="you@example.com"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold w-full shadow transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 px-5 py-2.5"
                                style={{
                                    background: "linear-gradient(135deg, #4b5f4b, #6f876f)",
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleUpdatePass(false);
                                }}
                            >
                                Cập nhật Email
                            </button>
                        </form>
                    </Modal>
                )}
                {loading && (
                    <div className="absolute inset-0 bg-white/60 flex justify-center items-center rounded-xl z-50">
                        <div className="w-8 h-8 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Modal Hướng dẫn */}
                {showGuideModal && (
                    <Modal title="Hướng dẫn sử dụng" onClose={() => setShowGuideModal(false)}>
                        <div className="text-gray-700 space-y-3">
                            <p>
                                💡 <strong>Quản lý phòng:</strong> Nhấn vào ảnh trong chi tiết phòng để cập nhật<br />
                                👉 <em>"Ảnh phòng":</em> Bạn có thể thay đổi từng ảnh phòng bằng cách di chuyển chuột vào ảnh và
                                sẽ hiển thị nút sửa ấn và cập nhật ảnh mới ở đó hãy nhớ ảnh chỉ được dưới 4mb.<br />
                                👉 <em>"Giá tiền":</em> Bạn có thể thay đổi giá tiền bằng cách di chuột vào giá ở phần chi tiết phòng
                                về ấn vào giá tiền sẽ hiện dialog để bạn sửa <br />
                                👉 <em>"Tên phòng":</em> Bạn có thể thay đổi tên phòng bằng cách di chuột vào tên ở phần chi tiết phòng
                                về ấn vào tên sẽ hiện dialog để bạn sửa <br />
                            </p>
                            <p>🖼️ <strong>Quản lý món ăn:</strong> Nhấn vào ảnh trong chi tiết món ăn để cập nhật <br />
                                👉 <em>"Ảnh":</em> Bạn có thể thay đổi ảnh của món ăn khi ấn nút sửa, ảnh dưới 4mb <br />
                                👉 <em>"Tên món và giá tiền":</em> Bạn có thể thay đổi khi ấn nút sửa và phải đủ cả 3 trường là ảnh, tên và giá
                                thì mới cập nhật được <br />
                            </p>
                            <p>✏️ <strong>Liên hệ IT:</strong> Trong trường hợp trang web gặp sự cố bạn có thể liên hệ đến: <br />
                                👉 <em>"Quản lý IT của D3labs":</em> Nguyễn Thế Hưng<br /> Hotline: 0398185315   <Link to="https://zalo.me/0398185315">    
                                    <img src={iconZalo} alt="zalo" className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                                </Link>
                            </p>

                        </div>
                    </Modal>
                )}
            </div>
        </div>

    );
}

function Modal({ title, children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative max-h-[80vh] overflow-y-auto">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-xl text-gray-400 hover:text-red-500"
                >
                    ×
                </button>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
                {children}
            </div>
        </div>
    );
}

