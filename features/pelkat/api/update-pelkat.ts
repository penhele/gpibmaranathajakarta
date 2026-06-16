import { api } from "@/lib/api/axios";
import { UpdatePelkatPayload } from "../types/update-pelkat-payload";

export const updatePelkat = async (id: string, body: UpdatePelkatPayload) => {
  const { data } = await api.patch(`/pelkat/${id}`, body);

  return data;
};
