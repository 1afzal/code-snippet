type CardProps = {
    children: React.ReactNode;
    variant?: "primary" | "destructive";
  };
  
  function Card({ children, variant = "primary" }: CardProps) {
    const baseStyle =
      "border shadow-sm p-4";
  
    const variants = {
      primary: "border-gray-300 bg-white rounded-md",
      destructive: "border-red-600 bg-red-50 rounded-md",
    };
  
    return (
      <div className={`${baseStyle} ${variants[variant]}`}>
        {children}
      </div>
    );
  }
  
  export default Card;
  