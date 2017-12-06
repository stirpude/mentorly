const routes = require('express').Router();

//StudentInfo related routes and APIs call
//Get all studentsInfo
routes.get('/api/studentinfo', function(req, res){
	studentInfo.getStudentInfo(function(err, studentInfo){
		if(err){
			res.redirect('/error');
			throw err;
		}
		res.json(studentInfo);
	})
});

//add student information
routes.post('/api/studentinfo', function(req, res){
	console.log(req.session.student._id);
	req.body.studentFK = req.session.student._id;
	var StudentInfo = req.body;
	studentInfo.addStudentInfo(StudentInfo, function(err, studentInfo){
		if(err){
			res.redirect('/error');
			throw err;
		}
		req.session.destroy();
		res.redirect('/');
	})
});

//get student information by ID
routes.get('/api/studentinfo/:_id', function(req, res){
	studentInfo.getStudentInfoByID(req.params._id, function(err, studentInfo){
		if(err){
			throw err;
			res.redirect('/error');
		}
		console.log("$LOG : Student information storing in session.....");
		req.session.studentinfo = studentInfo;
		console.log("$LOG : Session for student information stored : /n" + req.session.studentinfo);
		res.cookie('userName',req.session.studentinfo[0].studentFullName,Date.now() + (10*60*1000));
		res.cookie('contact',req.session.studentinfo[0].studentContact,Date.now() + (10*60*1000));
		console.log("$LOG : User full name is stored in cooked with : "+ req.session.studentinfo[0].studentFullName);
		console.log("$LOG : User Contact is stored in cooked with : "+ req.session.studentinfo[0].studentContact);
		console.log("$LOG : Redirecting to student dashboard .....")
		res.redirect('/studentdashboard');

	})
});


module.exports = routes;