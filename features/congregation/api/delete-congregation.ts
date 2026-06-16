import { api } from "@/lib/api/axios";

export const deleteCongregation = async (id: string) => {
  const { data } = await api.delete(`/congregations/${id}`);

  return data;
};
