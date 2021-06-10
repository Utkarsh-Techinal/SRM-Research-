// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDCE0BDSOZS-mKoUApeYqUw_x52It6wqWI",
    authDomain: "srm-research-portal-3ef39.firebaseapp.com",
    databaseURL: "https://srm-research-portal-3ef39.firebaseio.com",
    projectId: "srm-research-portal-3ef39",
    storageBucket: "srm-research-portal-3ef39.appspot.com",
    messagingSenderId: "338025397922",
    appId: "1:338025397922:web:7e43bb0bc83e3de213a1fb",
    measurementId: "G-9WCQV8696P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  getdata();
  var uid="";

  firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.
  
      
      
  
      var user = firebase.auth().currentUser;
      if(user != null){
           uid = user.uid;
      
      }
  
  
  
    } else {
      // No user is signed in.
   console.log('hey eroor');
   alert('Session timed out!');
   window.location.href = "../../index.html";
      
    }
  });
  var templateString = "";
// Retrieve new posts as they are added to our database
function getdata(){

var playersRef = firebase.database().ref("PaperPublication/");
    playersRef.on("child_added", function(data) {
    var mokData = [data.val()] ;
    console.log(mokData);
    $.each(mokData, function (i) {
      templateString = '<div class="card"> <div class="card-head"> <img src="./assets/images/6316-removebg-preview.png" width="150px"> <h2>'+mokData[i].Title+'<br><span>'+mokData[i].PublisherName+'</span></h2></div> <div class="card-main"> <h4> <p>Name :'+mokData[i].NameAuthor+'</p><p>Email :'+mokData[i].EmailAuthor+'</p><p>Date :'+mokData[i].datea+'/'+mokData[i].month+'/'+mokData[i].year+'</p><p>Impact :'+mokData[i].Impact+'</p><p>Volume :'+mokData[i].Volume+'</p> </h4> </div> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <a class="linkbtn" href="'+mokData[i].Paper+'" target = "_blank"> <button  class="downloadbtn"><i class="fa fa-download"></i> &nbspDownload</button> </a> </div>';
      $('#test12').append(templateString);
        })
    });
}
function viewPost(){
  templateString = "";
  $('#test12').html('');
var playersRef = firebase.database().ref("PaperPublication/");
    playersRef.on("child_added", function(data) {
    var mokData = [data.val()] ;
    console.log(mokData);
   
      $.each(mokData, function (i) {
        if(mokData[i].uid == uid){
        templateString = '<div class="card"> <div class="card-head"> <img src="./assets/images/6316-removebg-preview.png" width="150px"> <h2>'+mokData[i].Title+'<br><span>'+mokData[i].PublisherName+'</span></h2></div> <div class="card-main"> <h4> <p>Name :'+mokData[i].NameAuthor+'</p><p>Email :'+mokData[i].EmailAuthor+'</p><p>Date :'+mokData[i].datea+'/'+mokData[i].month+'/'+mokData[i].year+'</p><p>Impact :'+mokData[i].Impact+'</p><p>Volume :'+mokData[i].Volume+'</p> </h4> </div> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <a class="linkbtn" href="'+mokData[i].Paper+'" target = "_blank"> <button  class="downloadbtn"><i class="fa fa-download"></i> &nbspDownload</button> </a> </div>';
        $('#test12').prepend(templateString);
        }
        else{
          console.log('NA');
        }
        })
    
    
    
    });
}


  
    function logout(){
      firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('User Logged Out!');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
    }