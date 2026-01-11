type AppProps ={
    text: string,
    variant? : "primary" | "destructive"
}
function Title({text, variant = "primary"}: AppProps){
    const base = "font-black text-4xl flex justify-center items-center align-center h-screen";
    const variants = {
        primary: "text-blue-900",
        destructive: "text-red-500"
    }
    return(
        <div className={`${base} ${variants[variant]}`}>
            <h1>{text}</h1>
        </div>
    )
}
export default Title;
