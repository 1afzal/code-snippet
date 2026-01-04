type InputProps = {
    label?: string;
    placeholder?: string;
    type?: "text" | "email" | "password";
    error?: string;
    variant?: "primary" | "destructive";
  };
  
  function Input({
    label,
    placeholder,
    type = "text",
    error,
    variant = "primary",
  }: InputProps) {
    const base =
      "text-md px-3 py-2 border rounded outline-none";
  
    const variants = {
      primary: "border-gray-300 focus:border-black",
      destructive: "border-red-500 focus:border-red-700",
    };
  
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium">
            {label}
          </label>
        )}
  
        <input
          type={type}
          placeholder={placeholder}
          className={`${base} ${variants[variant]}`}
        />
  
        {error && (
          <span className="text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
  
  export default Input;
  