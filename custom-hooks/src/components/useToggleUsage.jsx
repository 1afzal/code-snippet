import useToogle from "./useToggle"

function useToogleUsage(){
    const [isOpen , toggle] = useToogle(false);

    return(
        <div>
        <button onClick={toggle}>
            click me
        </button>
        {isOpen && <P>Menu opened</P>}
        </div>
    )
}
export default useToogleUsage;