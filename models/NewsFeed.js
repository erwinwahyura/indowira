const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsfeedSchema = new Schema({
	bodymessage: String,
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	likes: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
})

const NewsFeed = mongoose.model('NewsFeed', newsfeedSchema)

module.exports = NewsFeed