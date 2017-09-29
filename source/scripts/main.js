// https://www.w3schools.com/w3css/w3css_slideshow.asp
var index = 1;
showDivs(index);

document.getElementById("left_button").onclick = function(){plusDivs(-1)}
document.getElementById("right_button").onclick = function(){plusDivs(+1)}

function plusDivs(n) {
	showDivs(index += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("Slides");
    if (n > x.length) {
		index = 1;
	}
    if (n < 1) {
		index = x.length;
	}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
		//x[i].style.visibility = "hidden";
    }
    x[index-1].style.display = "block";
	//x[index-1].style.display = "visible";
}

// modal duder - https://www.youtube.com/watch?v=6ophW7Ask_0
var modal1 = document.getElementById("modal1");
var modalOpener1 = document.getElementById("jada");
var modal2 = document.getElementById("modal2");
var modalOpener2 = document.getElementById("storm");
var modal3 = document.getElementById("modal3");
var modalOpener3 = document.getElementById("jack");

modalOpener1.onclick = function(){
	modal1.style.display = "flex";
}
modalOpener2.onclick = function(){
	modal2.style.display = "flex";
}
modalOpener3.onclick = function(){
	modal3.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
		document.getElementById("jada-vid").pause();
    }
	if(event.target == modal2) {
		modal2.style.display = "none";
		document.getElementById("storm-vid").pause();
	}
	if(event.target == modal3) {
		modal3.style.display = "none";
		document.getElementById("tallulah-vid").pause();
	}
}

document.getElementById("close-button1").onclick = function() {
	modal1.style.display = "none";
	document.getElementById("jada-vid").pause();
}

document.getElementById("close-button2").onclick = function() {
	modal2.style.display = "none";
	document.getElementById("storm-vid").pause();
}

document.getElementById("close-button3").onclick = function() {
	modal3.style.display = "none";
	document.getElementById("tallulah-vid").pause();
}

// smaller scroll - https://www.youtube.com/watch?v=MilW6gVPYJM
window.addEventListener("scroll", shrinkNavbar);

function shrinkNavbar(){
	var top = document.getElementById("header");
	var logo = document.getElementById("logo");
	var ypos = window.pageYOffset;

	if(ypos >  50) {
		top.style.height = "75px";
		logo.style.fontSize = "1.25em";
	}
	else {
		top.style.height = "150px";
		logo.style.fontSize = "1.50em";
	}
}

// highlight menu based on position - https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
window.addEventListener("scroll", highlight);

function highlight(){
	var about_rect = document.getElementById("start").getBoundingClientRect();
	var about_position = {
	  top: about_rect.top + window.pageYOffset,
	};

	var adoption_rect = document.getElementById("adoption-loc").getBoundingClientRect();
	var adoption_position = {
	  top: adoption_rect.top + window.pageYOffset, // accounts for the shrunken header
	};

	var contact_rect = document.getElementById("contact-loc").getBoundingClientRect();
	var contact_position = {
	  top: contact_rect.top + window.pageYOffset, // accounts for the shrunken header
	};

	var about = document.getElementById("about");
	var adoption = document.getElementById("adoption");
	var contact = document.getElementById("contact");
	var ypos = window.pageYOffset;
	if(ypos >= about_position.top) {
		about.style.color = "black";
		adoption.style.color = "#fff";
		contact.style.color = "#fff";
	}
	if(ypos+75 >= adoption_position.top) {
		adoption.style.color = "black";
		about.style.color = "#fff";
		contact.style.color = "#fff";
	}
	if(ypos+75 >= contact_position.top) {
		contact.style.color = "black";
		adoption.style.color = "#fff";
		about.style.color = "#fff";
	}
}
// https://stackoverflow.com/questions/42261524/window-scrollto-with-a-smooth

document.getElementById("about").onclick = function() {
	var about_rect = document.getElementById("start").getBoundingClientRect();
	var about_position = {
	  top: about_rect.top + window.pageYOffset,
	};

	var ypos = window.pageYOffset;
	if(ypos > about_position.top) {
		var scrollDistance = ypos - about_position.top;
		var scrollIncrement = scrollDistance / 100;
		var stopVar = setInterval(function() {
			scrollBy(0, -scrollIncrement);
			if(window.pageYOffset == about_position.top) clearInterval(stopVar);
		}, 10);
	}
}

document.getElementById("adoption").onclick = function() {
	var adoption_rect = document.getElementById("adoption-loc").getBoundingClientRect();
	var adoption_position = {
	  top: adoption_rect.top + window.pageYOffset, // accounts for the shrunken header
	};

	var ypos = window.pageYOffset;
	if(ypos > adoption_position.top) {
		var scrollDistance = ypos - adoption_position.top;
		var scrollIncrement = scrollDistance / 100;
		var stopVar = setInterval(function() {
			scrollBy(0, -scrollIncrement);
			if(window.pageYOffset <= adoption_position.top) clearInterval(stopVar);
		}, 10);
	}
	else if(ypos < adoption_position.top) {
		var scrollDistance = adoption_position.top - ypos;
		var scrollIncrement = scrollDistance / 100;
		var stopVar = setInterval(function() {
			scrollBy(0, scrollIncrement);
			if(window.pageYOffset >= adoption_position.top) clearInterval(stopVar);
		}, 10);
	}
}

document.getElementById("contact").onclick = function() {
	var contact_rect = document.getElementById("contact-loc").getBoundingClientRect();
	var contact_position = {
	  top: contact_rect.top + window.pageYOffset, // accounts for the shrunken header
	};

	var ypos = window.pageYOffset;
	if(ypos > contact_position.top) {
		var scrollDistance = ypos - contact_position.top;
		var scrollIncrement = scrollDistance / 100;
		var stopVar = setInterval(function() {
			scrollBy(0, -scrollIncrement);
			if(window.pageYOffset <= contact_position.top) clearInterval(stopVar);
		}, 10);
	}
	else if(ypos < contact_position.top) {
		var scrollDistance = contact_position.top - ypos;
		var scrollIncrement = scrollDistance / 100;
		var stopVar = setInterval(function() {
			scrollBy(0, scrollIncrement);
			if(window.pageYOffset >= contact_position.top) clearInterval(stopVar);
		}, 10);
	}
}
