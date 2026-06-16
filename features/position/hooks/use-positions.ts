import { useQuery } from "@tanstack/react-query";
import { getPositionsQueryOptions } from "../queries/position-queries";

export const usePositions = () => useQuery(getPositionsQueryOptions());
