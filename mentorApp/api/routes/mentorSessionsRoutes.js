const routes = require('express').Router();

//mentora available sessions related routes and APIs call
//Get all mentors sessions
routes.get('/api/mentorclasses', function(req, res){
	mentorSession.getMentorSession(function(err, mentorSession){
		if(err){
			throw err;
		}
		console.log("$LOG: Getting all classes available...");
		console.log("$LOG: storing classes in session...")
		req.session.allsession = mentorSession;
		console.log("$LOG : Number of classes = " + req.session.allsession.length)
		for(i=0;i<req.session.allsession.length;i++){
			var tempObjName = "classesObj";
			tempObjName += i;
			console.log("$LOG : current class object into cookie : " +tempObjName);
			res.cookie('countClasses',req.session.allsession.length,Date.now() + (10*60*1000));
			res.cookie('ID'+tempObjName,req.session.allsession[i]._id,Date.now() + (10*60*1000));
			res.cookie('type'+tempObjName,req.session.allsession[i].mentorType,Date.now() + (10*60*1000));
			res.cookie('subject'+tempObjName,req.session.allsession[i].subject,Date.now() + (10*60*1000));
			res.cookie('availableFrom'+tempObjName,req.session.allsession[i].availableFrom,Date.now() + (10*60*1000));
			res.cookie('availableTill'+tempObjName,req.session.allsession[i].availableTill,Date.now() + (10*60*1000));
			res.cookie('weekends'+tempObjName,req.session.allsession[i].weekends,Date.now() + (10*60*1000));
		}
		res.redirect('/getMentoDetails');
	})
});


//add student information
routes.post('/api/mentorclasses', function(req, res){
	console.log("$LOG : Session is being create for user with ID - " + req.session.mentorinfo[0].mentorFK);
	req.body.mentorFK = req.session.mentorinfo[0].mentorFK;
	var MentorInfo = req.body;
	console.log("$LOG : A new mentor class is being registered with the request - " +JSON.stringify(req.body));
	mentorSession.addMentorSession(MentorInfo, function(err, mentorSession){
		if(err){
			throw err;
		}
		req.session.mentorsession = mentorSession;
		res.send("<div> Mentor session successfully added</div><a href=\"/mentordashboard\">click here to go back to dashboard</a>");
		console.log("Redirecting to mentor dashboard.....")
	})
});

//get mentorSession information by mentor ID
routes.get('/api/mentorclasses/:_id', function(req, res){
	mentorSession.getMentorsessionByMentorID(req.params._id, function(err, mentorSession){
		if(err){
			throw err;
		}
		console.log("$LOG : Searching all session available for this mentor...")
		req.session.mentorsessionsData = mentorSession;
		res.cookie('sessionOfMentor',mentorSession,Date.now() + (10*60*1000));
		res.cookie('numberOfSession',mentorSession.length,Date.now() + (10*60*1000));
		console.log("$LOG: Number of sessions available for mentors : " + mentorSession.length);
		console.log("$LOG : list of sessions for mentor added to the session...")
		console.log("$LOG : Redirecting to dashboard...")
		res.redirect('/mentordashboardview');
	})
});

//get mentorSession information by class
routes.get('/api/mentorclasses/subject/:_id', function(req, res){
	mentorSession.getMentorsessionByClass(req.params._id, function(err, mentorSession){
		if(err){
			throw err;
		}
		res.send(200);
	})
});

module.exports = routes;