import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchInput() {
  return (
    <div className="flex flex-row gap-2">
      <Input placeholder="Search for a filial" className="w-[15%]" />
      <Button>...</Button>
      <Input placeholder="Search for a filial" />
    </div>
  );
}
