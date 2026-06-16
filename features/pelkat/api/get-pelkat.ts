import { api } from "@/lib/api/axios";
import { Pelkat } from "../types/pelkat";

export const getPelkat = async (): Promise<Pelkat[]> => {
  const { data } = await api.get("/pelkat");

  return data;
};
