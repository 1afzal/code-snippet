type CardProps = {
    children: React.ReactNode;
    variant?: "primary" | "destructive";
    className?: string
  };
  
  function Card({ children, variant = "primary", className="" }: CardProps) {
    const base =
      "rounded-lg border-2 p-4 shadow-sm transition-colors duration-200";
  
    const variants = {
      primary: "bg-white border-gray-300 text-gray-900",
      destructive: "bg-red-50 border-red-400 text-red-900",
    };
  
    return (
      <div className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </div>
    );
  }
  
  export default Card;
  