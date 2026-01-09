import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
async function insertTodo() {
    const { data, error } = await supabase.from("todos").insert({ title: "have dinner", completed: false }).select();
    if (error) {
        console.log("Error in inserting");
        return;
    }
    console.log(data);
}
insertTodo();
//# sourceMappingURL=index.js.map