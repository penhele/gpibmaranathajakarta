import { api } from "@/lib/api/axios";

export const deletePelkat = async (id: string) => {
  const { data } = await api.delete(`/pelkat/${id}`);

  return data;
};
