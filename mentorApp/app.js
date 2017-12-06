var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const routesStudents = require('./api/routes/mentorRoutes');
const routesMentors = require('./api/routes/studentRoutes');
const routesStudentInfo = require('./api/routes/studentInfoRoutes');
const routesMentorInfo = require('./api/routes/mentorInfoRoutes');
const mentorSessionRoutes = require('./api/routes/mentorSessionsRoutes');
const appointmentsRoutes = require('./api/routes/appointmentRoutes');

app.use(express.static(__dirname + '/Client'));
app.use(express.static(__dirname + '/Client/scripts'));
app.use(session({secret:"df8euf89e9e3jbejs8898fdbf", resave:false,saveUnitialized:true}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cookieParser());
		
app.use('/', routesStudents);
app.use('/', routesMentors);
app.use('/', routesStudentInfo);
app.use('/', routesMentorInfo);
app.use('/', mentorSessionRoutes);
app.use('/', appointmentsRoutes);

student = require('./api/models/student');
mentor = require('./api/models/mentor');
studentInfo = require('./api/models/studentInfo');
mentorInfo = require('./api/models/mentorInfo');
mentorSession = require('./api/models/mentorSessions');
appointment = require('./api/models/appointments.js');

app.get('/register', function(req, res){
	res.sendFile(__dirname + "/Client/register.html");
});

app.get('/error', function(req, res){
	res.sendFile(__dirname + "/Client/error.html");
});

app.get('/studentinfo', function(req, res){
	res.sendFile(__dirname + "/Client/studentinfo.html");
});

app.get('/mentorinfo', function(req, res){
	res.sendFile(__dirname + "/Client/mentorinfo.html");
});

app.get('/studentdashboard', function(req, res){
	console.log(req.body);
	if(!req.session.student){
		return res.status(401).send()
	}
	console.log("$LOG : Fetching student information...")
	if(!req.session.studentinfo){
		console.log("$LOG : Redirecting to API for student information by ID with ID : "+req.session.student[0]._id);
		res.redirect('/api/studentinfo/'+req.session.student[0]._id);
		
	}
	console.log("$LOG : Loading dashboard....")
	res.cookie('type','Student',Date.now() + (10*60*1000));
	res.cookie('profession','Student',Date.now() + (10*60*1000));
	res.sendFile(__dirname + "/Client/dashboard.html");
});

app.get('/mentordashboard', function(req, res){
	if(!req.session.mentor){
		return res.status(401).send()
	}
	console.log("$LOG : Fetching mentor information...")
	if(!req.session.mentorinfo){
		console.log("$LOG : Redirecting to API for mentor information by ID with ID : "+req.session.mentor[0]._id);
		res.redirect('/api/mentorinfo/'+req.session.mentor[0]._id);
		
	}
	console.log("$LOG : Searching all mentor sessions with mentor ID - " + req.session.mentor[0]._id);
	res.redirect('/api/mentorclasses/'+req.session.mentor[0]._id);
});

app.get('/getMentoDetails', function(req, res){
	console.log("came here now");
	res.redirect('/api/mentorInfo/getDetails');
})

app.get('/mentordashboardview', function(req, res){
	if(!req.session.mentor){
		return res.status(401).send()
	}
	console.log("$LOG : Loading mentor dashboard....")
	res.sendFile(__dirname + "/Client/mentordashboard.html");
});

app.get('/logout', function(req, res){
	if(!req.session.student && !req.session.mentor){
		res.redirect('/error')
	}
	req.session.destroy();
	res.redirect('/');
});



//connection to mongoose
mongoose.connect('mongodb://localhost/mentorstudent');
var db = mongoose.connection;

app.listen(3000);
console.log("App started running on port 3000")