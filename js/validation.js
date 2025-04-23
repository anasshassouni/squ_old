var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
function es_checkFormValidation()
{
	requiredlist=new Array("Name","Email","message");
	email_field="Email";
	reqlen=requiredlist.length;
	if(reqlen>0)
	{
		for(ele=0; ele<reqlen; ele++)
		{
			elename="mail["+ requiredlist[ele] + "]";
			if(document.getElementById(elename).value.split(" ").join("") == "")
			{
				alert("Please enter " + requiredlist[ele] + ".");
				document.getElementById(elename).focus();
				return false;
			}
			if(requiredlist[ele]==email_field)
			{
				var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
				if(emailPattern.test(document.getElementById(elename).value)==false)
				{
					alert("Please enter valid Email Address.");
					document.getElementById(elename).focus();
					return false;
				}
			}
		}
	}
	return true;
}

function chkdelete()
{
	return confirm("Sure to delete selected record...?");
}

function chkRegister()
{
	if(document.getElementById("interested_in").value.split(" ").join("")=="")
	{
		alert("Please select your interest.");
		document.getElementById("interested_in").focus();
		return false;
	}
	if(document.getElementById("first_name").value.split(" ").join("")=="")
	{
		alert("Please enter your first name.");
		document.getElementById("first_name").focus();
		return false;
	}
	if(document.getElementById("last_name").value.split(" ").join("")=="")
	{
		alert("Please enter your last name.");
		document.getElementById("last_name").focus();
		return false;
	}
	if(document.getElementById("phone").value.split(" ").join("")=="")
	{
		alert("Please enter your phone number.");
		document.getElementById("phone").focus();
		return false;
	}
	if(document.getElementById("email").value.split(" ").join("") == "")
	{
		alert("Please enter your email addresss.");
		document.getElementById("email").focus();
		return false;
	}
	else
	{
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if(emailPattern.test(document.getElementById('email').value)==false)
		{
			alert("Please enter valid email address.");
			document.getElementById('email').focus();
			return false;
		}
	}
}


function validateFormPass()
{
	if(document.getElementById('email').value.split(" ").join("") == "")
	{
		alert("Please Enter Your Email Address.");
		document.getElementById('email').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('email').value)==false)
	{
		alert("Please Enter Valid Email Address.");
		document.getElementById('email').focus();
		return false;
	}
}

function chkLoginForm()
{
	if(document.getElementById('logusername').value.split(" ").join("") == "")
	{
		alert("Please enter your email address.");
		document.getElementById('logusername').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('logusername').value)==false)
	{
		alert("Please enter valid email address.");
		document.getElementById('logusername').focus();
		return false;
	}
	if(document.getElementById('logpassword').value.split(" ").join("") == "")
	{
		alert("Please enter your password.");
		document.getElementById('logpassword').focus();
		return false;
	}
	if(document.getElementById('chkRember').checked==true)
	{
		SaveCookie('flusernm', document.getElementById('logusername').value);
    	SaveCookie('fluserpw', document.getElementById('logpassword').value);
	}
}

function chkUserLogin()
{
	if(document.getElementById('username').value.split(" ").join("") == "")
	{
		alert("Please enter your email address.");
		document.getElementById('username').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('username').value)==false)
	{
		alert("Please enter valid email address.");
		document.getElementById('username').focus();
		return false;
	}
	if(document.getElementById('password').value.split(" ").join("") == "")
	{
		alert("Please enter your password.");
		document.getElementById('password').focus();
		return false;
	}
	//if(document.getElementById('chkRember').checked==true)
	//{
	//	SaveCookie('flusernm', document.getElementById('logusername').value);
    //	SaveCookie('fluserpw', document.getElementById('logpassword').value);
	//}
}
function chkUserLoginHeader()
{
	if(document.getElementById('usernames').value.split(" ").join("") == "")
	{
		alert("Please enter your email address.");
		document.getElementById('usernames').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('usernames').value)==false)
	{
		alert("Please enter valid email address.");
		document.getElementById('usernames').focus();
		return false;
	}
	if(document.getElementById('passwords').value.split(" ").join("") == "")
	{
		alert("Please enter your password.");
		document.getElementById('passwords').focus();
		return false;
	}
}

