var email_id = "";
var uid  = "";
var facultyID = "";
firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.
  
      
      
  
      var user = firebase.auth().currentUser;
      if(user != null){
         email_id = user.email;
         uid = user.uid;
          console.warn(email_id);
          uidCheck(uid);
      
      }
  
  
  
    } else {
      // No user is signed in.
   console.log('hey eroor');
   alert('Session timed out!');
   window.location.href = "../../index.html";
      
    }
  });
  function uidCheck(uid){
    $.get("https://srm-research-portal-3ef39.firebaseio.com/Userdetails/"+uid+".json", function(data, status){
  // alert("Data: " + data + "\nStatus: " + status);

  console.log(data['FacultyId']);
  facultyID = data['FacultyId'];
  
  
  });
  }
var Title = "";
var Publisher = "";
var Volume ="";
var Page =""; 
var Type = "";
var snip="";
var impact =""; 
var name =""; 
var email ="";
var paper="";
var month="";
var datea="";
var year="";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var paperurl = "";

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
        var storageRef = firebase.storage().ref('Paper');
    // Get the file from DOM
        var brochure = document.getElementById("paper").files[0];
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


//listen for form submit
document.getElementById('Paper').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    Title =document.getElementById('Title').value;
    Publisher =document.getElementById('Publisher').value;
    Volume =document.getElementById('Volume').value;
    Page =document.getElementById('Page').value;
    Type =document.getElementById('Type').value;
    snip =document.getElementById('snip').value;
    impact =document.getElementById('impact').value;
    name =document.getElementById('name').value;
    email =document.getElementById('email').value;
    paper =document.getElementById('paper').value;
    datea =document.getElementById('datea').value;
    month =document.getElementById('month').value;
    year =document.getElementById('year').value;
    
//pass all values
    saveMessage(Title,Publisher,Volume,Page,Type,snip,impact,name,email,paper,datea,month,year);

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
                paperurl = url;
        
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
function saveMessage(Title,Publisher,Volume,Page,Type,snip,impact,name,email,url,datea,month,year)  
{ 
   if(Title !="" && Publisher!=""&& Volume!="" && Page!="" && datea!="" && Type!="" && snip!="" && impact!="" && name!="" && email!="" && url!=""&& datea!="" && month !="" &&year!="")
    {
        firebase.database().ref('PaperPublication').push({    
        Title : Title,
        PublisherName: Publisher,
        Volume:  Volume,
        Page: Page,
        Type: Type,
        Snip : snip,
        Impact: impact,
        NameAuthor: name,
        EmailAuthor: email,
        Paper: paperurl,
        datea: datea,
        month: month,
        year: year,
        email: email_id,
        uid: uid,
        facultyID: facultyID
        });
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-success alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-success">Entry Created</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);    
    }
    else{
        var alertness = `<div class="col-sm-12">
        <div class="alert alert-danger alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
            <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
            <h5 class="text-danger">Kindly Fill all the Fields.</h5>
        </div>
    </div>`;
    $('#bhokal').append(alertness);
    }

}  
