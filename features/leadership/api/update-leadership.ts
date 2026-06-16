import { api } from "@/lib/api/axios";
import { UpdateLeadershipPayload } from "../types/update-leadership-payload";

export const updateLeadership = async (
  id: string,
  body: UpdateLeadershipPayload,
) => {
  const { data } = await api.patch(`/leaderships/${id}`, body);

  return data;
};
