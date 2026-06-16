import { queryOptions } from "@tanstack/react-query";
import { positionsKeys } from "./position-keys";
import { getPosition } from "../api/get-pelkat";

export const getPositionsQueryOptions = () =>
  queryOptions({
    queryKey: positionsKeys.all,
    queryFn: getPosition,
    staleTime: 1000 * 60 * 5,
  });
