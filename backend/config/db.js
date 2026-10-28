// getting-started.js
const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{})
        console.log("MongoDB CONNECTED")
    } catch (error) {
        console.log("Error in connecting DB",error)
        process.exit(1)
    }
}

module.exports = connectDB