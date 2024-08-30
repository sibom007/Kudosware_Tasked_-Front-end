import { Controller, useFormContext } from "react-hook-form";
type Tprops = {
  name: string;

  items: string[];
  className?: string;
  required?: boolean;
};

const CSelectField = ({ items, name, required, className }: Tprops) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <select
          style={{ borderRadius: "6px" }}
          {...field}
          id={name}
          className={className}
          required={required}>
          <option className="bg-cyan-700" value="">
            Technical
          </option>
          {items.map((item) => (
            <option
              className="text-md bg-cyan-700 text-white font-damion "
              key={item}
              value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    />
  );
};

export default CSelectField;
