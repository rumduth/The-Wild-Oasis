import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router";

import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParam] = useSearchParams();
  const numDays = !searchParam.get("last")
    ? 7
    : Number(searchParam.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stays, isPending } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, isPending, confirmedStays, numDays };
}
