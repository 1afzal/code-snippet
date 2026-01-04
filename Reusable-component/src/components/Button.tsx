type ButtonProps = {
    text: string
    variant?: "default" | "primary" | "destructive"
};

function Button({text, variant="default"}:ButtonProps ){
    const base = "px-4 py-2 rounded text-md"

    const variants = {
        default: "bg-yellow text-black border border-gray-300 hover:bg-gray-100 rounded",
        primary: "bg-green-700 text-white border border-green-800 hover:bg-green-800 rounded",
        destructive: "bg-red-600 text-white border border-red-800 hover:bg-red-700 rounded",
    }
    return(
        <button className={`${base}${variants[variant]}`}>
            {text}
        </button>
    )
}
export default Button;
