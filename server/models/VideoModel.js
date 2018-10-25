var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var VideoSchema = new Schema({
	'videoId' : String,
	'likes' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

module.exports = mongoose.model('Video', VideoSchema);
