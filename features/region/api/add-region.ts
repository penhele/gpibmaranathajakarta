import { api } from "@/lib/api/axios";
import { CreateRegionPayload } from "../types/create-region-payload";

export const addRegion = async (body: CreateRegionPayload) => {
  const { data } = await api.post("/regions", body);

  return data;
};
