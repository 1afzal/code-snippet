import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
    username: process.env.USERNAME || "localhost",
    password: process.env.PASSWORD || "",
    socket: {
        host: process.env.host,
        port: 6379
    }
});

client.on('error',(err:any) => console.log('Redis Client Error', err));

await client.connect();

await client.set('Student-1', 'Jogn Doe');
const result = await client.get('Student-1');
console.log(result) 
await client.set('Student-2', 'Lily philips');
const res = await client.get('Student-2');
console.log(res);

