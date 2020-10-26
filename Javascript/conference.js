//only next and prev slider functionality present

var conference_num1 = 0;
var conference_num2 = 1;
var conference_num3 = 2;
function nextConference() {
    var cs1 = document.getElementById('cs1');
    var cs2 = document.getElementById('cs2');
    var cs3 = document.getElementById('cs3');
    conference_num1++;
    conference_num2++;
    conference_num3++;
    if(conference_num1 >= conference_data.length) {
        conference_num1 = 0;
    }
    if(conference_num2 >= conference_data.length) {
        conference_num2 = 0;
    }
    if(conference_num3 >= conference_data.length) {
        conference_num3 = 0;
    }
    cs1.src = conference_data[conference_num1];
    cs2.src=conference_data[conference_num2];
    cs3.src=conference_data[conference_num3];
}
function prevConference() {
    var cs1 = document.getElementById('cs1');
    var cs2 = document.getElementById('cs2');
    var cs3 = document.getElementById('cs3');
    conference_num1--;
    conference_num2--;
    conference_num3--;
    if(conference_num1 < 0) {
        conference_num1 = conference_data.length-1;
    }
    if(conference_num2 < 0) {
        conference_num2 = conference_data.length-1;
    }
    if(conference_num3 < 0) {
        conference_num3 = conference_data.length-1;
    }
    cs1.src = conference_data[conference_num1];
    cs2.src=conference_data[conference_num2];
    cs3.src=conference_data[conference_num3];
}

//to display the content

function display_conference(){
    if(conference_data.length==0){}
    else if(conference_data.length==1){
        var cs1 = document.getElementById('cs1');
        cs1.src = conference_data[0];
    }
    else if(conference_data.length==2){
        var cs1 = document.getElementById('cs1');
        cs1.src = conference_data[0];
        var cs2 = document.getElementById('cs2');
        cs2.src = conference_data[1];
    }
    else if(conference_data.length>=3){
        var cs1 = document.getElementById('cs1');
        cs1.src = conference_data[0];
        var cs2 = document.getElementById('cs2');
        cs2.src = conference_data[1];
        var cs3 = document.getElementById('cs3');
        cs3.src = conference_data[2];
    }
}