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
  

// Retrieve new posts as they are added to our database
function getdata(){

var playersRef = firebase.database().ref("events/");
    playersRef.on("child_added", function(data) {
    var mokData = [data.val()];
    console.log(mokData);
    $.each(mokData, function (i) {
        var templateString = '<div class="col-md-6 col-xl-3"><div class="card"> <div class="card-body"><h4 class="card-title mt-0">'+mokData[i].Title+'</h4><h6 class="card-subtitle font-14 text-muted">Type</h6></div><img class="img-fluid event-card"   src="'+mokData[i].Photos+'" alt="Card image cap"><div class="card-body"><p class="card-text">Role: '+mokData[i].Role+'<br> Date: '+mokData[i].DateTime+' <br> Internals: '+mokData[i].NumberofInternals+' &nbsp|&nbsp Externals: '+mokData[i].NumberofExternals+'</p><a href="'+mokData[i].Brochure+'" class="card-link" target="_blank">Download Broucher</a></div></div></div>';
        $('#test12').append(templateString);
        })
    });
}

getdata();

