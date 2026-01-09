import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabase_url = process.env.SUPABASE_URL;
const supabase_anon_key = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(
  supabase_url!,
  supabase_anon_key!
);

async function insertData() {
  const { data, error } = await supabase
    .from("todos")
    .insert({ title: "Code all day", completed: true })
    .select();
  if (error) {
    console.log(error);
    return;
  }
  console.log("Data inserted succesfully");
  console.log(data);
}

async function insertMultiple() {
  const { data, error } = await supabase
    .from("todos")
    .insert([
      {
        title: "sleep 8 hours",
        completed: false,
      },
      {
        title: "drink 2 gallons of water",
        completed: false,
      },
      {
        title: "run for 10kms",
        conplted: true,
      },
    ])
    .select();
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
}

async function updateData() {
  const { data, error } = await supabase
    .from("todos")
    .update({ title: "sing a song" })
    .eq("title", "sleep 8 hours")
    .select();
    if(error){
        console.log(error)
        return;
    }
    console.log(data);
}

async function deleteData(){
    const { data, error } = await supabase.from("todos").delete().eq("title", "sing a song");
    if(error){
       console.log(error);
       return; 
    }
    console.log(data);
}