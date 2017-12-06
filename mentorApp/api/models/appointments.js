var mongoose = require('mongoose');

//appointments schema and details
var appointmentsSchema = mongoose.Schema({
	studentFK : {
		type : String,
		required : true
	},
	mentorFK : {
		type : String,
		required : true
	},
	mentorSessionFK : {
		type : String,
		required : true
	},
	appointmentFrom : {
		type : Date,
		required : true
	},
	appointmentTill : {
		type : Date,
		required : true
	},
	NumberOfStudents : {
		type : String,
		required : true
	},
	ClassType : {
		type : Boolean,
		required : true,
		default : false
	},
	create_date : {
		type : Date,
		default : Date.now
	}
});

var appointment = module.exports = mongoose.model('appointment', appointmentsSchema);

//Get appointments 
module.exports.getAppointments = function(callback, limit){
	appointment.find(callback).limit(limit);
}

//Add appointments 
module.exports.addAppointments = function(Appointment, callback){
	appointment.create(Appointment, callback);
}


//Get appointment by mentorID
module.exports.getAppointmentsByMentorID = function(id, callback){
	appointment.find({ mentorFK : id }, callback);
}

//Get appointment by studnetID
module.exports.getAppointmentsByStudentID = function(id, callback){
	appointment.find({ studentFK : id }, callback);
}
