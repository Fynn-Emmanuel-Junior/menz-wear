import mongoose from "mongoose";

const dbConnect = () => {
    try {
        const conn = mongoose.connect({uri: ''})
        console.log('database connected')
    }
    catch(error) {
        console.log('Database connection error')
    }
}

module.exports = dbConnect