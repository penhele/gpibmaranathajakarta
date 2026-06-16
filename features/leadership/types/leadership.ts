import { Congregation } from "@/features/congregation/types/congregation";
import { Pelkat } from "@/features/pelkat/types/pelkat";
import { Position } from "@/features/position/types/position";

export interface Leadership {
  id: string;
  position: Position;
  congregation: Congregation;
  pelkat: Pelkat;
  createdAt: Date;
  updatedAt: Date;
}
