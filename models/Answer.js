const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
	answerBody: {
		type: String,
		required: [true, 'Fill the Message please!']
	},
	parent: {
		type: Schema.Types.ObjectId,
		ref: 'NewsFeed'
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer