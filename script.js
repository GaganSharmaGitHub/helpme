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

function expand(x) {
    var taskslist = ["task1", "task2", "task3"];

    document.getElementById(taskslist[x]).style.display = "block";

    document.getElementById(taskslist[x]).classList.remove("slideOutDown");
}

function close(x) {
    var taskslist = ["task1", "task2", "task3"];

    document.getElementById(taskslist[x]).style.display = "none";
    document.getElementById(taskslist[x]).classList.add("slideOutDown");
}