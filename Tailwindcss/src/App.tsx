import Title from "./Components/Title";
import Button from "./Components/Button";
import Card from "./Components/Card";

function App() {
    return (
        <div>
            {/* <Title text="Welcome to Tailwindcss"  variant="destructive"/> */}
            {/* <Button text="click me " variant="primary"/>
            <Button text="click me " variant="secondary"/>
            <Button text="click me " variant="destructive"/> */}
            <div className="flex items-center justify-center align-center h-screen">
            <Card className="max-w-sm" variant="destructive">
                <h1 className="text-lg font-semibold mb-2 font-bold">What is Lorem Ipsum? </h1>
                <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Card>
            </div>

        </div>
    )
}
export default App;