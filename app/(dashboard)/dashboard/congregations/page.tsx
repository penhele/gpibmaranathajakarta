"use client";

import { DataTable } from "@/components/data-table";
import { congregationColumns } from "@/features/congregation/components/congregation-columns";
import { useCongregations } from "@/features/congregation/hooks/use-congregations";

export default function Page() {
  const { data: congregations } = useCongregations();

  return (
    <div className="">
      <DataTable
        data={congregations || []}
        columns={congregationColumns}
        title="Database Jemaat"
      />
    </div>
  );
}
