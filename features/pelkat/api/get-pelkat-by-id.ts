import { api } from "@/lib/api/axios";

export const getPelkatById = async (id: string | number) => {
  const { data } = await api.get(`/pelkat/${id}`);

  return data;
};
