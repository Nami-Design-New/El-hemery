import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useSettings() {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axiosInstance.get("/setting");
        if (res.data.code === 200) {
          setSettings(res.data.data);
        } else {
          setError("Failed to fetch settings");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, isLoading, error };
}
