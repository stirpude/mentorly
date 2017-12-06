const routes = require('express').Router();


// Appointments and bookings related api and services
//Get all appointments
routes.get('/api/appointments', function(req, res){
	appointment.getAppointments(function(err, appointment){
		if(err){
			throw err;
		}
		res.json(appointment);
	})
});


//Add appointments
routes.post('/api/appointments', function(req, res){
	var Appointment = req.body;
	appointment.addAppointments(Appointment, function(err, appointment){
		if(err){
			throw err;
		}
		res.json(Appointment);
	})
});

//get appointments by mentor ID
routes.get('/api/appointments/mentor/:_id', function(req, res){
	appointment.getAppointmentsByMentorID(req.params._id, function(err, appointment){
		if(err){
			throw err;
		}
		res.json(appointment);
	})
});

//get appointments by student ID
routes.get('/api/appointments/student/:_id', function(req, res){
	appointment.getAppointmentsByStudentID(req.params._id, function(err, appointment){
		if(err){
			throw err;
		}
		res.json(appointment);
	})
});


module.exports = routes;
