import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { useSelector } from "react-redux";

export default function useGetHelp() {
 const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["register-help", lang],
    queryFn: async () => {
      const res = await axiosInstance.get("/register-help");
      return res.data.data; 
    },
  });
    return { isLoading, data, error, refetch };

}
