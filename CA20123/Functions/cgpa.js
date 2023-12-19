/*
BCS2243 WEB ENGINEERING [HOT]
Student ID: CA20123
Student Name: LIM YU SHUN
Section: 2B
Lecturer name: DR NOORLIN
*/

function displayCourseName() {
	let courseName1 = document.getElementById("crsCode1").value;
	let courseName2 = document.getElementById("crsCode2").value;
	let courseName3 = document.getElementById("crsCode3").value;
	let courseName4 = document.getElementById("crsCode4").value;
	
	document.getElementById("crsName1").value = courseName1;
	document.getElementById("crsName2").value = courseName2;
	document.getElementById("crsName3").value = courseName3;
	document.getElementById("crsName4").value = courseName4;
}


function displayGradeValue() {
	let grade1 = parseInt(document.getElementById("grd1").value);
	let grade2 = parseInt(document.getElementById("grd2").value);
	let grade3 = parseInt(document.getElementById("grd3").value);
	let grade4 = parseInt(document.getElementById("grd4").value);
	
	document.getElementById("grdValue1").innerHTML = grade1;
	document.getElementById("grdValue2").innerHTML = grade2;
	document.getElementById("grdValue3").innerHTML = grade3;
	document.getElementById("grdValue4").innerHTML = grade4;
}


function displayGradeCredit() {
	let credit1 = parseInt(document.getElementById("cre1").value);
	let credit2 = parseInt(document.getElementById("cre2").value);
	let credit3 = parseInt(document.getElementById("cre3").value);
	let credit4 = parseInt(document.getElementById("cre4").value);
	
	let grade1 = parseInt(document.getElementById("grd1").value);
	let grade2 = parseInt(document.getElementById("grd2").value);
	let grade3 = parseInt(document.getElementById("grd3").value);
	let grade4 = parseInt(document.getElementById("grd4").value); 
	
	document.getElementById("grdValue1").innerHTML = grade1;
	document.getElementById("grdValue2").innerHTML = grade2;
	document.getElementById("grdValue3").innerHTML = grade3;
	document.getElementById("grdValue4").innerHTML = grade4;
	
	document.getElementById("grdValueCredit1").innerHTML = credit1 * grade1;
	document.getElementById("grdValueCredit2").innerHTML = credit2 * grade2;
	document.getElementById("grdValueCredit3").innerHTML = credit3 * grade3;
	document.getElementById("grdValueCredit4").innerHTML = credit4 * grade4;
}


function displayCalculationOutput() {
	let credit1 = parseInt(document.getElementById("cre1").value);
	let credit2 = parseInt(document.getElementById("cre2").value);
	let credit3 = parseInt(document.getElementById("cre3").value);
	let credit4 = parseInt(document.getElementById("cre4").value);
	
	let grade1 = parseInt(document.getElementById("grd1").value);
	let grade2 = parseInt(document.getElementById("grd2").value);
	let grade3 = parseInt(document.getElementById("grd3").value);
	let grade4 = parseInt(document.getElementById("grd4").value); 
	
	let studentSemester = document.getElementById("smt").value;
	let studentID = document.getElementById("stdID").value;
	let studentName = document.getElementById("stdName").value;
	
	let studentIDCharacter = document.getElementById("stdID").value.substring(0,2);
	let studentProgram = "";
	
	let academicStatus = "";
	
	let totalCredit = credit1 + credit2 + credit3 + credit4;
	
	document.getElementById("ttlCredit").innerHTML = totalCredit;
	
	let totalGradeValueCredit = (credit1 * grade1) + (credit2 * grade2) + (credit3 * grade3) + (credit4 * grade4);
	
	document.getElementById("ttlGradeValueCredit").innerHTML = totalGradeValueCredit;
	
	let gpa = totalGradeValueCredit / totalCredit;
	
	document.getElementById("gpaValue").innerHTML = gpa.toFixed(2);
	
	let cgpa = totalGradeValueCredit / totalCredit;
	
	document.getElementById("cgpaValue").innerHTML = cgpa.toFixed(2);
	
	
	if(studentIDCharacter == "CA") {
		studentProgram = "Bachelor of Computer Science (Computer Networking)";
	} else if(studentIDCharacter == "CB") {
		studentProgram = "Bachelor of Computer Science (Software Engineering)";
	} else if(studentIDCharacter == "CD") {
		studentProgram = "Bachelor of Computer Science (Graphics Multimedia)";
	}
	
	if(cgpa >= 3.60 && cgpa <= 4.00) {
		academicStatus = "Excellent";
	} else if(cgpa >= 2.00 && cgpa <= 3.59) {
		academicStatus = "Good";
	} else if(cgpa >= 1.00 && cgpa <= 1.99) {
		academicStatus = "Special 1";
	} else if(cgpa <= 0.99) {
		academicStatus = "Failed";
	}
	
	
	document.getElementById("output").innerHTML = ("<b>STUDENT RESULT</b>" + 
	"<br>" + 
	"<br>" + 
	"Student ID: " + studentID +
	"<br>" +
	"Student Name: " + studentName +
	"<br>" +
	"Student Program: " + studentProgram +
	"<br>" +
	"<br>" +
	"<b>SEMESTER TOTAL CREDIT GPA CGPA STATUS</b>" +
	"<br>" +
	studentSemester + "&nbsp&nbsp" + 
	totalCredit  + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
	gpa.toFixed(2) +  "&nbsp&nbsp&nbsp" + 
	cgpa.toFixed(2) +  "&nbsp&nbsp&nbsp&nbsp&nbsp" +
	academicStatus);
}