var expect  = require('chai').expect;
var request = require('request');
let chaiHttp = require('chai-http');
let server = require('../api/models/mentorInfo.js')

var chai = require('chai');
chai.use(chaiHttp);

chai.use(require('chai-json-schema'));
var assert = chai.assert;





 let user = { "mentorFK" : ("5a25b621f44c17098197d8ad"), "mentorFullName" : "Prajwal", "mentorContact" : "98785564", "major" : "ComputerScience", "profession" : "Professional", "mentorFK" : "5a25b611f44c17098197d8ac", "updatedOn" : ("2017-12-04T20:54:57.866Z"), "__v" : 0 };


 let mentor = { "_id" : ("5a25b611f44c17098197d8ac"), "mentorEmail" : "prajwal", "mentorPass" : "prajwal", "create_date" : ("2017-12-04T20:54:41.402Z"), "__v" : 0 }


let mentorsession = { "_id" : ("5a25b652f44c17098197d8ae"), "mentorType" : "Professional", "subject" : "Java", "availableFrom" : ("2017-12-03T18:51:57.988Z"), "availableTill" : ("2017-12-03T18:51:57.988Z"), "weekends" : true, "mentorFK" : "5a25b611f44c17098197d8ac", "create_date" : ("2017-12-04T20:55:46.658Z"), "__v" : 0 }

var mentorInfoSchema = {
  user : {
    mentorFK : {
    type : String,
    required : true
  },
  mentorFullName : {
    type : String,
    required : true
  },
  mentorContact : {
    type : String,
    required : true
  },
  major : {
    type : String,
    required : true
  },
  profession : {
    type : String,
    required : true
  },
  updatedOn : {
    type : Date,
    default : Date.now
  }
}
};


var mentorSchema = {
  mentor: {
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
}
};


var mentorSessionSchema = {
  mentorsession : { mentorFK : {
    type : String,
    required : true
  },
  mentorType : {
    type : String,
    required : true
  },
  subject : {
    type : String,
    required : true
  },
  availableFrom : {
    type : Date,
    required : true
  },
  availableTill : {
    type : Date,
    required : true
  },
  weekends : {
    type : Boolean,
    required : true
  },
  create_date : {
    type : Date,
    default : Date.now
  }
}
};





 //define json for schema validation

 /*var userSchema = {
  user : {
  title: 'valid user schema v1',
  type: 'object',
  required: ['name', 'email'],
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    }
  }
}

};  */





//let chai = require('chai');
let should = chai.should();
//let server = require('../userReminder');



/*it('Main page status', function(done) {
    request('http://localhost:3000/users' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});



  /* Test the /GET route

  describe('/GET users', () => {

    it('check for all users', function(done) {
    request('http://localhost:3000/users' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
      it('it should GET all the users', (done) => {
        chai.request('http://localhost:3000')
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                 res.body.should.have.property('users');
                 res.body.should.have.property('users').to.be.an('array');
              done();
            });
      });
  });
 var idfromServer, idfromReminder ;
*/




 /* Test the /POST route
 */
  describe('/POST user', () => {

    it('check mentorInfo  schema ', (done) => {
    expect(user).to.be.jsonSchema(mentorInfoSchema);
    done();
  });

  });


  describe('/POST user', () => {

    it('check mentor  schema ', (done) => {
    expect(mentor).to.be.jsonSchema(mentorSchema);
    done();
  });

  });

  describe('/POST user', () => {

    it('check mentorsession  schema ', (done) => {
    expect(mentorsession).to.be.jsonSchema(mentorSessionSchema);
    done();
  });

  });



  /*describe('/GET mentors', () => {

    it('check for all mentors', function(done) {
    request('http://localhost:3000/api/mentorinfo' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
      it('it should GET all the mentors', (done) => {
        chai.request('http://localhost:3000/api/mentorinfo')
            .get('/api/mentorinfo')
            .end((err, res) => {
                res.should.have.status(200);
                 res.body.should.have.property('mentor');
                 res.body.should.have.property('mentor').to.be.an('array');
              done();
            });
      });
  });








      /*it('add a user ', (done) => {


            chai.request('http://localhost:3000')
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                console.log(JSON.stringify(res));
                idfromServer =JSON.parse(res.text).id;
                console.log("id from server"+idfromServer);

                done();

            });
      });


  });
 /*
  * Test the /GET/:id route
  */

  /*
  * Test the /GET route with specific id
  */
