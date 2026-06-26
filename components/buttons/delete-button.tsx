import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteButton() {
  return (
    <Button variant={"outline"} size={"icon-sm"}>
      <Trash2 />
    </Button>
  );
}
