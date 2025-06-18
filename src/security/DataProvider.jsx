import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// Tạo context
const DataContext = createContext();

// Provider dùng để bọc App
export const DataProvider = ({ children }) => {
    const [Category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const STORAGE_KEY = "cached-rooms";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://re-contract.vercel.app/data/getAllRoom", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                    // không truyền body nếu không cần
                });

                if (!response.ok) throw new Error("Server error");

                const json = await response.json();
                console.log("Full JSON:", json); // Kiểm tra

                const overviews = json?.result?.result?.[0]?.overviews;
                if (Array.isArray(overviews)) {
                    setCategory(overviews);
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(overviews));
                } else {
                    toast.error("❌ Dữ liệu phòng không hợp lệ");
                    setCategory([]);
                }
            } catch (err) {
                const cached = localStorage.getItem(STORAGE_KEY);
                if (cached) {
                    setCategory(JSON.parse(cached));
                    setError("⚠️ Dữ liệu đang bị gián đoạn");
                } else {
                    setError("❌ Không có dữ liệu và lỗi kết nối mạng.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ Category, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};

// Hook để các component khác dùng
export const useData = () => useContext(DataContext);
