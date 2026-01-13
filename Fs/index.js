import fs from "fs/promises";
import fss from "fs";

// Async read (Promise-based)
async function readAsync() {
  try {
    const data = await fs.readFile("./info.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Sync read
function readDataSync(){
    const syncData = fss.readFileSync("info.txt", "utf-8");
    console.log(syncData);
}

// Async write
async function asyncWriteFs() {
  try {
    await fs.writeFile("demo.txt", "This is a demo message", "utf-8");
  } catch (err) {
    console.error(err);
  }
}

function WriteFilesSync(){
    fss.writeFileSync('demo.txt',"This is 2nd message", 'utf-8');
    console.log("Written Syncronously succesfully")
}

function AppendFile(){
    const log = `${new Date().toISOString()}`
    try{
        fs.appendFile('demo.log',log,'utf-8');
        console.log("Appended succesfully");
    }
    catch(err){
        console.log(err);
    }
}

async function WriteMultiple(){
    try{
        const file = await fs.open(`demo.txt`, 'w');
        await file.write("line-1\n", "utf-8");
        await file.write("line-2", "utf-8");
    }
    catch(err){
        console.log(err);
    }
}
// readAsync();
// asyncWriteFs();
// readDataSync();
//WriteFilesSync()
// AppendFile();
// WriteMultiple()


async function readFileAsync2(){
  const response = await fs.readFile("demo.txt", "utf-8");
  console.log(response);
}


function readFileSync2(){
  const response = fss.readFileSync("demo.txt","utf-8")
  console.log(response)

}
readFileSync2()
