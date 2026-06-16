import { useQuery } from "@tanstack/react-query";
import { getRegionsQueryOptions } from "../queries/region-queries";

export const useRegions = () => useQuery(getRegionsQueryOptions());
