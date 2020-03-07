//scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > screen.availHeight || document.documentElement.scrollTop > screen.availHeight) {

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
    popUp("taskPopUp");
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
    clearInput();
}

function writeProfile1(x) {
    document.getElementById("profileCardImage").src = profiles[x].image;
    document.getElementById("profileCardUsername").innerHTML = profiles[x].username;
    document.getElementById("yourscore").innerHTML = profiles[x].score;
}

function writeProfile2(x) {
document.getElementById("sidebarProfileImage").src = profiles[x].image;
document.getElementById("sidebarProfileUsername").innerHTML = profiles[x].username;
document.getElementById("yourscore2").innerHTML = profiles[x].score;

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
var currentUser;
profiles[0] = new user("Gagan", 100, 0, [], [1, 1, 1, 1], [], "Gagan", "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg");
profiles[1] = new user("Ishant", 400, 1, [], [0, 1, 0, 2], [], "Gagan", "https://images-na.ssl-images-amazon.com/images/I/71kkMXAcLCL._SY355_.png");
profiles[2] = new user("Gen", 300, 2, [], [], [0, 0, 0, 0], "Gagan", "https://static.zerochan.net/Asagiri.Gen.full.2674920.jpg");
profiles[3] = new user("Ryusui", 200, 3, [], [0, 0], [], "Gagan", "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg");
profiles[4] = new user("Someone", 355, 4, [], [1, 1], [], "Gagan", "https://avatars2.githubusercontent.com/u/4368783");
profiles[5] = new user("poor soul", 30, 5, [], [2, 2], [], "Gagan", "https://avatars2.githubusercontent.com/u/4364567");

function reward(title, token, link, status) {
    this.title = title;
    this.link = link;
    this.token = token;
    this.status = status;
}
var allReward = [];
var leadersboard = [];

function leaderSort() {
    for (i in profiles) {
        leadersboard[i] = i;

    }
    leadersboard.sort(function(a, b) {
        return totalScore(a) - totalScore(b)
    })
    leadersboard.reverse();


}

function totalScore(a) {
    var scoreA = profiles[a].score;
    for (i in profiles[a].claimed) { scoreA = scoreA + allReward[profiles[a].claimed[i]].token; }
    return scoreA;


}
allReward[0] = new reward("Amazon coupon", 20, "link", "available");
allReward[1] = new reward("iPhone", 200, "link", "available");
allReward[2] = new reward("Switzerland Trip", 500, "link", "available");
var data = [];
data[0] = new taskData("Graphic Design", "Iris Media", "Graphics", "March", 100);
data[1] = new taskData("Testing", "Titus Tech", "JavaScript", "April", 200);
data[2] = new taskData("C# coding", "TigerOne", "C#", "January", 200);
data[3] = new taskData("python debugging", "Titus Tech", "python", "February", 250);


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
    clearInput();
}

function viewProfile(x) {
    writeProfile1(x);
    popUp('profile')
}

// function signIn2() {
//     var userid = parseInt(document.getElementById("signIn2Id").value);
//     var password = document.getElementById("signIn2Password").value;
//     if (userid >= profiles.length) { document.getElementById("signIn2Warning").innerHTML = "ID does not exist"; } else {
//         if (password != profiles[userid].password) {
//             document.getElementById("signIn2Warning").innerHTML = "Incorrect password";
//         } else {
//             currentUser = userid;
//             document.getElementById('aboveAll').style.display = "none";
//             document.getElementById('wholebody').style.display = "block";
//             writeProfile1(currentUser);
//             writeProfile2(currentUser);
//             document.getElementById("postParent").innerHTML = "";
//             for (k in profiles[currentUser].notApplied) { post(k) }
//         }
//     }
//     clearInput();
// }

function signUp2() {
    var username = document.getElementById('signUp2Name').value;
    var password = document.getElementById("signUp2Password").value;
    var image = document.getElementById("signUp2Image").value;
    if (image == "") { image = "https://avatars2.githubusercontent.com/u/4364604" + (profiles.length - 5).toString(); }

    var num = profiles.push(new user(username, 0, 0, [], [], [], password, image));
    profiles[num - 1].id = num - 1;
    currentUser = num - 1;
    for (i in data) {
        var num = profiles[currentUser].notApplied.push(new taskData(data[i].title, data[i].company, data[i].skills, data[i].date, data[i].reward));
    }

    alert("Welcome " + profiles[currentUser].username + " ,Your id is: " + profiles[currentUser].id + " remember it for future login")
    writeProfile2(currentUser);
    writeProfile1(currentUser);
    document.getElementById('aboveAll').style.display = "none";
    document.getElementById('wholebody').style.display = "block";
    document.getElementById("postParent").innerHTML = "";
    for (k in profiles[currentUser].notApplied) { post(k) }
    clearInput();
}




