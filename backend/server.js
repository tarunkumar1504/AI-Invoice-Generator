require("dotenv").config();
const express = require("express")
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db");
const { env } = require("process");

const app = express()

app.use(
    cors({
        origin:"*",
        methods:["GET","PUT","POST","DELETE"],
        allowedHeaders:["Content-Type","Authorization"]
    })
)

connectDB()

app.use(express.json())

const PORT = process.env.PORT || 8000
app.listen(PORT,()=> console.log(`Server running on ${PORT}`))