function chkChangePassword()
{
	if(document.getElementById('cpassword').value.split(" ").join("") == "")
	{
		alert("Please Enter Your Current Password.");
		document.getElementById('cpassword').focus();
		return false;
	}
	if(document.getElementById('password').value.split(" ").join("") == "")
	{
		alert("Please Enter Your New Account Password.");
		document.getElementById('password').focus();
		return false;
	}
	if(document.getElementById('password').value.length < 6)
	{
		alert("Password Atleast 6 Characters Long.");
		document.getElementById('password').focus();
		return false;
	}
	if(document.getElementById('repassword').value.split(" ").join("") == "")
	{
		alert("Please Enter Confirm Password.");
		document.getElementById('repassword').focus();
		return false;
	}
	if(document.getElementById('password').value != document.getElementById('repassword').value)
	{
		alert("Confirmation Password Does not Match.");
		document.getElementById('repassword').value="";
		document.getElementById('repassword').focus();
		return false;
	}
}

function chkContact()
{
	if(document.getElementById("fname").value.split(" ").join("")=="")
	{
			alert("Please Enter Your Name.");
			document.getElementById("fname").focus();
			return false;
	}
	if(document.getElementById("email").value.split(" ").join("") == "")
	{
			alert("Please Enter Email.");
			document.getElementById("email").focus();
			return false;
	}
	else
	{
			var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if(emailPattern.test(document.getElementById('email').value)==false)
			{
					alert("Please Enter Valid Email Address.");
					document.getElementById('email').focus();
					return false;
			}
	}
	if(document.getElementById("about").value.split(" ").join("")=="")
	{
			alert("Please Enter About Detail.");
			document.getElementById("about").focus();
			return false;
	}
	if(document.getElementById("message").value.split(" ").join("")=="")
	{
			alert("Please Enter Message.");
			document.getElementById("message").focus();
			return false;
	}
	
}

function chkForgotPass()
{
	if(document.getElementById('forgotemail').value.split(" ").join("")=="")
	{
		alert("Please enter your email address");
		document.getElementById('forgotemail').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('forgotemail').value)==false)
	{
			alert("Please enter valid email address.");
			document.getElementById('forgotemail').focus();
			return false;
	}
}

