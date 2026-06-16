import { useQuery } from "@tanstack/react-query";
import { getPelkatQueryOptions } from "../queries/pelkat-queries";

export const usePelkat = () => useQuery(getPelkatQueryOptions());
