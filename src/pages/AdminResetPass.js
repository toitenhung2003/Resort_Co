import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Navigate } from "react-router-dom";
import { usePasswordReset } from "../security/PasswordResetContext";

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { canAccessResetPassword } = usePasswordReset();
    
    const navigate = useNavigate();


    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            toast.error("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Mật khẩu mới và xác nhận không khớp.");
            return;
        }

        try {
            // Gọi API đổi mật khẩu ở đây
            // const res = await fetch('/api/change-password', {...})
            // const result = await res.json();

            // Giả lập thành công
            try {
                const response = await fetch("https://re-contract.vercel.app/admin/updatePassword", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "password": newPassword }),
                });

                const data = await response.json();
                console.log("data: ", data?.result);
                if (data?.result?.result === "Update password successfully!") {
                    toast.success("Đổi mật khẩu thành công!");
                    // setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                    navigate("/admin");
                } else if (data?.result?.result === "Update password fail!") {
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
                // setLoading(false);
            }



        } catch (error) {
            toast.error("Đã xảy ra lỗi, thử lại sau.");
        }
    };

    if (!canAccessResetPassword) {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <ToastContainer />
            <form
                onSubmit={handleChangePassword}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-xl font-bold mb-6 text-center">Cập nhật mật khẩu</h2>

                {/* <div className="mb-4">
                    <label className="block mb-1 font-medium">Mật khẩu hiện tại</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                    />
                </div> */}

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Mật khẩu mới</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-medium">Xác nhận mật khẩu mới</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Cập nhật mật khẩu
                </button>
            </form>
        </div>
    );
}
