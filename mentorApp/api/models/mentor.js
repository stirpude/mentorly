var mongoose = require('mongoose');


//Mentor Schema

var mentorSchema = mongoose.Schema({
	mentorEmail : {
		type : String,
		required : true
	},
	mentorPass : {
		type : String,
		required : true
	},
	create_date : {
		type : Date,
		default : Date.now
	}
});

var mentor = module.exports = mongoose.model('mentor',mentorSchema);

//Get mentor
module.exports.getMentor = function(callback, limit){
	mentor.find(callback).limit(limit);
}

//Get mentor by ID
module.exports.getMentorByID = function(id, callback){
	mentor.findById(id, callback);
}

//add mentor
module.exports.addMentor = function(Mentor, callback){
	mentor.create(Mentor, callback);
}

//mentor auth
module.exports.mentorAuth = function(email,pass, callback){
	console.log("mentor with email :"+email + " |and password " + pass +" Trying to log in");
	mentor.find({ mentorEmail : email,  mentorPass : pass }, callback);
	//student.find(callback).limit(limit);
}