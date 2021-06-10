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

var adminEmail = "";
var adminPass = "";
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      
      

      var user = firebase.auth().currentUser;
      if(user != null){
          var email_id = user.uid;
          uidCheck(email_id); 
          // window.location = 'loading.html';
          $('.uid').html('hello');
          document.getElementById("user_para").innerHTML = "welcome user : " + email_id
          console.log(email_id);
      }



    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("userlogin_div").style.display = "block";
      
    }
  });


// firebase.auth().onAuthStateChanged(function(admin) {
//     if (admin) {
//       // User is signed in.

//       document.getElementById("admin_div").style.display = "initial";
//       document.getElementById("adminlogin_div").style.display = "none";

//     //   var user = firebase.auth().currentUser;
//     //   if(user != null){
//     //       var email_id = user.email;
//     //       document.getElementById("user")
//     //   }



//     } else {
//       // No user is signed in.
//       document.getElementById("admin_div").style.display = "none";
//       document.getElementById("adminlogin_div").style.display = "initial";
//     }
//   });  

// function uidCheck(uid){
//   $.get("https://srm-research-portal-3ef39.firebaseio.com/Roles/"+uid+".json", function(data, status){
// alert("Data: " + data + "\nStatus: " + status);
// console.log(data['Role']);
// });
// }

function signin(){
    var userEmail = document.getElementById("useremail_field").value;
    var userPass = document.getElementById("userpassword_field").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error:" + error.message);
        // ...
      });
}

var facultyidV , designationV;
function Ready(){
  facultyidV = document.getElementById('facultyidbox').value;
  designationV = document.getElementById('designationbox').value;
}
document.getElementById('insert').onclick = function(){
  Ready();
  signup();
  firebase.database().ref('Signup/'+facultyidV).set({
      FacultyId : facultyidV,
      Designation : designationV,
      Email : adminEmail

  });
}
function signup(){
    adminEmail = document.getElementById("adminemail_field").value;
    adminPass = document.getElementById("adminpassword_field").value;
    firebase.auth().createUserWithEmailAndPassword(adminEmail, adminPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode);
    console.log(errorMessage);

      // ...
    });
}
// function admin_signin(){
//   var adminEmail = document.getElementById("adminemail_field").value;
//   var adminPass = document.getElementById("adminpassword_field").value;
//   firebase.auth().signInWithEmailAndPassword(adminEmail, adminPass).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;

//       window.alert("Error: admin " + error.message);
//       // ...
//     });
// }

function userlogout(){
  firebase.auth().signOut()
}
function uidCheck(uid){
  $.get("https://srm-research-portal-3ef39.firebaseio.com/Roles/"+uid+".json", function(data, status){
// alert("Data: " + data + "\nStatus: " + status);
if(data == null){
  console.log('nope');
  window.location = 'index/vertical/a-index.html';

}
console.log(data['Role']);
if(data['Role'] == "Admin"){
  console.log('yeah its admin')
  window.location = 'index/admin-vertical/Pending/Paper.html';
}
else{
  console.log('nope');
}

});
}