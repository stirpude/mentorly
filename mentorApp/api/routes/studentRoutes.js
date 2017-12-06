const routes = require('express').Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Student relation routes and APIs call
//Get all students
routes.get('/api/student', function(req, res){
	student.getStudent(function(err, student){
		if(err){
			res.redirect('/error');
			throw err;
		}
		res.json(student);
	})
});

//Add student
routes.post('/api/student', urlencodedParser, function(req, res){
	//console.log("$Log : A new student user has been added into database with the request - "+ req.body);
	var Student = req.body;
	student.addStudent(Student, function(err, student){
		if(err){
			console.log("$Log : Error thrown --> " + err)
			res.redirect('/error');
			//return res.status(500).send();
		}
		req.session.student = student;
		res.redirect('/studentinfo');
	})
});


//Get student by ID
routes.get('/api/student/:_id', function(req, res){
	student.getStudentByID(req.params._id,function(err, student){
		if(err){
			res.redirect('/error');
			throw err;
		}
		res.json(student);
	})
});

//student login
routes.post('/api/student/login', function(req, res){
	var Student = req.body;
	var email = req.body.studentEmail;
	var pass = req.body.studentPass;
	student.studentAuth(email,pass, function(err, student){
		if(err){

			throw err;

		}
		else{
			if(isEmpty(student)){
				res.redirect('/error');
				//return res.status(500).send();
			}
			else{
				console.log("$LOG : Found student object....storing into session");
				req.session.student = student;
				console.log("$LOG : Student object stored in session - /n"+ req.session.student);
				res.cookie('userEmail',req.session.student[0].studentEmail,Date.now() + (10*60*1000));
				console.log("$LOG : Cookie stored as userEmail for Email ID of the student.... - "+req.session.student[0].studentEmail);
				console.log("$LOG : Redirecting to dashboard......");
				res.redirect('/studentdashboard');
			}
		}
	})
});

function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length && obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

module.exports = routes;
