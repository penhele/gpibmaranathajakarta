import { Leadership } from "@/features/leadership/types/leadership";
import { Pelkat } from "@/features/pelkat/types/pelkat";
import { Region } from "@/features/region/types/region";

export interface Congregation {
  id: string;
  name: string;
  phone: string;
  birth: Date;
  region: Region;
  pelkat: Pelkat;
  leadership: Leadership;
  createdAt: Date;
  updatedAt: Date;
}
