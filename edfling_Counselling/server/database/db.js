import mongoose from "mongoose";

const Connection = async(USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@edflingcounselling.y8eqqsc.mongodb.net/?retryWrites=true&w=majority`;
    try{
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected successfully!");
    }catch(error){
        console.log(error);
    }
}

export default Connection;