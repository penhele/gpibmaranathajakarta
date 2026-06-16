import { api } from "@/lib/api/axios";
import { CreatePositionPayload } from "../types/create-position-payload";

export const addPosition = async (body: CreatePositionPayload) => {
  const { data } = await api.post("/positions", body);

  return data;
};
