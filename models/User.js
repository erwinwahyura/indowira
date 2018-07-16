const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  gender: String,
  dob: Date,
  password: String,
  listgroup: [{
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User