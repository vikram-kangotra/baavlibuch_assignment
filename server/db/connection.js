import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.log(e);
});

const connectionSchema = new mongoose.Schema({
    connectionCount: { type: Number, default: 0 }
});

const Connection = mongoose.model('Connection', connectionSchema);

export default Connection;
