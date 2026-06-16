import { api } from "@/lib/api/axios";
import { CreateLeadershipPayload } from "../types/create-leadership-payload";

export const addLeadership = async (body: CreateLeadershipPayload) => {
  const { data } = await api.post("/leaderdship", body);

  return data;
};
