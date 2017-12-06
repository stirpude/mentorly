$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


function loginAuth(){
	var email = document.getElementById("emailID").value;
	var pass = document.getElementById("password").value;
	var type = document.getElementsByName("type");
	var selectedType;
	for(var i = 0; i < type.length; i++) {
   		if(type[i].checked)
       selectedType = type[i].value;
 	}
	if(selectedType === "student" && email!= null && pass!= null){
		console.log("$Log: student is trying to log in. Calling student API....");
		document.getElementById("emailID").name = "studentEmail";
		document.getElementById("password").name = "studentPass";
		document.getElementById("loginAuth").action = "http://localhost:3000/api/student/login";
		var temp = document.getElementById("loginAuth").submit();
	}
	else if(selectedType === "mentor" && email!= null && pass!= null){
		console.log("$Log: mentor is trying to log in. Calling mentor API....");
		console.log("$Log: student is trying to log in. Calling student API....");
		document.getElementById("emailID").name = "mentorEmail";
		document.getElementById("password").name = "mentorPass";
		document.getElementById("loginAuth").action = "http://localhost:3000/api/mentor/login";
		var temp = document.getElementById("loginAuth").submit();
	}
	else{
		console.log("$Log : Invalid login criteria failed")
	}
}

function registerUser(){
	var email = document.getElementById("emailID").value;
	var pass = document.getElementById("password").value;
	var type = document.getElementsByName("type");
	var selectedTypeReg;
	for(var i = 0; i < type.length; i++) {
   		if(type[i].checked)
       selectedTypeReg = type[i].value;
 	}
	if(selectedTypeReg === "student" && email!= null && pass!= null){
		console.log("$Log: student is trying to  Register. Calling student API....");
		document.getElementById("emailID").name = "studentEmail";
		document.getElementById("password").name = "studentPass";
		document.getElementById("Register").action = "http://localhost:3000/api/student";
		document.getElementById("Register").method = "POST";
		var temp = document.getElementById("Register").submit();
	}
	else if(selectedTypeReg === "mentor" && email!= null && pass!= null){
		console.log("$Log: mentor is trying to log in. Calling mentor API....");
		document.getElementById("emailID").name = "mentorEmail";
		document.getElementById("password").name = "mentorPass";
		document.getElementById("Register").action = "http://localhost:3000/api/mentor";
		document.getElementById("Register").method = "POST";
		var temp = document.getElementById("Register").submit();
	}
	else{
		console.log("$Log : Invalid login criteria failed")
	}
}

function createSession(){
	var mentorType = document.getElementByID("mentorTypeSes").value;
	var subject = document.getElementByID("subjectSes").value;
	var availableFrom = document.getElementByID("availableFrom").value;
	var availableTill = document.getElementByID("availableTill").value;
	var weekends = document.getElementByID("weekends").value;


}

$(".modal-body form").submit(function(e) {
	console.log("here");
	

	
	document.getElementByID("ModalContent").innerHTML = "Test";
	e.preventDefault();
});


