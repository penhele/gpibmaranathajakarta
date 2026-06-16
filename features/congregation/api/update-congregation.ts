import { api } from "@/lib/api/axios";
import { UpdateCongregationPayload } from "../types/update-congregation-payload";

export const updateCongregation = async (
  id: string,
  body: UpdateCongregationPayload,
) => {
  const { data } = await api.patch(`/congregations/${id}`, body);

  return data;
};
