"use client";

import { DataTable } from "@/components/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePelkat } from "../hooks/use-pelkat";
import { pelkatColumns } from "./pelkat-columns";
import { congregationColumns } from "./congregation-columns";
import { getInitials } from "@/lib/utils/get-initials";

export default function PelkatPage() {
  const { data: pelkat = [], isPending } = usePelkat();

  return (
    <div className="">
      <div className="space-y-4">
        <DataTable columns={pelkatColumns} data={pelkat || []} />

        {!isPending && (
          <Tabs defaultValue={pelkat[0].id} className="flex flex-col">
            <TabsList variant={"line"}>
              {pelkat.map((item) => (
                <TabsTrigger key={item.id} value={item.id}>
                  {getInitials(item.name)}
                </TabsTrigger>
              ))}
            </TabsList>

            {pelkat.map((item) => (
              <TabsContent key={item.id} value={item.id}>
                <DataTable
                  columns={congregationColumns}
                  data={item.congregations}
                />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
