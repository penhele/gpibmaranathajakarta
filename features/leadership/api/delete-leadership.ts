import { api } from "@/lib/api/axios";

export const deleteLeadership = async (id: string) => {
  const { data } = await api.delete(`/leaderships/${id}`);

  return data;
};
