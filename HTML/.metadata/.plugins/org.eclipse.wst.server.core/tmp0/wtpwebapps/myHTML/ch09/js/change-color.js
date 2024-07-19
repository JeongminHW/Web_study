var heading = document.querySelector("#heading");

heading.onclick /* 이벤트 */ = function() {
	if(heading.style.color=="blue")
		heading.style.color = "red";
	else
		heading.style.color = "blue";
}