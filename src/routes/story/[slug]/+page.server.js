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
import { error } from '@sveltejs/kit';

export const load = async function ({ params }) {
	// console.log(params.slug);

	const query = { id: params.slug, hidden: { $ne: true } };
	const filter = {
		$inc: {
			'meta.views': 1
		}
	};
	const options = {
		// Include only some fields in the returned document
		projection: { _id: 0, title: 1, type: 2, tags: 3, body: 4, lang: 5 }
	};
	// this method returns the matched document, not a cursor
	const data = await stories.findOneAndUpdate(query, filter, options);

	// console.log('data', JSON.parse(JSON.stringify(data.value)));
	let jsonData = JSON.parse(JSON.stringify(data.value));
	let body = jsonData.body;

	if (body[0].textBits.length != body[1].textBits.length) {
		throw error(400, 'issue');
	}
	if (!data.value) {
		throw error(400, `No story with id ${params.slug}`);
	}
	return {
		story: JSON.parse(JSON.stringify(data.value))
	};
};
