import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
import { userModel } from "./models/UserModel.js";
function connectDB() {
    mongoose.connect(MONGO_URI || "").then(() => {
        console.log("MongoDB connected succesfully");
    });
}
connectDB();
async function insertDB() {
    const user = {
        name: "John Doe",
        age: 22,
    };
    const newUser = await userModel.create({
        name: user.name,
        age: user.age.toString()
    });
    console.log(newUser);
}
async function deleteOne() {
    const deletedUser = await userModel.findOneAndDelete({ name: "John Doe" });
    if (deletedUser) {
        console.log("succesfully deleted");
    }
}
async function deleteMany() {
    await userModel.deleteMany({});
    console.log("successfully deleted");
}
async function fetchAll() {
    const users = await userModel.find({});
    console.log(users);
}
// insertDB()
// deleteOne()
fetchAll();
// deleteMany()
//# sourceMappingURL=index.js.map