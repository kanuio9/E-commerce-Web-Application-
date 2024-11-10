const { mongoose } = require("mongoose");


const dbURL = process.env.ATLAS_URL;

const connectDB = () => {
    return mongoose.connect(dbURL);
}

module.exports = { connectDB };