import mongoose from "mongoose";
const connectDB=async() =>{
    await mongoose.connect(process.env.MONGO_URI).then( ()=>{
        console.log("MongoDB connected");
    }).catch( (error)=>{
        console.error("Error connecting to MongoDB:",error);
    })
};

export default connectDB;