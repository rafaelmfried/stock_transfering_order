import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchInput() {
  return (
    <div className="flex gap-1">
      <Input placeholder="Search for a filial" />
      <Button>Search</Button>
      <Input placeholder="Search for a filial" />
    </div>
  );
}
