import Story from '../models/Story.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const getStory = async (req, res) => {
	const { id: storyId } = req.params;
	const story = await Story.findOne({ id: storyId });
	if (!story) {
		throw new NotFoundError(`No story with id ${storyId}`);
	}
	res.status(StatusCodes.OK).json(story);
};
const getAllStories = async (req, res) => {
	const { search, sort } = req.query;

	const queryObject = {
		// hidden: false,
	};

	if (search) {
		queryObject.position = { $regex: search, $options: 'i' };
	}

	let result = Story.find(queryObject);

	//chain sort conditions
	if (sort === 'latest') {
		result = result.sort('-createdAt');
	}
	if (sort === 'oldest') {
		result = result.sort('createdAt');
	}
	if (sort === 'a-z') {
		result = result.sort('position');
	}
	if (sort === 'z-a') {
		result = result.sort('-position');
	}

	// setup pagination
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit; //10
	result = result.skip(skip).limit(limit);

	const stories = await result;

	const totalStories = await Story.countDocuments(queryObject);
	const numOfPages = Math.ceil(totalStories / limit);

	res.status(StatusCodes.OK).json({
		stories,
		totalStories,
		numOfPages
	});
};

const createStory = async (req, res) => {
	const { id, title, body, tags, lang, type, time } = req.body;
	// if (!position || !company) {
	// 	throw new BadRequestError('Please provide all values')
	// }

	// req.body.createdBy = req.user.userId

	const story = await Story.create(req.body);
	res.status(StatusCodes.CREATED).json({ story });
};
const updateStory = async (req, res) => {
	const { id, title, body, tags, lang, type, time } = req.body;
	// if (!position || !company) {
	// 	throw new BadRequestError('Please provide all values')
	// }

	// req.body.createdBy = req.user.userId

	const { id: storyId } = req.params;
	const story = await Story.findOne({ id: storyId });
	if (!story) {
		throw new NotFoundError(`No story with id ${storyId}`);
	}

	const updatedStory = await Story.findOneAndUpdate({ id: storyId }, req.body, {
		new: true,
		runValidators: true
	});
	res.status(StatusCodes.OK).json(updatedStory);
};

export { getAllStories, getStory, createStory, updateStory };
