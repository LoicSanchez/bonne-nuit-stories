//With mongoose
// import Story from '$db/Story'

// export const load = async function () {
// 	const data = await Story.find()
// 	console.log('data', data)
// 	return {
// 		stories: data,
// 	}
// }

//With mongodb client
import { stories } from '$db/stories';

export const load = async function () {
	let data = [];
	const cursor = await stories.find({}).limit(5);
	await cursor.forEach((doc) => {
		data.push({
			_id: doc._id.toString(),
			id: doc.id,
			title: doc.title
		});
	});
	// console.log('data', data)
	return {
		stories: data
	};
};
