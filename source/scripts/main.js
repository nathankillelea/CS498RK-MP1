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
    if (n > x.length) {index = 1}
    if (n < 1) {index = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index-1].style.display = "block";
}

// modal duder - https://www.youtube.com/watch?v=6ophW7Ask_0
//get modal element
var modal = document.getElementById("modal");
//get thing that opens modal
var modalOpener = document.getElementById("hackerman");
//get close button - add later

modalOpener.onclick = function(){
	modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
