import mongoose, { connect } from "mongoose";
import { config } from "../utils/config";
// mongoose.set('strictQuery', false)
const { mongodburl } = config;
// console.log(config,">>>>>>>>>>>>>>config>>>>>>>>>>>");
// const mongodburl = "mongodb+srv://naveen:naveen@cluster0.binhdte.mongodb.net/ratingreviewApp?retryWrites=true&w=majority"
const connectDb = async ()=>{
    try {
        mongoose.connect("mongodb+srv://anushkatyagi:anushka1234@cluster0.pxnnr4n.mongodb.net/crud?retryWrites=true&w=majority");
        console.log("DB is connected!");
    } catch (error) {
        console.log("db  is not conneted !");
    }
}

export default connectDb;