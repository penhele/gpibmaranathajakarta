import { queryOptions } from "@tanstack/react-query";
import { pelkatKeys } from "./pelkat-keys";
import { getPelkat } from "../api/get-pelkat";
import { getPelkatById } from "../api/get-pelkat-by-id";

export const getPelkatQueryOptions = () =>
  queryOptions({
    queryKey: pelkatKeys.all,
    queryFn: getPelkat,
    staleTime: 1000 * 60 * 5,
  });

export const getPelkatByIdQueryOptions = (id: string | number) =>
  queryOptions({
    queryKey: pelkatKeys.deatil(id),
    queryFn: () => getPelkatById(id),
    staleTime: 1000 * 60 * 5,
  });
