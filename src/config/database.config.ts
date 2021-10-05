import mongoose from 'mongoose';
import Config from './env.config';

export const connectDb = async () =>
    mongoose.connect(Config.mongodb.uri);
