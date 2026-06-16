import { api } from "@/lib/api/axios";
import { CreatePelkatPayload } from "../types/create-pelkat-payload";

export const addPelkat = async (body: CreatePelkatPayload) => {
  const { data } = await api.post("/pelkat", body);

  return data;
};
