import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export function startMongo() {
	console.log('Starting mongoose...');
	return mongoose.connect(MONGO_URL);
}
