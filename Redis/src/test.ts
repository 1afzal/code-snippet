import express from "express";
import axios from "axios";
import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const redis = new Redis({
    host: "localhost",
    port: 6379,
    password: process.env.PASSWORD,
    db: 0
});

app.get("/todos", async (req, res) => {
  try {
    const cacheKey = "todos";
    
    const cachedData = await redis.get(cacheKey);
    
    if (cachedData) {
      console.log("Cache hit");
      return res.status(200).json(JSON.parse(cachedData));
    }
    
    // Cache miss - fetch from API
    console.log("Cache miss - fetching from API");
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    

    await redis.setex(cacheKey, 30, JSON.stringify(response.data));
    
    res.status(200).json(response.data);
    
  } catch (error:any) {
    console.error("Error:", error?.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(6969, () => {
  console.log("Server is live on port 6969");
});