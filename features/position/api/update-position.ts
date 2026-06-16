import { api } from "@/lib/api/axios";
import { UpdatePositionPayload } from "../types/update-position-payload";

export const updatePosition = async (
  id: string,
  body: UpdatePositionPayload,
) => {
  const { data } = await api.patch(`/positions/${id}`, body);

  return data;
};
