import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema(
	{
		id: { type: String, required: [true, 'Please provide id'] },
		title: {
			type: String,
			required: [true, 'Please provide title'],
			maxlength: 200
		},
		body: [
			{
				textBits: [{ text: String, audio: String, order: Number }],
				lang: String,
				title: String
			}
		],
		tags: [String],
		lang: [{ code: String, label: String }],
		type: {
			type: String,
			enum: ['tale', 'fable', 'myth'],
			default: 'tale'
		},
		time: {
			type: Number
		},
		hidden: Boolean,
		meta: {
			views: Number,
			favs: Number
		}
	},
	{ timestamps: true }
);

export default mongoose.model('Story', StorySchema);
