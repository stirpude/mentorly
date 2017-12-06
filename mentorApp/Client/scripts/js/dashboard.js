window.onload = function() {

 /*   $("#sub1").hide();
    $("#type1").hide();
    $("#major1").hide();
    $("#searchButtonSUB").hide();
    $("#searchButtonType").hide();
    $("#searchButtonMajor").hide();
    $("#BlankSearch").hide();


    $('#searchCriteria').on('change',function(){
        if( $(this).val()==="blank"){
            $("#sub1").hide();
            $("#type1").hide();
            $("#major1").hide();
        }
        else if( $(this).val()==="sub"){
            $("#BlankSearch").hide();
            $("#sub1").show();
            $("#type1").hide();
            $("#major1").hide();
            $('#sub1').on('change',function(){
                if( $(this).val()==="select"){
                    $("#searchButtonSUB").hide();
                    $("#searchButtonType").hide();
                    $("#searchButtonMajor").hide();
                    $("#BlankSearch").hide();
                }
                else{
                    $("#BlankSearch").hide();
                    $("#searchButtonSUB").show();
                }
            })

        }
        else if( $(this).val()==="type"){
            $("#BlankSearch").hide();
            $("#sub1").hide();
            $("#type1").show();
            $("#major1").hide();
            $('#sub1').on('change',function(){
                if( $(this).val()==="select"){
                    $("#searchButtonSUB").hide();
                    $("#searchButtonType").hide();
                    $("#searchButtonMajor").hide();
                    $("#BlankSearch").hide();
                }
                else{
                    $("#searchButtonType").show();
                }
            })

        }
        else if( $(this).val()==="major"){
            $("#BlankSearch").hide();
            $("#sub1").hide();
            $("#type1").hide();
            $("#major1").show();
            $('#sub1').on('change',function(){
                if( $(this).val()==="select"){
                    $("#searchButtonSUB").hide();
                    $("#searchButtonType").hide();
                    $("#searchButtonMajor").hide();
                    $("#BlankSearch").hide();
                }
                else{
                    $("#BlankSearch").hide();
                    $("#searchButtonMajor").show();
                }
            })

        }
    });
    */

    var classesCount = getCookie("countClasses");
    var classesViewHTML = "";
    var htmlResult1 = "<div class=\"well\"><div class =\"container\"><div class=\"row\"><h3> "
   // "$Class"
   var htmlResult2 = " by "
  //  "$Full Name"
  var htmlResult3 = "</h3></div><div class = \"row\"><table style=\"width:100%;\"><tr><td>Major in "
   // "$major"
   var htmlResult4 = "</td><td style=\"text-align: left;\"><button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">View</button><div id=\"myModal\" class=\"modal fade\" role=\"dialog\"><div class=\"modal-dialog\"><!-- Modal content--><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\">Class Details!</h4></div><div class=\"modal-body\"><div id=\"ModalContent\">   <table><tr><td>Mentor Details : </td><td>"

   var htmlResult5 ="</td></tr>  <tr><td>Subject of the session : </td><td>"
   var htmlResult6 ="</td></tr>  <tr><td>Session is From date/time : </td><td>"
   var htmlResult7 ="</td></tr>  <tr><td>Session is till date/time : </td><td>"
   var htmlResult8 ="</td></tr>  <tr><td>Can session be done on weekends? : </td><td>"
   var htmlResult9 ="</td></tr>  <tr><td>This session will be held by : </td><td>"
   var htmlResult10 ="</td></tr>  <tr><td>Contact number of the mentor : </td><td>"
   var htmlResult11 ="</td></tr>  <tr><td>Major done by the mentor : </td><td>"
   var htmlResult12 ="</td></tr>  <tr><td>Mentor is a : </td><td>"

   var htmlResult13 =" </td></tr></table>  </div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button></div></div></div></div></div></td></tr ></table></div></div></div>;"


   var type = getCookie("type");


   if(type === "Student"){
    var Name = getCookie("userName");
    var Email = getCookie("userEmail");
    var Contact = getCookie("contact");
    var profession = getCookie("profession");
    var classesCount = getCookie("countClasses");
    console.log("here");


    for(i=0;i<classesCount;i++){
        var sessionType //= "sessionType";
        var sessionSub //= "sessionSub";
        var sessionFrom //= "sessionFrom";
        var sessionTill //= "sessionTill";
        var sessionWeekend //= "sessionWeekend";
        var sessionBy // = "sessionBy"
        var sessionContact //= "sessionContact";
        var sessionMajor// = "sessionMajor";
        var sessionProf //= "sessionProf";

        sessionType = getCookie("typeclassesObj"+i);
        sessionSub = getCookie("subjectclassesObj"+i);
        sessionFrom = getCookie("availableFromclassesObj"+i);
        sessionTill = getCookie("availableTillclassesObj"+i);
        sessionWeekend = getCookie("weekendsclassesObj"+i);
        sessionBy = getCookie("menFullNamementorUsrDet"+i);
        sessionContact = getCookie("menCntmentorUsrDet"+i);
        sessionMajor = getCookie("menMjrmentorUsrDet"+i);
        sessionProf = getCookie("menPrfmentorUsrDet"+i);

        classesViewHTML += htmlResult1 + sessionSub + htmlResult2 + sessionBy + htmlResult3 + sessionMajor + htmlResult4 + htmlResult5 + sessionSub + htmlResult6 + sessionFrom + htmlResult7 + sessionTill + htmlResult8 + sessionWeekend + htmlResult9 +sessionBy + htmlResult10 + sessionContact + htmlResult11 + sessionMajor + htmlResult12 + sessionProf + htmlResult13;
    }

    document.getElementById("resultsClasses").innerHTML = classesViewHTML;

    console.log("$LOG : Student profile...")
    document.getElementById("EmailID").innerHTML = Email;
    document.getElementById("FullName1").innerHTML = Name;
    document.getElementById("contact").innerHTML = Contact;
    document.getElementById("Type").innerHTML = type;
    document.getElementById("Profession").innerHTML = profession;
    document.getElementById("FullName").innerHTML = Name;

} else{
    var Name = getCookie("mentorFullName");
    var Email = getCookie("mentorEmail");
    var Contact = getCookie("mentorContact");
    var major = getCookie("mentorMajor");
    var profession = getCookie("mentorProfession");
    var mentorSession = getCookie("sessionOfMentor");
    var numberOfSession = getCookie("numberOfSession");
    console.log("sessions of mentor " + String(mentorSession));


    console.log("$LOG : Mentor profile...")
    document.getElementById("EmailID").innerHTML = Email;
    document.getElementById("FullName1").innerHTML = Name;
    document.getElementById("contact").innerHTML = Contact;
    document.getElementById("Type").innerHTML = type;
    document.getElementById("Profession").innerHTML = profession;
    document.getElementById("FullName").innerHTML = Name;
    document.getElementById("major").innerHTML = major;

        //Code here to be added to parser mentorSession and numberOFsession cookies to populated users active session list
    }


}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
