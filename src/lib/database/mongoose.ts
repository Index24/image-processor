import mongoose, {Mongoose} from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    connection: Mongoose | null;
    connect: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { connection: null, connect: null };
}

export const connectToDatabase = async () => {
    if (cached.connection) {
        return cached.connection;
    }

    if (!MONGODB_URL) {
        throw new Error('MONGODB_URL is not set');
    }

    cached.connect = cached.connect || mongoose.connect(MONGODB_URL, {
        dbName: 'image-processor',
        bufferCommands: false
    });

    cached.connection = await cached.connect;

    return cached.connection; 
}