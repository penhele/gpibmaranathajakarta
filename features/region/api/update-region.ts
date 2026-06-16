import { api } from "@/lib/api/axios";
import { UpdateRegionPayload } from "../types/update-region-payload";

export const updateRegion = async (id: string, body: UpdateRegionPayload) => {
  const { data } = await api.patch(`/regions/${id}`, body);

  return data;
};
