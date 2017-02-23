$(document).ready(function() {
  $(".questions").hide();
  $('.results').hide();
  $(".btn").on("click", function() {

    
    
    //setTimeout(timesUp, 20 * 1000);
    clearInterval(downloadTimer);
    //var intervalId;



    var timeleft = 20;
    var downloadTimer = setInterval(function(){
      timeleft--;
      $("#display").text(timeleft);
      console.log(timeleft);
      if(timeleft <= 0)
      clearInterval(downloadTimer);
      
        
    }, 1000);
    $(".questions").show();
  });
});
    
    //if(timeleft = 0){
     // $('.questions').empty();
     // $('.results').show();
    
    
   
    
    // Animation complete.
      
   
    
                    


    

          
                
 

    
           
                            

          
   


          //!$("input[@name=q1]:checked").val() ||            
          //!$("input[@name=q2]:checked").val() ||            
          //!$("input[@name=q3]:checked").val() ||

        

//var answers ={
      //question1: True
      //question2: True
      //question3: False
      //question4: True  
    //}
    //timesUp(){

      //$('.questions').empty();
      //setInterval(displayDiv, 1000);
    
      //displayDiv(){
      //$("#times-up").append("<h1> TIMES UP </h1>");
      //setInterval(clearDiv, 2000);
      //};
      //clearDiv(){
      //$("#times-up").empty();
      //$(".results").show();
      //};
    //};
    //}
    


        
        
          //$('#time-left').append("<h2> About 5 Seconds Left! </h2>");
         
          
      
            //$('questions').empty()
       
            //$('#time-left').append("<h2> Times Up! </h2>");
            //$('#results').append()

          //console.log("done");
          //audio.play();
        

    
    
      //$(this).text("reset");
      //reurn(chosenNumber);
