//scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 500) {

        document.getElementById("stickytop").style.display = "block";

    } else {
        document.getElementById("stickytop").style.display = "none";
        document.getElementById("sidebar").style.width = "0px";
    }
}
//menu icon
function menuicon(x) {
    x.classList.toggle("change");
    if (document.getElementById("sidebar").style.width === "300px") {
        document.getElementById("sidebar").style.width = "0px"
    } else { document.getElementById("sidebar").style.width = "300px" }
}

function expand() {
    document.getElementById("task1").style.display = "block";

    document.getElementById("task1").classList.remove("slideOutDown");
}



document.querySelector(".close").addEventListener("click",function(){
    $(".task").fadeOut(2000)});