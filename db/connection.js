import mongoose from "mongoose";
import dns from 'node:dns';//because DNS server is refusing DNS lookup
dns.setServers(['8.8.8.8', '8.8.4.4']);

export default async function connectToDB(){
    try {
        const mongooseConnection = await mongoose.connect(process.env.MONGO_URI)
        console.log('MogoDB Connected', mongooseConnection.connection.name);
        
    } catch (err) {
        console.error('Connection Error:', err.message);
        
    }
}