var mongoose = require('mongoose');

// Student Schema

var studentSchema = mongoose.Schema({
	studentEmail : {
		type : String,
		required : true
	},
	studentPass : {
		type : String,
		required : true
	},
	create_date : {
		type : Date,
		default : Date.now
	}
});

var student = module.exports = mongoose.model('student', studentSchema);

//Get student
module.exports.getStudent = function(callback, limit){
	student.find(callback).limit(limit);
}

//Get student by ID
module.exports.getStudentByID = function(id, callback){
	student.findById(id, callback);
}

//add Student
module.exports.addStudent = function(Student, callback){
	student.create(Student, callback);
}

//student auth
module.exports.studentAuth = function(email,pass, callback){
	console.log("User with email :"+email + " |and password " + pass +" Trying to log in");
	student.find({ studentEmail : email,  studentPass : pass }, callback);
	//student.find(callback).limit(limit);
}