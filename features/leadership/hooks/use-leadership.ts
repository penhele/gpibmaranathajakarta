import { useQuery } from "@tanstack/react-query";
import { getLeadershipQueryOptions } from "../queries/leadership-queries";

export const useLeadership = () => useQuery(getLeadershipQueryOptions());