function chkChangePass()
{
	if(document.getElementById('old_password').value.split(" ").join("")=="")
	{
		alert("Please enter current password.");
		document.getElementById('old_password').focus();
		return false;
	}
	if(document.getElementById('new_password').value.split(" ").join("")=="")
	{
		alert("Please enter new password.");
		document.getElementById('new_password').focus();
		return false;
	}
	if(document.getElementById('new_password').value.length < 6)
	{
		alert("Password atleast 6 characters long.");
		document.getElementById('new_password').focus();
		return false;
	}
	if(document.getElementById('re_password').value.split(" ").join("")=="")
	{
		alert("Please enter confirm password.");
		document.getElementById('re_password').focus();
		return false;
	}
	if(document.getElementById('new_password').value != document.getElementById('re_password').value)
	{
		document.getElementById('re_password').value="";
		alert("Confirmation password does not match.");
		document.getElementById('re_password').focus();
		return false;
	}
}
function chkForgotPass()
{
	if(document.getElementById('email').value.split(" ").join("") == "")
	{
		alert("Please enter email address.");
		document.getElementById('email').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('email').value)==false)
	{
		alert("Please enter valid email address.");
		document.getElementById('email').focus();
		return false;
	}
}
function submitAnswer()
{
	selans="";
	anscnt=document.getElementsByName('ans_option[]').length;
	for(aa=0; aa<anscnt; aa++)
	{
		if(document.getElementsByName('ans_option[]').item(aa).checked==true)
			selans += ',' + document.getElementsByName('ans_option[]').item(aa).value;
	}
	if(selans=="")
	{
		if(!confirm("Sure to goto next question without answering this question."))
			return false;
	}
	else
	{
		selans = selans.substr(1);
	}

	$.ajax({
		type: "POST",
		url: "check_answer.php",
		data: { selans: selans },
		success: function( data ) {
			if(data=="Finish") { window.location='test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}

function submitAnswerPrevioud()
{
	var a=1;
	selans="";
	anscnt=document.getElementsByName('ans_option[]').length;
	for(aa=0; aa<anscnt; aa++)
	{
		if(document.getElementsByName('ans_option[]').item(aa).checked==true)
			selans += ',' + document.getElementsByName('ans_option[]').item(aa).value;
	}
	selans = selans.substr(1);
	
	$.ajax({
		type: "POST",
		url: "check_answer.php",
		data: { selans: selans, a:a },
		success: function( data ) {
			if(data=="Finish") { }//window.location='test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}

function chkSelectedOptions()
{
	radnames = document.getElementById('radio_groups').value;
	rdSel="";
	rnmArr = radnames.split(",");
	rnmLn = rnmArr.length;
	for(r1=0; r1<rnmLn; r1++)
	{
		optLn=document.getElementsByName(rnmArr[r1]).length;
		rdSel = rdSel + "|" + rnmArr[r1] + "-";
		for(r2=0; r2<optLn; r2++)
		{
			if(document.getElementsByName(rnmArr[r1]).item(r2).checked==true)
			{
				rdSel = rdSel + document.getElementsByName(rnmArr[r1]).item(r2).value;
			}
		}
	}
	rdSel = rdSel.substr(1);
	return rdSel;
}

<!--For Reading Test-->
function submitReadingAnswer(val)
{
	selans=chkSelectedOptions();
	var selans;
	$.ajax({
		type: "POST",
		url: "check-reading.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='beginning-audio-test.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
function submitReadingPrevioud()
{
	selans=chkSelectedOptions();
	var a=1;
	$.ajax({
		type: "POST",
		url: "check-reading.php",
		data: { selans: selans, a:a },
		success: function( data ) {
			if(data=="Finish") { }//window.location='test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
<!--Reading Test-->

<!--Listing Test-->
function submitListingAnswer22()
{
	selans=chkSelectedOptionsAudio();
	/*$.ajax({
		type: "POST",
		url: "check-listing.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='beginning-test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});*/
	$('#QuestionBlock').load('check-listing.php?selans='+selans, function(data) {
	  if(data=="Finish") { window.location='beginning-test-result.php'; }
	});
}

function submitListingPrevioud22()
{
	selans=chkSelectedOptionsAudio();
	var selans;
	var a=1;
	/*$.ajax({
		type: "POST",
		url: "check-listing.php",
		data: { selans: selans, a:a },
		success: function( data ) {
			if(data=="Finish") { }//window.location='test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});*/
	$('#QuestionBlock').load('check-listing.php?selans='+selans+'&a='+a, function(data) {
	  if(data=="Finish") { window.location='beginning-test-result.php'; }
	});
}

function submitListingAnswer()
{
	selans=chkSelectedOptionsAudio();
	$.ajax({
		type: "POST",
		url: "check-listing.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='beginning-test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
function submitListingPrevioud()
{
	selans=chkSelectedOptionsAudio();
	var selans;
	var a=1;
	$.ajax({
		type: "POST",
		url: "check-listing.php",
		data: { selans: selans, a:a },
		success: function( data ) {
			if(data=="Finish") { }//window.location='test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
function chkSelectedOptionsAudio()
{
	radnames = document.getElementById('radio_groups').value;
	rdSel="";
	rnmArr = radnames.split(",");
	rnmLn = rnmArr.length;
	for(r1=0; r1<rnmLn; r1++)
	{
		optLn=document.getElementsByName(rnmArr[r1]).length;
		rdSel = rdSel + "|" + rnmArr[r1] + "-";
		for(r2=0; r2<optLn; r2++)
		{
			if(document.getElementsByName(rnmArr[r1]).item(r2).checked==true)
			{
				rdSel = rdSel + document.getElementsByName(rnmArr[r1]).item(r2).value;
			}
		}
	}
	rdSel = rdSel.substr(1);
	return rdSel;
}
<!--#Listing Test-->





function chkSelectedOptionsMedia()
{
	radnames = document.getElementById('radio_groups').value;
	rdSel="";
	rnmArr = radnames.split(",");
	rnmLn = rnmArr.length;
	for(r1=0; r1<rnmLn; r1++)
	{
		optLn=document.getElementsByName(rnmArr[r1]).length;
		rdSel = rdSel + "|" + rnmArr[r1] + "-";
		for(r2=0; r2<optLn; r2++)
		{
			if(document.getElementsByName(rnmArr[r1]).item(r2).checked==true)
			{
				rdSel = rdSel + document.getElementsByName(rnmArr[r1]).item(r2).value;
			}
		}
	}
	rdSel = rdSel.substr(1);
	return rdSel;
}
function submitIMReadingAnswer(val)
{
	selans=chkSelectedOptionsMedia();
	$.ajax({
		type: "POST",
		url: "intermediate-check-reading.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='intermediate-audio-test-info.php'; } //window.location='intermediate-audio-test.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
function submitListingAnswerMedia()
{
	selans=chkSelectedOptionsMedia();
	var selans;
	$.ajax({
		type: "POST",
		url: "intermediate-check-listing.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='intermediate-test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}






<!--Advanced Test-->
function submitAdvancedMedia()
{
	selans=chkSelectedOptionsMedia();
	var selans;
	$.ajax({
		type: "POST",
		url: "intermediate-check-listing.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='advanced-test-result.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
function submitAdvancedAnswer()
{
	selans=chkSelectedOptionsMedia();
	$.ajax({
		type: "POST",
		url: "advanced-check-reading.php",
		data: { selans: selans  },
		success: function( data ) {
			if(data=="Finish") { window.location='advanced-audio-test-info.php'; }
			else { document.getElementById("QuestionBlock").innerHTML=data; }
		}
	});
}
<!--#Advanced Test-->



function chkStudentVal()
{
	
	if(document.getElementById('courses_offered').value.split(" ").join("") == "")
	{
		alert("Please select courses.");
		document.getElementById('courses_offered').focus();
		return false;
	}
	if(document.getElementById('firstname').value.split(" ").join("") == "")
	{
		alert("Please enter first name.");
		document.getElementById('firstname').focus();
		return false;
	}
	if(document.getElementById('lastname').value.split(" ").join("") == "")
	{
		alert("Please enter last name.");
		document.getElementById('lastname').focus();
		return false;
	}
	if(document.getElementById('gender').value.split(" ").join("") == "")
	{
		alert("Please select gender.");
		document.getElementById('gender').focus();
		return false;
	}
	if(document.getElementById('email').value.split(" ").join("") == "")
	{
		alert("Please enter email address.");
		document.getElementById('email').focus();
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(emailPattern.test(document.getElementById('email').value)==false)
	{
		alert("Please enter valid email address.");
		document.getElementById('email').focus();
		return false;
	}
	 if(!validateRadio (document.forms["frm1"]["accmmodation"]))
    {
        alert('Please select Accommodation.');
		document.getElementById('accmmodation').focus();
        return false;
    }
    
	/*if(document.getElementById('password').value.split(" ").join("") == "")
	{
		alert("Please enter password.");
		document.getElementById('password').focus();
		return false;
	}*/
	
}
function validateRadio (radios)
{
    for (i = 0; i < radios.length; ++ i)
    {
        if (radios [i].checked) return true;
    }
    return false;
}

function chkFinishSTest()
{
	if(document.getElementById('response_file').value.split(" ").join("")=="")
	{
		alert("Please select your voice response file.");
		return false;
	}
}

}
/*
     FILE ARCHIVED ON 03:04:15 Mar 08, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:48:06 Apr 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.556
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 101.141
  LoadShardBlock: 55.966 (3)
  PetaboxLoader3.datanode: 61.206 (4)
  load_resource: 108.209
  PetaboxLoader3.resolve: 84.692
*/