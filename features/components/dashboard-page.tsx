"use client";

import { useCongregations } from "../congregation/hooks/use-congregations";

export default function DashboardPage() {
  const { data } = useCongregations();
  console.log(data);

  return (
    <div className="">
      {data?.map((item) => (
        <span>{item.name}</span>
      ))}
      halo dunia
    </div>
  );
}
