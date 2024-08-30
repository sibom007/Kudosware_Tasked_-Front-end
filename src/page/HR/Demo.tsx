import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Demo = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Demo</DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          side="left"
          className="bg-white/90 w-[15vw] h-20 rounded-xl">
          Email : HR@gmail.com <br /> Password : HR123
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Demo;
