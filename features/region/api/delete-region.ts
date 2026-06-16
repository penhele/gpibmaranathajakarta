import { api } from "@/lib/api/axios";

export const deleteRegion = async (id: string) => {
  const { data } = await api.delete(`/regions/${id}`);

  return data;
};
