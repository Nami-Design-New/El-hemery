import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetProfile(enabled = true) {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["user-profile", lang],
    queryFn: async () => {
      const res = await axiosInstance.get("/user-detail");
      console.log("PROFILE RESPONSE:", res.data);
      return res.data.data; 
    },
       enabled,
  });

  return { isLoading, data, error, refetch };
}