function apply(x) {
    profiles[currentUser].score = profiles[currentUser].score + parseInt(profiles[currentUser].notApplied[x].reward);
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

        document.getElementById("yourscore").innerHTML = profiles[currentUser].score;
        document.getElementById("yourscore2").innerHTML = profiles[currentUser].score;
        var num = profiles[currentUser].claimed.push(x);


    }
}

function expandAppliedList() {
    document.getElementById("appliedPopUp").style.display = "flex";
    document.getElementById("appliedPopUp").classList.remove("slideOutLeft");
    if (profiles[currentUser].applied == 0) {
        document.getElementById("appliedPopUp").innerHTML = '<h3>You have not applied for any task yet</h3>' + '<span class="close" onclick=' + "'closed(" + '"appliedPopUp")' + "'" + '>X</span>';
    } else {
        document.getElementById("appliedPopUp").innerHTML = '<span class="close" onclick=' + "'closed(" + '"appliedPopUp")' + "'" + '>X</span>';
        for (i in profiles[currentUser].applied) { postInAppliedList(i) }
    }
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

function expandLeaderList() {
    leaderSort();
    document.getElementById("leaderPopUp").style.display = "block";
    document.getElementById("leaderPopUp").classList.remove("slideOutLeft");
    document.getElementById("leaderPopUp").innerHTML = '<h3><i class="fa fa-line-chart"></i> Leadersboard</h3><span class="close" onclick=' + "'closed(" + '"leaderPopUp")' + "'" + '>X</span>';
    for (i in leadersboard) { postLeaderList(i) }
}

function postLeaderList(x) {
    const parent = document.getElementById("leaderPopUp");
    let newPost = document.createElement('div');
    var rank = parseInt(x) + 1;
    newPost.classList.add("leader");
    if (x == currentUser) {
        newPost.classList.add("animated");
        newPost.classList.add("rubberBand");
        newPost.classList.add("currentLeader");
    }
    newPost.innerHTML = '<span class="leaderRank">' + rank + '</span><img class="leaderImage" src="' + profiles[leadersboard[x]].image +
        '"><div class="leaderText"><span class="leaderName">' +
        profiles[leadersboard[x]].username +
        '</span><span class="leaderScore">' +
        profiles[leadersboard[x]].score +
        '<i class="fas fa-award"></i>' + '</span><span class="leaderClaimed"> <i class="fa fa-gift" aria-hidden="true">' +
        profiles[leadersboard[x]].claimed.length +
        '</i></span></div><span class="btn btn-primary leaderButton" onclick="viewProfile(' + leadersboard[x] + ')">' + '<i class="fa fa-info-circle" aria-hidden="true"></i> View Profile</span>';
    parent.appendChild(newPost);
}

function expandClaimedList() {
    document.getElementById("claimedPopUp").style.display = "flex";
    document.getElementById("claimedPopUp").classList.remove("slideOutLeft");
    if (profiles[currentUser].claimed.length == 0) {
        document.getElementById("claimedPopUp").innerHTML = '<h5>You have not claimed any gift</h5><span class="close" onclick=' + "'closed(" + '"claimedPopUp")' + "'" + '>X</span>';
    } else {
        document.getElementById("claimedPopUp").innerHTML = '<span class="close" onclick=' + "'closed(" + '"claimedPopUp")' + "'" + '>X</span>';
        for (i in profiles[currentUser].claimed) {
            postInClaimedReward(i); }
    }
}

function clearInput() {
    document.getElementById("signIn2Id").value = "";
    document.getElementById("signIn2Password").value = "";
    document.getElementById("signUp2Name").value = "";
    document.getElementById("signUp2Password").value = "";
    document.getElementById("signUp2Image").value = "";
    document.getElementById("detailsForm").value = "";
    document.getElementById("titleForm").value = "";
    document.getElementById("skillsForm").value = "";
    document.getElementById("rewardsForm").value = "";
    document.getElementById("dateForm").value = "";
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
