import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: String, required: true }
});
const userModel = mongoose.model("user", userSchema);
export { userModel };
//# sourceMappingURL=UserModel.js.map