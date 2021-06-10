
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
        var templateString = "";
        // Retrieve new posts as they are added to our database
      
        function getdata(){
            
        }
       
        var templateStringmot = "";
        var month = "";
        var year = "";
        var yearnew = "";

        function getdatamonth(){
            month = $('#month').val();
            year = $('#year').val();
            console.log(month);
            console.log(year);

        var playersRef = firebase.database().ref("PaperPublication/");
            playersRef.on("child_added", function(data) {
                templateStringmot = "";
            var mokData = [data.val()];
            console.log(mokData);
            $.each(mokData, function (i) {
                console.log(mokData[i].month);
                if(mokData[i].month == month && mokData[i].year == year){
                    templateStringmot = templateStringmot + '<tr><td> <div class="custom-control custom-checkbox text-center"> <input type="checkbox" class="custom-control-input" id="ordercheck1"> <label class="custom-control-label" for="ordercheck1"></label> </div> </td> <td><a href="javascript: void(0);" class="text-dark font-weight-bold">'+mokData[i].NameAuthor+'</a> </td> <td>'+mokData[i].datea +','+ mokData[i].month +' '+mokData[i].year+'</td><td>'+mokData[i].Title+'</td> <td>'+mokData[i].PublisherName+'</td> <td> <div class="badge badge-pill badge-soft-success font-size-12">'+mokData[i].Impact+'</div> </td> <td> <a href="javascript:void(0);" class="px-3 text-primary" data-toggle="tooltip" data-placement="top" title="Approve"></a> <a href="javascript:void(0);" class="px-3 text-danger" data-toggle="tooltip" data-placement="top" title="Reject"><i class="fa fa-times" aria-hidden="true"></i></a> </td> </tr>';
                    $('#test12').html(templateStringmot);
                }
                else{
                    console.log('nahi hai');
                }
            
                
                })
            });

        }
        function getdatayear(){
            yearnew = $('#yearnew').val();
            templateStringmot = "";
            if (yearnew != ""){
                $('#test12').html("");
            }
        var playersRef = firebase.database().ref("PaperPublication/");
            playersRef.on("child_added", function(data) {
                templateStringmot = "";
            var mokData = [data.val()];
            console.log(mokData);
            $.each(mokData, function (i) {
                console.log(mokData[i].year);
                if( mokData[i].year == yearnew){
                    templateStringmot ='<tr><td> <div class="custom-control custom-checkbox text-center"> <input type="checkbox" class="custom-control-input" id="ordercheck1"> <label class="custom-control-label" for="ordercheck1"></label> </div> </td> <td><a href="javascript: void(0);" class="text-dark font-weight-bold">'+mokData[i].NameAuthor+'</a> </td> <td>'+mokData[i].datea +','+ mokData[i].month +' '+mokData[i].year+'</td><td>'+mokData[i].Title+'</td> <td>'+mokData[i].PublisherName+'</td> <td> <div class="badge badge-pill badge-soft-success font-size-12">'+mokData[i].Impact+'</div> </td> <td> <a href="javascript:void(0);" class="px-3 text-primary" data-toggle="tooltip" data-placement="top" title="Approve"></a> <a href="javascript:void(0);" class="px-3 text-danger" data-toggle="tooltip" data-placement="top" title="Reject"><i class="fa fa-times" aria-hidden="true"></i></a> </td> </tr>';
                // $('#test12').html(templateStringmot);
                $('#test12').prepend(templateStringmot);
                }
                else{
                    console.log('nahi hai');
                }
            
                
                })
            });

        }
        function getdatafacid(){
            facid = $('#facid').val();
            templateStringmot = "";
            if (facid != ""){
                $('#test12').html("");
            }
        var playersRef = firebase.database().ref("PaperPublication/");
            playersRef.on("child_added", function(data) {
                templateStringmot = "";
            var mokData = [data.val()];
            console.log(mokData);
            $.each(mokData, function (i) {
                console.log(mokData[i].year);
                if( mokData[i].facultyID == facid){
                    templateStringmot ='<tr><td> <div class="custom-control custom-checkbox text-center"> <input type="checkbox" class="custom-control-input" id="ordercheck1"> <label class="custom-control-label" for="ordercheck1"></label> </div> </td> <td><a href="javascript: void(0);" class="text-dark font-weight-bold">'+mokData[i].NameAuthor+'</a> </td> <td>'+mokData[i].datea +','+ mokData[i].month +' '+mokData[i].year+'</td><td>'+mokData[i].Title+'</td> <td>'+mokData[i].PublisherName+'</td> <td> <div class="badge badge-pill badge-soft-success font-size-12">'+mokData[i].Impact+'</div> </td> <td> <a href="javascript:void(0);" class="px-3 text-primary" data-toggle="tooltip" data-placement="top" title="Approve"></a> <a href="javascript:void(0);" class="px-3 text-danger" data-toggle="tooltip" data-placement="top" title="Reject"><i class="fa fa-times" aria-hidden="true"></i></a> </td> </tr>';
                // $('#test12').html(templateStringmot);
                $('#test12').prepend(templateStringmot);
                }
                else{
                    console.log('nahi hai');
                }
            
                
                })
            });

        }
        
