export default function Input({
  placeholder,
  icon,
  value,
  setValue,
  right,
  className
}: {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  icon?: JSX.Element;
  right?: boolean;
  className?: string
}) {
  return (
    <div className="flex items-center gap-2 w-full justify-between">
      {!right && icon}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={"bg-transparent w-full appearance-none outline-none " + className}
        type="text"
        placeholder={placeholder}
      />
      {right && icon}
    </div>
  );
}
