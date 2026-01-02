"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../middleware/multer"));
const app = (0, express_1.default)();
app.post("/upload", multer_1.default.single("file"), (req, res) => {
    res.status(200).json({
        message: "upload succesfull"
    });
});
app.listen(6969, () => {
    console.log('server live at port 6969');
});
//# sourceMappingURL=index.js.map