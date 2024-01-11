const { Schema, model, models } = require('mongoose');

const commentSchema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		blogId: {
			type: Schema.Types.ObjectId,
			ref: 'blog',
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
	},
	{ timestamps: true }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
