import { queryOptions } from "@tanstack/react-query";
import { regionsKeys } from "./region-keys";
import { getRegion } from "../api/get-regions";

export const getRegionsQueryOptions = () =>
  queryOptions({
    queryKey: regionsKeys.all,
    queryFn: getRegion,
    staleTime: 1000 * 60 * 5,
  });
