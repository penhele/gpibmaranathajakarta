import { api } from "@/lib/api/axios";
import { Region } from "../types/region";

export const getRegion = async (): Promise<Region[]> => {
  const { data } = await api.get("/regions");

  return data;
};
