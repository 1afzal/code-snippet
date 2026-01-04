import Button from "./components/Button"
import Input from "./components/Input";
import Card from "./components/Card";
function App() {
  return (
    <div className="bg-white">
      <Button text="push commit" variant="primary" />
      <Button text="delete commit" variant="destructive" />
      <Input variant="destructive" />
      <Card>
        <h2 className="text-lg font-semibold">
          Profile
        </h2>
        <p className="text-gray-600">
          Welcome back!
        </p>
      </Card>

      <Card variant="destructive">
        <h2 className="font-semibold text-red-700">
          Delete Account
        </h2>
        <p className="text-red-600">
          This action cannot be undone.
        </p>
      </Card>


    </div>
  )
}
export default App;