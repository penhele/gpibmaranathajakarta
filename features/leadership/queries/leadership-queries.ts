import { queryOptions } from "@tanstack/react-query";
import { leadershipKeys } from "./leadership-keys";
import { getLeadership } from "../api/get-leaderships";

export const getLeadershipQueryOptions = () =>
  queryOptions({
    queryKey: leadershipKeys.all,
    queryFn: getLeadership,
    staleTime: 1000 * 60 * 5,
  });
