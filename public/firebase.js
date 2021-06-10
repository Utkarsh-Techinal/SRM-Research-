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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function logout(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
  }

  firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.
  
      
      
  
      var user = firebase.auth().currentUser;
      if(user != null){
          var email_id = user.uid;
      
      }
  
  
  
    } else {
      // No user is signed in.
   console.log('hey eroor');
   alert('Session timed out!');
   window.location.href = "../../../index.html";
      
    }
  });