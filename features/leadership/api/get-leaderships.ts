import { api } from "@/lib/api/axios";
import { Leadership } from "../types/leadership";

export const getLeadership = async (): Promise<Leadership[]> => {
  const { data } = await api.get("/leaderdship");

  return data;
};
