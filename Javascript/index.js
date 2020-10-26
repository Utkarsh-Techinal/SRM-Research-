//stroe data for workshop, event, paper, conference here

var workshop_data = [
    'http://www.sololearn.com/uploads/slider/1.jpg',
    'http://www.sololearn.com/uploads/slider/1.jpg'
];

var paper_data = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];

var event_data = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];

var conference_data = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];

//function to remove next prev button or chenge the number of cards based on data

function corrector(){

    var workshop_main=document.getElementById("workshop_slider");
    var paper_main=document.getElementById("paper_slider");
    var event_main=document.getElementById("event_slider");
    var conference_main=document.getElementById("conference_slider");
    var workshop_slider=document.getElementById("workshop_slider_images");
    var paper_slider=document.getElementById("paper_slider_images");
    var event_slider=document.getElementById("event_slider_images");
    var conference_slider=document.getElementById("conference_slider_images");
    var main=document.getElementById("main");
    if(workshop_data==null||workshop_data.length==0){
        workshop_main.remove();
    }
    if(paper_data==null ||paper_data.length==0){
        paper_main.remove();
    }
    if(event_data==null||event_data.length==0){
        event_main.remove();
    }
    if(conference_data==null||conference_data.length==0){
        conference_main.remove();
    }
    if(workshop_data.length==1){
        for(var i=0;i<workshop_slider.children.length;i++){
            if(workshop_slider.children[i].tagName==="I"){
                workshop_slider.children[i].remove();
            }
        }
        var x = workshop_slider.querySelectorAll(".card");
        x[2].remove();
        x[1].remove();
        }
    if(paper_data.length==1){
        for(var i=0;i<paper_slider.children.length;i++){
            if(paper_slider.children[i].tagName==="I"){
                paper_slider.children[i].remove();
            }
        }
        var x = paper_slider.querySelectorAll(".card");
        x[2].remove();
        x[1].remove();
    }
    if(event_data.length==1){
        for(var i=0;i<event_slider.children.length;i++){
            if(event_slider.children[i].tagName==="I"){
                event_slider.children[i].remove();
            }
        }
        var x = event_slider.querySelectorAll(".card");
        x[2].remove();
        x[1].remove();
    }
    if(conference_data.length==1){
        for(var i=0;i<conference_slider.children.length;i++){
            if(conference_slider.children[i].tagName==="I"){
                conference_slider.children[i].remove();
            }
        }
        var x = conference_slider.querySelectorAll(".card");
        x[2].remove();
        x[1].remove();
    }
    if(workshop_data.length==2){
        for(var i=0;i<workshop_slider.children.length;i++){
            if(workshop_slider.children[i].tagName==="I"){
                workshop_slider.children[i].remove();
            }
        }
        var x = workshop_slider.querySelectorAll(".card");
        x[2].remove();
    }
    if(paper_data.length==2){
        for(var i=0;i<paper_slider.children.length;i++){
            if(paper_slider.children[i].tagName==="I"){
                paper_slider.children[i].remove();
            }
        }
        var x = paper_slider.querySelectorAll(".card");
        x[2].remove();
    }
    if(event_data.length==2){
        for(var i=0;i<event_slider.children.length;i++){
            if(event_slider.children[i].tagName==="I"){
                event_slider.children[i].remove();
            }
        }
        var x = event_slider.querySelectorAll(".card");
        x[2].remove();
    }
    if(conference_data.length==2){
        for(var i=0;i<conference_slider.children.length;i++){
            if(conference_slider.children[i].tagName==="I"){
                conference_slider.children[i].remove();
            }
        }
        var x = conference_slider.querySelectorAll(".card");
        x[2].remove();
    }
}




function makeActive()
{
    var nav_size=document.getElementById("navhea").getBoundingClientRect().bottom;
    let paper_size=document.getElementById("paper_slider").getBoundingClientRect();
    let workshop_size=document.getElementById("workshop_slider").getBoundingClientRect();
    let event_size=document.getElementById("event_slider").getBoundingClientRect();
    let conference_size=document.getElementById("conference_slider").getBoundingClientRect();
    if(paper_size.top<=nav_size && paper_size.bottom>nav_size){
        let navitem=document.getElementById("navpap");
        navitem.setAttribute('style', "color:#5b84f0");
    }
    else{
        let navitem=document.getElementById("navpap");
        navitem.setAttribute('style', "color:#bcc1c7");
    }
    if(workshop_size.top<=nav_size && workshop_size.bottom>nav_size){
        let navitem=document.getElementById("navwor");
        navitem.setAttribute('style', "color:#5b84f0");
    }
    else{
        let navitem=document.getElementById("navwor");
        navitem.setAttribute('style', "color:#bcc1c7");
    }
    if(event_size.top<=nav_size && event_size.bottom>nav_size){
        let navitem=document.getElementById("naveve");
        navitem.setAttribute('style', "color:#5b84f0");
    }
    else{
        let navitem=document.getElementById("naveve");
        navitem.setAttribute('style', "color:#bcc1c7");
    }
    if(conference_size.top<=nav_size && conference_size.bottom>nav_size){
        let navitem=document.getElementById("navcon");
        navitem.setAttribute('style', "color:#5b84f0");
    }
    else{
        let navitem=document.getElementById("navcon");
        navitem.setAttribute('style', "color:#bcc1c7");
    }
}

document.addEventListener('scroll',function(){ makeActive();});
