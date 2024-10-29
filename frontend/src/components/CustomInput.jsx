const CustomInput = ({ placeholder, label, onChange, value }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-sm font-medium text-text-300">{label}</span>
      <input
        className="focus:outline-none text-sm bg-surface-100 focus:border-none p-2 rounded-md focus:ring-2 focus:ring-surface-300"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div className="w-full bg-white" />
    </div>
  );
};

export default CustomInput;
