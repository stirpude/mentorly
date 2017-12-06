const routes = require('express').Router();

//StudentInfo related routes and APIs call
//Get all studentsInfo
routes.get('/api/mentorinfo', function(req, res){
	mentorInfo.getMentorInfo(function(err, mentorInfo){
		if(err){
			res.redirect('/error');
			throw err;
		}
		res.json(mentorInfo);
	})
});

//add student information
routes.post('/api/mentorInfo', function(req, res){
	req.body.mentorFK = req.session.mentor._id;
	var MentorInfo = req.body;
	console.log(JSON.stringify(req.body))
	mentorInfo.addMentorInfo(MentorInfo, function(err, mentorInfo){
		if(err){
			res.redirect('/error');
			throw err;
		}
		req.session.destroy();
		res.redirect('/');
	})
});

routes.get('/api/mentorInfo/getDetails', function(req,res){
	mentorInfo.getMentorInfo(function(err, mentorInfo){
		if(err){
			res.redirect('/error');
			throw err;
		}
		//req.session.mentorDetailsView = mentorInfo;
		var mentorInfoTemp = "mentorUsrDet"
		var classMentor = []
		for(i=0;i<req.session.allsession.length;i++){
			for(j=0;j<mentorInfo.length;j++){
				if(req.session.allsession[i].mentorFK === mentorInfo[j].mentorFK){
					console.log("Matched = " +mentorInfo[j].mentorFK);
					mentorInfoTemp += i;
					res.cookie('menFullName'+mentorInfoTemp,mentorInfo[j].mentorFullName,Date.now() + (10*60*1000));
					res.cookie('menCnt'+mentorInfoTemp,mentorInfo[j].mentorContact,Date.now() + (10*60*1000));
					res.cookie('menMjr'+mentorInfoTemp,mentorInfo[j].major,Date.now() + (10*60*1000));
					res.cookie('menPrf'+mentorInfoTemp,mentorInfo[j].profession,Date.now() + (10*60*1000));					
				}
			
			}

		}
		res.redirect('/studentdashboard');
	})

});

//get mentor information by ID
routes.get('/api/mentorInfo/:_id', function(req, res){
	mentorInfo.getMentorInfoByID(req.params._id, function(err, mentorInfo){
		if(err){
			res.redirect('/error');
			throw err;
		}
		console.log("$LOG : Mentor information storing in session.....");
		console.log(mentorInfo)
		req.session.mentorinfo = mentorInfo;
		console.log("$LOG : Session for mentor information stored : " + req.session.mentorinfo[0]);
		res.cookie('mentorFullName',req.session.mentorinfo[0].mentorFullName,Date.now() + (10*60*1000));
		res.cookie('mentorContact',req.session.mentorinfo[0].mentorContact,Date.now() + (10*60*1000));
		res.cookie('mentorMajor',req.session.mentorinfo[0].major,Date.now() + (10*60*1000));
		res.cookie('mentorProfession',req.session.mentorinfo[0].profession,Date.now() + (10*60*1000));
		res.cookie('type',"Mentor",Date.now() + (10*60*1000));
		console.log("$LOG : mentorFullName is stored in cooked with : "+ req.session.mentorinfo[0].mentorFullName);
		console.log("$LOG : mentorContact is stored in cooked with : "+ req.session.mentorinfo[0].mentorContact);
		console.log("$LOG : mentorMajor is stored in cooked with : "+ req.session.mentorinfo[0].major);
		console.log("$LOG : mentorProfession is stored in cooked with : "+ req.session.mentorinfo[0].profession);
		console.log("$LOG : Redirecting to mentor dashboard .....")
		res.redirect('/mentordashboard');
	})
});


module.exports = routes;
