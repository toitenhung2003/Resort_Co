import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import { usePasswordReset } from "../security/PasswordResetContext";
import 'react-toastify/dist/ReactToastify.css';
import { encryptOtpWithAES, encryptAESKeyWithRSA } from "../utils/crypto";
import CryptoJS from "crypto-js";
import forge from "node-forge";



export default function OtpVerification() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [otpRequested, setOtpRequested] = useState(false);
    const { canAccessOTP, setCanAccessResetPassword } = usePasswordReset();

    const rawKey = process.env.REACT_APP_RSA_PUBLIC_KEY;




    if (!rawKey) {
        console.error("❌ PUBLIC_KEY không được định nghĩa trong .env");
        throw new Error("PUBLIC_KEY is missing");
    }

    // ⚠️ Nếu vẫn có \\n từ env loader, cần chuyển thành \n thực sự:
    const PUBLIC_KEY = rawKey.replace(/\\n/g, '\n');

    const getOTP = async (otp) => {
        const keyWordArray = CryptoJS.lib.WordArray.random(32); // 256-bit key
        const ivWordArray = CryptoJS.lib.WordArray.random(16);  // 128-bit IV



        // Mã hóa OTP bằng AES
        const encryptedOtp = CryptoJS.AES.encrypt(otp, keyWordArray, {
            iv: ivWordArray,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }).toString();

        // Mã hóa AES key bằng RSA OAEP
        const encryptedAESKey = encryptAESKeyWithRSA(PUBLIC_KEY, keyWordArray);
        const iv = CryptoJS.enc.Base64.stringify(ivWordArray); // vẫn gửi iv base64

        if (!encryptedAESKey) {
            toast.error("🔒 Lỗi mã hóa RSA - có thể do public key không hợp lệ");
            return;
        }

        const payload = {
            data: encryptedOtp,
            key: encryptedAESKey,
            iv: iv
        };

        try {
            const res = await fetch("https://re-contract.vercel.app/admin/resetPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            console.log("🔁 Server response:", result);

        } catch (err) {
            toast.error("Đã xảy ra lỗi khi gửi mã OTP");
            console.error(err);
        }
    };


    const generateOtp = async (e) => {
        e.preventDefault();
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otpCode);
        setOtpRequested(true);
        getOTP(otpCode);
    };

    const handleChange = (element, index) => {
        const value = element.value;
        if (!/^\d$/.test(value)) return; // Chỉ cho nhập số 0-9

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (element.nextSibling && value) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            const newOtp = [...otp];
            if (otp[index]) {
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                const prevInput = document.getElementById(`otp-${index - 1}`);
                if (prevInput) prevInput.focus();
            }
        } else if (!/^\d$/.test(e.key)) {
            e.preventDefault(); // Chặn ký tự không phải số
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp === generatedOtp) {
            toast.success("✅ Xác minh thành công!");
            setCanAccessResetPassword(true);
            navigate("/reset-password");
        } else {
            toast.error("❌ Mã OTP không đúng.");
        }
    };

    if (!canAccessOTP) {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <ToastContainer />
            <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Xác minh OTP</h2>

                {!otpRequested ? (
                    <button
                        onClick={generateOtp}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4"
                    >
                        Tạo mã OTP
                    </button>
                ) : (
                    <>
                        <div className="grid grid-cols-6 gap-2 mb-4">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    id={`otp-${i}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target, i)}
                                    onKeyDown={(e) => handleKeyDown(e, i)}
                                    className="w-full sm:w-10 h-12 text-center text-xl border rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleVerify}
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Xác minh OTP
                        </button>

                        <div className="mt-4 text-center">
                            <button
                                onClick={generateOtp}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Gửi lại mã OTP
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
