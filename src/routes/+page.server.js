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
	const data = await stories.find({}, { projection: { _id: 0, title: 1 } }).toArray();
	// console.log('data', data)
	return {
		stories: data
	};
};
