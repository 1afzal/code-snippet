type buttonProps = {
    text: string,
    variant?: "primary" | "secondary" | "destructive"
    size?: "sm" | "md" | "lg"
}

function Button({text, variant="primary", size="md"}: buttonProps){
    const base = "text-md font-bold py-0.5 px-2 rounded-md";
    const variants = {
            primary: "bg-blue-600 text-white border-solid border-black border-2 hover:bg-blue-800",
            secondary: "bg-blue-900 text-white border-solid border-black border-2 hover:bg-blue-700",
            destructive: "bg-red-500 text-white border-solid border-black border-2 hover:bg-red-600" 
    }
    const sizes = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg"
    }
    return(
        <div className="flex h-screen justify-center items-center">
        <button className={`${base} ${variants[variant]} ${sizes[size]}`}>
            {text}
        </button>
        </div>
    )
}
export default Button;
