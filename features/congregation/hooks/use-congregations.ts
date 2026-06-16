import { useQuery } from "@tanstack/react-query";
import { getCongregationsQueryOptions } from "../queries/congregation-queries";

export const useCongregations = () => useQuery(getCongregationsQueryOptions());
