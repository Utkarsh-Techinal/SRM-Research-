function setDisplay(id, visible) {
    var o = document.getElementById(id);
    o.style.display = visible===true? 'block' : 'none';
}

function Authors(){
    var x=document.getElementById("author_numbers");
    if(x.value>10 || x.value<1){
        x.value=10;
    }
    listItem(x.value);
}

function listItem(value){
    var str = '<p>Author Name:</p><ul>'
    for(var i=1;i<=value;i++) {
        str+='<li><p>Author '+i+ ':</p>';
        str+='<input type="text"></li>';
      }; 
      str += '</ul>';
      document.getElementById("box").innerHTML = str;
}