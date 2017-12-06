var mongoose = require('mongoose');

//mentor info schema
var mentorInfoSchema = mongoose.Schema({
	mentorFK : {
		type : String,
		required : true
	},
	mentorFullName : {
		type : String,
		required : true
	},
	mentorContact : {
		type : String,
		required : true
	},
	major : {
		type : String,
		required : true
	},
	profession : {
		type : String,
		required : true
	},
	updatedOn : {
		type : Date,
		default : Date.now
	}
});

var mentorInfo = module.exports = mongoose.model('mentorInfo', mentorInfoSchema);

//Get mentortInfo
module.exports.getMentorInfo = function(callback, limit){
	mentorInfo.find(callback).limit(limit);
}

//add mentorinfo information
module.exports.addMentorInfo = function(MentorInfo, callback){
	mentorInfo.create(MentorInfo, callback);
}

//Get mentorInfo by ID
module.exports.getMentorInfoByID = function(id, callback){
	mentorInfo.find({ mentorFK : id }, callback);
}
