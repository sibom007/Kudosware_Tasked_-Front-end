import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";

type Tprops = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  style?: string | undefined;
  defaultValue?: string;
};

const CInput = ({
  name,
  type = "text",
  className,
  placeholder,
  defaultValue = "",
}: Tprops) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Input
          className={className}
          placeholder={placeholder}
          {...field}
          type={type}
          name={name}
          required
        />
      )}
    />
  );
};

export default CInput;
