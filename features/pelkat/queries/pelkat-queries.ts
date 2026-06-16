import { queryOptions } from "@tanstack/react-query";
import { pelkatKeys } from "./pelkat-keys";
import { getPelkat } from "../api/get-pelkat";

export const getPelkatQueryOptions = () =>
  queryOptions({
    queryKey: pelkatKeys.all,
    queryFn: getPelkat,
    staleTime: 1000 * 60 * 5,
  });
