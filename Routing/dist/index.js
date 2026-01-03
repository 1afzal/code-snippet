import express from "express";
const app = express();
import { userRouter } from "./routes/userRoute.js";
app.use("/user", userRouter);
app.listen(6969, () => {
    console.log("Server is live at port 6969");
});
//# sourceMappingURL=index.js.map