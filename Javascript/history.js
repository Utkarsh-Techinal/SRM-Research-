var data = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg',
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg',
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];

function historydisp(){
    var str="<ul>";
    for(var i=0;i<data.length;i++){
        str+="<li><div class='card'><img src='";
        str+=data[i];
        str+="'alt='Avatar' width='250px' height='200px'><div class='container'><h4><b>John Doe</b></h4></div></div></li>";
    }
    str+="</ul>";
    document.getElementById("hist").innerHTML=str;
}