//scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 150) {

        document.getElementById("stickytop").style.display = "block";

    } else {
        document.getElementById("stickytop").style.display = "none";
        document.getElementById("sidebar").style.display = "none";
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
//menu icon
function menuicon(x) {
    x.classList.toggle("change");
    if (document.getElementById("sidebar").style.display === "block") {

        document.getElementById("sidebar").classList.add("slideOutLeft");
        document.getElementById("sidebar").style.display = "inline-block";

    } else {
        document.getElementById("sidebar").style.display = "block"

        document.getElementById("sidebar").classList.remove("slideOutLeft");
    }
}

function expand(x) {
    var taskslist = ["task1", "task2", "task3"];

    document.getElementById(taskslist[x]).style.display = "block";

    document.getElementById(taskslist[x]).classList.remove("slideOutLeft");
}

function closed(x) {
    var taskslist = ["task1", "task2", "task3"];


    document.getElementById(taskslist[x]).classList.add("slideOutLeft");
}



//document.querySelector(".close").addEventListener("click", function() {
//  $(".task").fadeOut(2000)
//});