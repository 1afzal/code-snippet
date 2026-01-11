import Title from "./Components/Title";
import Button from "./Components/Button";
function App(){
    return(
        <div>
            {/* <Title text="Welcome to Tailwindcss"  variant="destructive"/> */}
            <Button text="click me " variant="primary"/>
            <Button text="click me " variant="secondary"/>
            <Button text="click me " variant="destructive"/>
        </div>
    )
}
export default App;