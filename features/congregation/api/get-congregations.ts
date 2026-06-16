import { api } from "@/lib/api/axios";
import { Congregation } from "../types/congregation";

export const getCongregations = async (): Promise<Congregation[]> => {
  const { data } = await api.get("/congregations");

  return data;
};
