import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // Giả sử token lưu ở localStorage

  if (!token) {
    // Chưa đăng nhập → chuyển về trang login
    return <Navigate to="/admin" replace />;
  }

  // Đã đăng nhập → render component con (Admin)
  return children;
}