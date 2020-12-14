// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Type="";
var Author ="";
var Title ="";
var Conference ="";
var Place ="";
var conproof = "";
var datef ="";
var monthf ="";
var yearf = "";
var datet = "";
var montht = "";
var yeart = "";

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
        var storageRef = firebase.storage().ref('proof');
    // Get the file from DOM
        var brochure = document.getElementById("proof").files[0];
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
  conproof = downloadURL;
  return downloadURL;
})

.catch(error => {
  // Use to signal error if something goes wrong.
  console.log(`Failed to upload file and get link - ${error}`);
});

    }

//listen for form submit
document.getElementById('Conference').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
     Type =document.getElementById('Type').value;
     Author =document.getElementById('Authors').value;
     Title =document.getElementById('Title').value;
     Conference =document.getElementById('nameConf').value;
     Place =document.getElementById('Place').value;
     proof =document.getElementById('proof').value;
     datef = document.getElementById('datef').value;
     monthf = document.getElementById('monthf').value;
     yearf = document.getElementById('yearf').value;
     datet = document.getElementById('datet').value;
     montht = document.getElementById('montht').value;
     year = document.getElementById('yeart').value;
    
    
    //pass all values
    saveMessage(Type,Author,Title,Conference,Place,proof,datef,monthf,yearf,datet,montht,yeart);

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
var storageRef = storage.ref();
        
        $('#List').find('tbody').html('');
        
        // var i=0;

        storageRef.child('Events/').listAll().then(function(result){
            result.items.forEach(function(imageRef){
                
                // i++;
                displayImage(imageRef);
                //console.log("Image Reference "+ imageRef.toString());
            });
        });
        function displayImage(row,images){
            images.getDownloadURL().then(function(url){
                console.log(url);
                conferenceurl = url;
        
                let new_html = ' ';
                new_html += '<tr>';
                new_html += '<td>';
                new_html += row;
                new_html += '</tr>';
                new_html += '<td>';
                new_html += '<img src ="'+url+'"width="100px" style="float:right">';
                new_html += '</td>';
                new_html += '</tr>';
                $('#List').find('tbody').append(new_html);
        
        
            });
        }

//Save messages to firebase
// all input fields
function saveMessage(Type,Author,Title,Conference,Place,datef,monthf,yearf,datet,montht,yeart)  
{ 
    if(Type!="" && Author!="" && Title!="" && Conference!="" && Place!="" && conproof!="" &&datef!="" && monthf!="" &&yearf!="" &&datet !="" &&montht!="" &&yeart!=""){
        firebase.database().ref('conference').push({    
            Type : Type,
            NumberofAuthor:Author,
            Title:  Title,
            Conference: Conference,
            Place: Place,
            Proof: conproof,
            datef:datef,
            monthf:monthf,
            yearf:yearf,
            datet:datet,
            montht:montht,
            yeart:yeart
        })
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-success alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-success">Entry Created</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);    

    }else{
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-danger alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-danger">Kindly Fill all the Fields.</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);
    }
}  

