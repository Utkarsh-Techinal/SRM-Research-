// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Type="";
var Title="";
var Role="";
var internals="";
var externals="";
var brochure="";
var photos="";
var paperurl = "";
var  broucherup = "";
var datea = "";
var month = "";
var year = "";

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
//Reference messages collection
//var workshop =firebase.database().ref('Workshop');
function uploadFile(){
    // Created a Storage Reference with root dir
        var storageRef = firebase.storage().ref('events');
    // Get the file from DOM
        var brochure = document.getElementById("photos").files[0];
    //dynamically set reference to the file name
        var thisRef = storageRef.child(brochure.name);
    //put request upload file to firebase storage
    thisRef.put(brochure)
.then(snapshot => {
   return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
})

.then(downloadURL => {
    alert('Uploaded');
  console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
  paperurl = downloadURL;
  return downloadURL;
})

.catch(error => {
  // Use to signal error if something goes wrong.
  console.log(`Failed to upload file and get link - ${error}`);
});

    }
function uploadFile2(){
    // Created a Storage Reference with root dir
        var storageRef = firebase.storage().ref('events');
    // Get the file from DOM
        var brochure = document.getElementById("brochure").files[0];
    //dynamically set reference to the file name
        var thisRef = storageRef.child(brochure.name);
    //put request upload file to firebase storage
    thisRef.put(brochure)
.then(snapshot => {
   return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
})

.then(downloadURL => {
    alert('Uploaded');
  console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
  broucherup = downloadURL;
  return broucherup;
})

.catch(error => {
  // Use to signal error if something goes wrong.
  console.log(`Failed to upload file and get link - ${error}`);
});

    }

//listen for form submit
document.getElementById('Event').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    Type =getInputVal('Type');
    Title =getInputVal('Title');
    Role =getInputVal('Role');
    internals =getInputVal('internals');
    externals =getInputVal('externals');
    brochure =getInputVal('brochure');
    photos =getInputVal('photos');
    datea = document.getElementById('datea').value;
    month = document.getElementById('month').value;
    year = document.getElementById('year').value;
    
    
    //pass all values
    saveMessage(Type,Title,Role,internals,externals,brochure,photos,datea,month,year);

    //Show Alert
    //add div with class of Alert
    //Css -Add display to none
    // document.querySelector('.alert').getElementsByClassName.display ='block';

    // //Hide Alert after 3s
    // setTimeout(function(){
    //     document.querySelector('.alert').getElementsByClassName.display = 'none';
    // },3000);

    //clear form
    //document.getElementById('Workshops').reset();
}



//Function to get form values
function getInputVal(id){
     return document.getElementById(id).value;
}

//Save messages to firebase
// all input fields
function saveMessage(Type,Title,Role,internals,externals,brochure,photos,datea,month,year)  
{ 
    if(Type!="" && Title!="" && Role!="" && internals!="" && externals!="" && brochure!="" && photos!="" && datea !="" &&month != "" && year != "" ){
        firebase.database().ref('events').push({    
            Type : Type,
            Title:  Title,
            Role: Role,
            NumberofInternals: internals,
            NumberofExternals : externals,
            Brochure: broucherup,
            Photos: paperurl,
            datea: datea,
            month : month,
            year : year
        })
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-success alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-success">Entry Created</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);      

    } else{
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-danger alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-danger">Kindly Fill all the Fields.</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);
   }
}  

