import { api } from "@/lib/api/axios";
import { Position } from "../types/position";

export const getPosition = async (): Promise<Position[]> => {
  const { data } = await api.get("/positions");

  return data;
};
