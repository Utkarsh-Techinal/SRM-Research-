 //only next and prev slider functionality presentdata.length) {


var event_num1 = 0;
var event_num2 = 1;
var event_num3 = 2;
function nextEvent() {
    var es1 = document.getElementById('es1');
    var es2 = document.getElementById('es2');
    var es3 = document.getElementById('es3');
    event_num1++;
    event_num2++;
    event_num3++;
    if(event_num1 >= event_data.length) {
        event_num1 = 0;
    }
    if(event_num2 >= event_data.length) {
        event_num2 = 0;
    }
    if(event_num3 >= event_data.length) {
        event_num3 = 0;
    }
    es1.src = event_data[event_num1];
    es2.src=event_data[event_num2];
    es3.src=event_data[event_num3];
}
function prevEvent() {
    var es1 = document.getElementById('es1');
    var es2 = document.getElementById('es2');
    var es3 = document.getElementById('es3');
    event_num1--;
    event_num2--;
    event_num3--;
    if(event_num1 < 0) {
        event_num1 = event_data.length-1;
    }
    if(event_num2 < 0) {
        event_num2 = event_data.length-1;
    }
    if(event_num3 < 0) {
        event_num3 = event_data.length-1;
    }
    es1.src = event_data[event_num1];
    es2.src=event_data[event_num2];
    es3.src=event_data[event_num3];
}

//to display the content

function display_event(){
    if(event_data.length==0){}
    else if(event_data.length==1){
        var es1 = document.getElementById('es1');
        es1.src = event_data[0];
    }
    else if(event_data.length==2){
        var es1 = document.getElementById('es1');
        es1.src = event_data[0];
        var es2 = document.getElementById('es2');
        es2.src = event_data[1];
    }
    else if(event_data.length>=3){
        var es1 = document.getElementById('es1');
        es1.src = event_data[0];
        var es2 = document.getElementById('es2');
        es2.src = event_data[1];
        var es3 = document.getElementById('es3');
        es3.src = event_data[2];
    }
}