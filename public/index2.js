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
  var user = "";
  var email = "";
  var uid = "";
  var facultyidV , designationV ;
    function Ready(){
    facultyidV = document.getElementById('facultyidbox').value;
    facultynameV = document.getElementById('facultynamebox').value;
    facultynumberV = document.getElementById('facultynumberbox').value;
    designationV = document.getElementById('designationbox').value;
    user = firebase.auth().currentUser;
    if (user != null) {
      email = user.email;
      uid = user.uid;
      console.log(email);
      console.log(uid);
    }
    }
    Ready();
document.getElementById('insert').onclick = function(){
  Ready();
  firebase.database().ref('Userdetails/'+uid).set({
      FacultyId : facultyidV,
      Facultyname : facultynameV,
      Facultynumber : facultynumberV,
      Designation : designationV,
      UserID : uid,
      EmailID : email
  }).then(()=>{
    if(uid!=null){
      window.location.href = "./index/vertical/a-index.html";
    }
    else{
      alert("bhk bsdk");
    }
  });
}