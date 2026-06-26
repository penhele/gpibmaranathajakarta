import { useQuery } from "@tanstack/react-query";
import { getPelkatByIdQueryOptions } from "../queries/pelkat-queries";

export const usePelkatById = (id: string | number) =>
  useQuery(getPelkatByIdQueryOptions(id));
