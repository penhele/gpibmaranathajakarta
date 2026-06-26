import { ColumnDef } from "@tanstack/react-table";
import { Pelkat } from "../types/pelkat";
import DeleteButton from "@/components/buttons/delete-button";

export const pelkatColumns: ColumnDef<Pelkat>[] = [
  {
    accessorKey: "id",
    header: "ID Pelkat",
  },
  {
    accessorKey: "name",
    header: "Pelkat",
  },
  {
    header: "Total Jemaat",
    cell: ({ row }) => {
      return <span>{row.original.congregations.length}</span>;
    },
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      return (
        <div className="">
          <DeleteButton />
        </div>
      );
    },
  },
];
