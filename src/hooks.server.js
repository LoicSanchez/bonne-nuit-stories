//With mongoose
// import { startMongo } from '$db/connect.js'
//with mongodb client:
import { startMongo } from '$db/mongo';

startMongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch((e) => {
		console.error(e);
	});
