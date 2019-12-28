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
    console.log(x);
}

function formPopUp() {

    document.getElementById("formPopUp").style.display = "block";
    document.getElementById("formPopUp").classList.remove("slideOutLeft");
}

function closed() {

    document.getElementById("taskPopUp").classList.add("slideOutLeft");
}

function closeForm() {

    document.getElementById("formPopUp").classList.add("slideOutLeft");
}

function taskData(title, company, skills, date, reward) {
    this.title = title;
    this.company = company;
    this.detail = "details";
    this.skills = skills;
    this.reward = reward || 0;
    this.date = date;
}

var data = [];
data[0] = new taskData("Graphic Design", "Iris Media", "Graphics", "March", 100);
data[1] = new taskData("Testing", "Titus Tech", "JavaScript", "April", 200);
data[2] = new taskData("C# coding", "TigerOne", "C#", "January", 200);
data[3] = new taskData("python debugging", "Titus Tech", "python", "February", 250);

function writeData(x) {
    document.getElementById("taskDataTitle").innerHTML = data[x].title;
    document.getElementById("taskDataCompany").innerHTML = data[x].company;
    document.getElementById("taskDataSkills").innerHTML = data[x].skills;
    document.getElementById("taskDataDate").innerHTML = data[x].date;
    document.getElementById("taskDataReward").innerHTML = data[x].reward;

    document.getElementById("companyImage").src = "res/" +
        data[x].company + ".png";
}

function submitt() {
    var titleForm = document.getElementById("titleForm").value;
    var companyForm = document.getElementById("companyForm").value;
    var skillsForm = document.getElementById("skillsForm").value;
    var dateForm = document.getElementById("dateForm").value;
    var rewardsForm = document.getElementById("rewardsForm").value;
    var detailsForm = document.getElementById("detailsForm").value;
    var num = data.push(new taskData(titleForm, companyForm, skillsForm, dateForm, rewardsForm));
    for (var i in data) {
        console.log(data[i].title + i);
    }
    post(num - 1);
    closeForm();
}

function post(num) {
    const parent = document.getElementById("postParent");
    let newPost = document.createElement('div');
    newPost.classList.add("card", "col-sm-12", "col-md-3");
    newPost.innerHTML = '<img class="card-img-top" src="res/' +
        data[num].company + '.png" alt="Card image" style="width:100%">' + '<div class="card-body">' +
        '<h4 class="card-title">' + data[num].title + '</h4><p class="card-text">' + data[num].company + '</p>' +
        '<a style="text-decoration: none;" class="btn btn-primary">' +
        '<ion-icon name="log-in"></ion-icon>Apply</a>' +
        '<a class="btn btn-primary">' +
        '<ion-icon name="share"></ion-icon>Share</a>' +
        '<a onclick="expand(' +
        num +
        ')" class="btn btn-primary">' +
        '<ion-icon class="fa fa-info-circle"></ion-icon>Details</a>' +
        '</div>'
    parent.appendChild(newPost);
}