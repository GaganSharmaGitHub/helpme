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
    writeData(x)

    document.getElementById("taskPopUp").style.display = "block";
    document.getElementById("taskPopUp").classList.remove("slideOutLeft");
}

function closed(x) {

    document.getElementById("taskPopUp").classList.add("slideOutLeft");
}

function taskData(title, company, skills, date, reward) {
    this.title = title;
    this.company = company;
    this.detail = "details";
    this.skills = skills;
    this.reward = reward || 0;
    this.date = date;
}
var taskData1 = new taskData("Graphic Design", "Iris Media", "Graphics", "March", 100);
var taskData2 = new taskData("Testing", "Titus Tech", "JavaScript", "April", 200);
var taskData3 = new taskData("C# coding", "TigerOne", "C#", "January", 200);
var taskData4 = new taskData("python debugging", "Titus Tech", "python", "February", 250);

function writeData(x) {
    var tasksDataList = [taskData1, taskData2, taskData3, taskData4];
    document.getElementById("taskDataTitle").innerHTML = tasksDataList[x].title;
    document.getElementById("taskDataCompany").innerHTML = tasksDataList[x].company;
    document.getElementById("taskDataSkills").innerHTML = tasksDataList[x].skills;
    document.getElementById("taskDataDate").innerHTML = tasksDataList[x].date;
    document.getElementById("taskDataReward").innerHTML = tasksDataList[x].reward;

    document.getElementById("companyImage").src = "res/" +
        tasksDataList[x].company + ".png";
}