import { Congregation } from "@/features/congregation/types/congregation";

export interface Pelkat {
  id: string;
  name: string;
  description: string;
  congregations: Congregation[];
  createdAt: Date;
  updatedAt: Date;
}
