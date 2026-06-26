import { Congregation } from "@/features/congregation/types/congregation";
import { getPhoneNumber } from "@/lib/utils/get-phone-number";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const congregationColumns: ColumnDef<Congregation>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    header: "No. HP",
    cell: ({ row }) => <span>{getPhoneNumber(row.original.phone)}</span>,
  },
  {
    header: "Tanggal Lahir",
    cell: ({ row }) => (
      <span> {format(new Date(row.original.birth), "dd MMM yyyy")}</span>
    ),
  },
  {
    header: "Sektor",
    cell: ({ row }) => {
      return <span>Sektor {row.original.region.name}</span>;
    },
  },
];
