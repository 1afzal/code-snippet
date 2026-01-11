type formProps = {
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    children?: React.ReactNode,
    className: string
}
function Form({children, onSubmit, className}:formProps){
    return(
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    )
}
export default Form;
