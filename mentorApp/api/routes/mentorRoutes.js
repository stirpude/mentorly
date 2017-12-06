const routes = require('express').Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Mentors related routes and APIs
//Get all mentors
routes.get('/api/mentor', function(req, res){
	mentor.getMentor(function(err, mentor){
		if(err){
			res.redirect('/error');
			throw err;
		}
		res.json(mentor);
	})
});

//add mentor
routes.post('/api/mentor',urlencodedParser, function(req, res){
	console.log("$Log : A new mentor user to be added into database with the request - "+ JSON.stringify(req.body));
	var Mentor = req.body;
	mentor.addMentor(Mentor, function(err, mentor){
		if(err){
			console.log("$Log : Error thrown --> " + err)
			res.redirect('/error');
			//return res.status(500).send();
		}
		req.session.mentor = mentor;
		res.redirect('/mentorinfo');
	})
});



//get mentors by ID
routes.get('/api/mentor/:_id', function(req, res){
	mentor.getMentorByID(req.params._id, function(err, mentor){
		if(err){
			res.redirect('/error');
			throw err;
		}
		console.log("came here");
		console.log(mentor);
		res.json(mentor);
	})
});

//mentor login
routes.post('/api/mentor/login', function(req, res){
	var Mentor = req.body;
	var email = req.body.mentorEmail;
	var pass = req.body.mentorPass;
	mentor.mentorAuth(email,pass, function(err, mentor){
		if(err){
			throw err;
			res.redirect('/error');
		}
		else{
			if(isEmpty(mentor)){
				res.redirect('/error');
				//return res.status(500).send();
			}
			else{
				console.log("$LOG : Found mentor object....storing into session");
				req.session.mentor = mentor;
				console.log("$LOG : Mentor object stored in session - "+ req.session.mentor);
				res.cookie('mentorEmail',req.session.mentor[0].mentorEmail,Date.now() + (10*60*1000));
				console.log("$LOG : Cookie stored as mentorEmail for Email ID of the mentor.... - "+req.session.mentor[0].mentorEmail);
				console.log("$LOG : Redirecting to mentor dashboard......");
				res.redirect('/mentordashboard');
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
