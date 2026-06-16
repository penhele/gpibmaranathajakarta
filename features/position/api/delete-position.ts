import { api } from "@/lib/api/axios";

export const deletePosition = async (id: string) => {
  const { data } = await api.delete(`/positions/${id}`);

  return data;
};
