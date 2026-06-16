import { queryOptions } from "@tanstack/react-query";
import { congregationsKeys } from "./congregation-keys";
import { getCongregations } from "../api/get-congregations";

export const getCongregationsQueryOptions = () =>
  queryOptions({
    queryKey: congregationsKeys.all,
    queryFn: getCongregations,
    staleTime: 1000 * 60 * 5,
  });
