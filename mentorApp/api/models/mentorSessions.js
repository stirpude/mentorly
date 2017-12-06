var mongoose = require('mongoose');

//Mentor available sessions schema
var mentorSessionSchema = mongoose.Schema({
	mentorFK : {
		type : String,
		required : true
	},
	mentorType : {
		type : String,
		required : true
	},
	subject : {
		type : String,
		required : true
	},
	availableFrom : {
		type : Date,
		required : true
	},
	availableTill : {
		type : Date,
		required : true
	},
	weekends : {
		type : Boolean,
		required : true
	},
	create_date : {
		type : Date,
		default : Date.now
	}
});

var mentorSession  = module.exports = mongoose.model('mentorSession',mentorSessionSchema);

//Get mentor session
module.exports.getMentorSession = function(callback, limit){
	mentorSession.find(callback).limit(limit);
}

//add mentor session
module.exports.addMentorSession = function(MentorInfo, callback){
	mentorSession.create(MentorInfo, callback);
}

//Get mentorSessions by mentor ID
module.exports.getMentorsessionByMentorID = function(id, callback){
	mentorSession.find({ mentorFK : id }, callback);
}

//Get mentorSessions by class
module.exports.getMentorsessionByClass = function(id, callback){
	mentorSession.find({ subject : id }, callback);
}
