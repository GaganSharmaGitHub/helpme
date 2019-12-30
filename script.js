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
    popUp("taskPopUp")
    console.log(x);
}

function showPassword(num) {
    var x = document.getElementById(num);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function switchProfile() {
    closed('profile');
    document.getElementById("wholebody").style.display = "none";
    document.getElementById("aboveAll").style.display = "block";
}

function popUp(x) {

    document.getElementById(x).style.display = "block";
    document.getElementById(x).classList.remove("slideOutLeft");
}

function closed(x) {

    document.getElementById(x).classList.add("slideOutLeft");
}

function writeProfile() {
    document.getElementById("profileCardImage").src = profiles[currentUser].image;
    document.getElementById("profileCardUsername").innerHTML = profiles[currentUser].username;
    document.getElementById("yourscore").innerHTML = profiles[currentUser].score;
    document.getElementById("sidebarProfileImage").src = profiles[currentUser].image;
    document.getElementById("sidebarProfileUsername").innerHTML = profiles[currentUser].username;
    document.getElementById("yourscore2").innerHTML = profiles[currentUser].score;

    console.log("Current user " + profiles[currentUser].username)

}



//data starts


function taskData(title, company, skills, date, reward) {
    this.title = title;
    this.company = company;
    this.detail = "details";
    this.skills = skills;
    this.reward = reward || 0;
    this.date = date;
}

function user(username, score, id, applied, claimed, notApplied, password, image) {
    this.username = username;
    this.id = score;
    this.score = score;
    this.applied = applied;
    this.claimed = claimed;
    this.notApplied = notApplied;
    this.password = password;
    this.image = image;
}
var profiles = [];
var currentUser = 1;
profiles[0] = new user("Gagan", 100, 0, [], [], [], "Gagan", "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg");
profiles[1] = new user("Ishant", 400, 1, [], [], [], "Gagan", "https://images-na.ssl-images-amazon.com/images/I/71kkMXAcLCL._SY355_.png");
profiles[2] = new user("Gen", 300, 2, [], [], [], "Gagan", "https://static.zerochan.net/Asagiri.Gen.full.2674920.jpg");

function reward(title, token, link, status) {
    this.title = title;
    this.link = link;
    this.token = token;
    this.status = status;
}
var allReward = [];

allReward[0] = new reward("Amazon coupon", 20, "link", "available");
allReward[1] = new reward("iPhone", 200, "link", "available");
allReward[2] = new reward("Switzerland Trip", 500, "link", "available");
console.log(allReward[0].title + allReward[0].token + profiles[currentUser].score)
var data = [];
data[0] = new taskData("Graphic Design", "Iris Media", "Graphics", "March", 100);
data[1] = new taskData("Testing", "Titus Tech", "JavaScript", "April", 200);
data[2] = new taskData("C# coding", "TigerOne", "C#", "January", 200);
data[3] = new taskData("python debugging", "Titus Tech", "python", "February", 250);

for (i in allReward) { postReward(i); }

function writeData(x) {
    document.getElementById("taskDataTitle").innerHTML = profiles[currentUser].notApplied[x].title;
    document.getElementById("taskDataCompany").innerHTML = profiles[currentUser].notApplied[x].company;
    document.getElementById("taskDataSkills").innerHTML = profiles[currentUser].notApplied[x].skills;
    document.getElementById("taskDataDate").innerHTML = profiles[currentUser].notApplied[x].date;
    document.getElementById("taskDataReward").innerHTML = profiles[currentUser].notApplied[x].reward;
    document.getElementById("companyImage").src = "res/" +
        profiles[currentUser].notApplied[x].company + ".png";

}


function submitt() {
    var titleForm = document.getElementById("titleForm").value;
    var companyForm = document.getElementById("companyForm").value;
    var skillsForm = document.getElementById("skillsForm").value;
    var dateForm = document.getElementById("dateForm").value;
    var rewardsForm = document.getElementById("rewardsForm").value;
    var detailsForm = document.getElementById("detailsForm").value;
    var num = data.push(new taskData(titleForm, companyForm, skillsForm, dateForm, rewardsForm));
    for (i in profiles) {
        var num = profiles[i].notApplied.push(new taskData(titleForm, companyForm, skillsForm, dateForm, rewardsForm));
    }


    post(num - 1);
    closed("formPopUp");


}

function signIn2() {
    var userid = parseInt(document.getElementById("signIn2Id").value);
    var password = document.getElementById("signIn2Password").value;
    if (userid >= profiles.length) { document.getElementById("signIn2Warning").innerHTML = "ID does not exist"; } else {
        if (password != profiles[userid].password) {
            document.getElementById("signIn2Warning").innerHTML = "Incorrect password";
        } else {
            currentUser = userid;
            document.getElementById('aboveAll').style.display = "none";
            document.getElementById('wholebody').style.display = "block";
            writeProfile();

            document.getElementById("postParent").innerHTML = "";
            for (k in profiles[currentUser].notApplied) { post(k) }
        }
    }
}

function signUp2() {
    var username = document.getElementById('signUp2Name').value;
    var password = document.getElementById("signUp2Password").value;
    var image = document.getElementById("signUp2Image").value;
    var num = profiles.push(new user(username, 0, 0, [], [], [], password, image));
    profiles[num - 1].id = num - 1;
    console.log(num + "id created");
    currentUser = num - 1;
    for (i in data) {
        var num = profiles[currentUser].notApplied.push(new taskData(data[i].title, data[i].company, data[i].skills, data[i].date, data[i].reward));
    }

    alert("Welcome " + profiles[currentUser].username + " ,Your id is: " + profiles[currentUser].id + " remember it for future login")
    writeProfile();
    document.getElementById('aboveAll').style.display = "none";

    document.getElementById('wholebody').style.display = "block";
    document.getElementById("postParent").innerHTML = "";
    for (k in profiles[currentUser].notApplied) { post(k) }
}




function apply(x) {
    profiles[currentUser].score = profiles[currentUser].score + parseInt(profiles[currentUser].notApplied[x].reward);
    console.log("your" + profiles[currentUser].score);
    document.getElementById("yourscore").innerHTML = profiles[currentUser].score;
    document.getElementById("yourscore2").innerHTML = profiles[currentUser].score;
    var num = profiles[currentUser].applied.push(new taskData(profiles[currentUser].notApplied[x].title, profiles[currentUser].notApplied[x].company, profiles[currentUser].notApplied[x].skills, profiles[currentUser].notApplied[x].date, profiles[currentUser].notApplied[x].reward));
    profiles[currentUser].notApplied.splice(x, 1);
    document.getElementById("postParent").innerHTML = "";
    alert("You applied for " + profiles[currentUser].applied[num - 1].title);
    for (k in profiles[currentUser].notApplied) { post(k) };

}

function claim(x) {
    if (profiles[currentUser].score < allReward[x].token) { alert("Balance insufficient"); } else {
        profiles[currentUser].score = profiles[currentUser].score - allReward[x].token;
        console.log("your" + profiles[currentUser].score);
        document.getElementById("yourscore").innerHTML = profiles[currentUser].score;
        document.getElementById("yourscore2").innerHTML = profiles[currentUser].score;
        var num = profiles[currentUser].claimed.push(x);
        for (i in profiles[currentUser].claimed) {
            console.log("claimed" + allReward[profiles[currentUser].claimed[i]].title + i);
        }

    }
}

function expandAppliedList() {
    document.getElementById("appliedPopUp").style.display = "flex";
    document.getElementById("appliedPopUp").classList.remove("slideOutLeft");
    document.getElementById("appliedPopUp").innerHTML = '<span class="close" onclick=' + "'closed(" + '"appliedPopUp")' + "'" + '>X</span>';
    for (i in profiles[currentUser].applied) { postInAppliedList(i) }
}

function expandAppliedDetails(x) {
    closed("appliedPopUp");
    document.getElementById("taskDataTitle").innerHTML = profiles[currentUser].applied[x].title;
    document.getElementById("taskDataCompany").innerHTML = profiles[currentUser].applied[x].company;
    document.getElementById("taskDataSkills").innerHTML = profiles[currentUser].applied[x].skills;
    document.getElementById("taskDataDate").innerHTML = profiles[currentUser].applied[x].date;
    document.getElementById("taskDataReward").innerHTML = profiles[currentUser].applied[x].reward;
    document.getElementById("companyImage").src = "res/" +
        profiles[currentUser].applied[x].company + ".png";

    document.getElementById("taskPopUp").style.display = "block";
    document.getElementById("taskPopUp").classList.remove("slideOutLeft");
    console.log(x);


}

function postInAppliedList(x) {
    const parent = document.getElementById("appliedPopUp");
    let newPost = document.createElement('div');
    newPost.classList.add("appliedTask");
    newPost.innerHTML = '<img class="appliedImage" src="res/' +
        profiles[currentUser].applied[x].company +
        '.png"><div class = "appliedTaskText" >' +
        '<span class = "appliedTaskTitle" >' +
        profiles[currentUser].applied[x].title +
        '</span> <span class = "appliedTaskReward" >' +
        profiles[currentUser].applied[x].reward +
        '<i class = "fas fa-award" ></i></span>' + '<span class = "appliedTaskCompany" >' +
        profiles[currentUser].applied[x].company +
        '</span> <span class = "appliedTaskDate" >' +
        profiles[currentUser].applied[x].date +
        '</span><span class = "btn btn-primary appliedTaskButton" onclick="expandAppliedDetails(' + x + ')"> Details</span ></div>';
    parent.appendChild(newPost);

}

function expandClaimedList() {
    document.getElementById("claimedPopUp").style.display = "flex";
    document.getElementById("claimedPopUp").classList.remove("slideOutLeft");
    document.getElementById("claimedPopUp").innerHTML = '<span class="close" onclick=' + "'closed(" + '"claimedPopUp")' + "'" + '>X</span>';
    for (i in profiles[currentUser].claimed) {
        postInClaimedReward(i);
        console.log(allReward[profiles[currentUser].claimed[i]].title + "cfgh")
    }
}

function postInClaimedReward(x) {
    const parent = document.getElementById("claimedPopUp");
    let newPost = document.createElement('div');
    newPost.classList.add("claimedReward");
    newPost.innerHTML = '<img class="rewardImage" src="res/' +
        allReward[profiles[currentUser].claimed[x]].title + '.png"><div class="claimedRewardText"><span class="claimedRewardTitle">' +
        allReward[profiles[currentUser].claimed[x]].title +
        '</span> <span class = "claimedRewardCost" >' +
        allReward[profiles[currentUser].claimed[x]].token +
        '<i class = "fas fa-award"> </i>' + '</span ><span class = "btn btn-primary claimedLinkButton" > Redeem</span ></div>';
    parent.appendChild(newPost);

}


function constructNotApplied() {
    for (j in profiles) {
        for (i in data) {
            var num = profiles[j].notApplied.push(new taskData(data[i].title, data[i].company, data[i].skills, data[i].date, data[i].reward));

        }
    }
    for (k in profiles[currentUser].notApplied) {
        console.log(profiles[currentUser].notApplied[k].title + k + "gaga")
    }
}
constructNotApplied();

function post(num) {
    const parent = document.getElementById("postParent");
    let newPost = document.createElement('div');
    newPost.classList.add("card", "col-sm-12", "col-md-3", "post" + num);
    newPost.innerHTML = '<img class="card-img-top" src="res/' +
        profiles[currentUser].notApplied[num].company + '.png" alt="Card image" style="width:100%">' + '<div class="card-body">' +
        '<h4 class="card-title">' + profiles[currentUser].notApplied[num].title + '</h4><p class="card-text">' + profiles[currentUser].notApplied[num].company + '</p>' +
        '<a style="text-decoration: none;" onClick="apply(' + num + ')"class="btn btn-primary">' +
        '<ion-icon name="log-in"></ion-icon>Apply</a>' +
        '<a class="btn btn-primary">' +
        '<ion-icon name="share"></ion-icon>Share</a>' +
        '<a onclick="expand(' +
        num +
        ')" class="btn btn-primary">' +
        '<ion-icon class="fa fa-info-circle"></ion-icon>Details</a>' +
        '</div>';
    parent.appendChild(newPost);
}


function postReward(num) {
    const parent = document.getElementById("rewardParent");
    let newPost = document.createElement('div');
    newPost.classList.add("card", "col-sm-12", "col-md-3");
    newPost.innerHTML = '<img class="card-img-top" src="res/' +
        allReward[num].title + '.png" ' +
        'alt="Card image" style="width:100%"><div class="card-body"><h4 class="card-title">' +
        allReward[num].title +
        '</h4><p class="card-text">' +
        allReward[num].status +
        '</p> <a class="btn btn-primary" onclick="claim(' + num + ')">' + 'Claim for ' +
        allReward[num].token +
        '<i class="fas fa-award"></i > </a></div>';
    parent.appendChild(newPost);
}

writeProfile();
document.getElementById("postParent").innerHTML = "";
for (k in profiles[currentUser].notApplied) { post(k) }