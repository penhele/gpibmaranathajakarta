import { ColumnDef } from "@tanstack/react-table";
import { Congregation } from "../types/congregation";

export const congregationColumns: ColumnDef<Congregation>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    header: "No. HP",
    cell: ({ row }) => <span>{row.original.phone}</span>,
  },
  {
    header: "Sektor",
    cell: ({ row }) => <span>{row.original.region.name}</span>,
  },
  {
    header: "Pelkat",
    cell: ({ row }) => <span>{row.original.pelkat.name}</span>,
  },
];
