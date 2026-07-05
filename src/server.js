import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/data.js";
import router from "./routes/userRoutes.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 
app.use("/api", router);


app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database();");

    res.send(`Connected to database: ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).send("Error connecting to the database");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});