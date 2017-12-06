var mongoose = require('mongoose');

//student info schema
var studentInfoSchema = mongoose.Schema({
	studentFK : {
		type : String,
		required : true
	},
	studentFullName : {
		type : String,
		required : true
	},
	studentContact : {
		type : String,
		required : true
	},
	updatedOn : {
		type : Date,
		default : Date.now
	}
});

var studentInfo = module.exports = mongoose.model('studentInfo', studentInfoSchema);

//Get studentInfo
module.exports.getStudentInfo = function(callback, limit){
	studentInfo.find(callback).limit(limit);
}

//add Student information
module.exports.addStudentInfo = function(StudentInfo, callback){
	studentInfo.create(StudentInfo, callback);
}


//Get studentInfo by ID
module.exports.getStudentInfoByID = function(id, callback){
	studentInfo.find({ studentFK : id }, callback);
}
