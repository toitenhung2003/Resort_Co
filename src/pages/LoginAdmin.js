import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePasswordReset } from "../security/PasswordResetContext";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setCanAccessOTP } = usePasswordReset();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://re-contract.vercel.app/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      const result = data?.result?.result;

      if (result === "Email wrong!") {
        toast.error("Email không đúng");
      } else if (result === "Password incorrect") {
        toast.error("Mật khẩu không đúng");
      } else {
        localStorage.setItem("token", result?.accessToken);
        toast.success("Đăng nhập thành công");
        navigate("/home-admin");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đăng nhập");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOTP = async () =>{
    setCanAccessOTP(true);
    navigate("/send-otp");

  }

  if (isLoggedIn) {
    return <Navigate to="/home-admin" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <div className="mt-2 text-right">
              <button
                type="button"
                onClick={() => handleOTP()}
                className="text-sm text-blue-600 hover:underline"
              >
                Quên mật khẩu?
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg flex items-center justify-center transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <FiLoader className="animate-spin text-white" size={20} />
            ) : (
              "Đăng nhập"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
