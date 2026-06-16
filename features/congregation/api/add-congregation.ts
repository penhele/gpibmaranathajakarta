import { api } from "@/lib/api/axios";
import { CreateCongregationPayload } from "../types/create-congregation-payload";

export const addCongregation = async (body: CreateCongregationPayload) => {
  const { data } = await api.post(`/congregations`, body);

  return data;
};
