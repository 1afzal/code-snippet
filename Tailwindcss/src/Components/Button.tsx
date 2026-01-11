type buttonProps = {
    text: string,
    variant?: "primary" | "secondary" | "destructive"
    size?: 
}

function Button({text, variant="primary"}: buttonProps){
    const base = "text-md font-bold py-0.5 px-2 rounded-md";
    const variants = {
            primary: "bg-blue-600 text-white border-solid border-black border-2 hover:bg-blue-800",
            secondary: "bg-blue-900 text-white border-solid border-black border-2 hover:bg-blue-700",
            destructive: "bg-red-500 text-white border-solid border-black border-2 hover:bg-red-600" 
    }
    return(
        <div className="flex h-screen justify-center items-center">
        <button className={`${base} ${variants[variant]}`}>
            {text}
        </button>
        </div>
    )
}
export default Button;
