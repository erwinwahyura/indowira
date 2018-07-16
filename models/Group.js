const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
	name: String,
	listuser: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
})

const Group = mongoose.model('Group', groupSchema)

module.exports = Group