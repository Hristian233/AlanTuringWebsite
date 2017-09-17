function documentReady(){
  
  //DATUM
  function updateDate(){
	var date = new Date();
	var dateYear = date.getFullYear();
	var dateMonth = date.getMonth() + 1; // zero indexed
	var dateDay = date.getDate(); 
    document.getElementById("box_clock_date").innerHTML = 'Date: '+dateDay+ '.' +dateMonth+ '.' +dateYear;
    return false;
  } 
  
  updateDate();
  
  //UHRZEIT
  function updateTime(){
    
    var date = new Date();
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth() + 1; // zero indexed
    var dateDay = date.getDate();
    var timeHours = date.getHours();
    var timeMin = date.getMinutes();
    var timeSec = date.getSeconds();
    
    if(timeSec <= 9){
      timeSec = '0'+timeSec;
      
    }
		
    var timeNow = timeHours+':'+timeMin+':'+timeSec;
   
    document.getElementById("box_clock_time").innerHTML = 'Time: '+timeNow;
    return false;
  }
  
  updateTime();
  
  //Intervall for time & date update
  setInterval(function(){ updateTime(); updateDate(); },1000);
 
  setTimeout(function(){
    document.getElementById("popUpBackground").style.display = 'block';
    return false;
  },1000);
  
 
  //OPEN NAVIGATION 
  var buttonNavi = document.getElementById("naviButton");

  buttonNavi.onclick = function(e){
     document.getElementById("responsiveNavi").style.display = "block";
  return false;
  } 
 
return false;
}


//popUp Window schließen
function close_PopUp(){
   document.getElementById("popUpBackground").style.display = 'none';
return false; 
}


//MULTIPLICATION 
function callMultiplicator(){
  document.getElementById("multiplicatorBackground").style.display = 'block';
  document.getElementById("numberBox_boxOutput").style.display = 'none';
  document.getElementById("inputNumbers").value = '';
  
  var buttonMultiplication = document.getElementById("buttonMultiplication");
  
  buttonMultiplication.onclick = function(e){
    callFunctionMultiplication();
    return false;
  };
  
return false; 
}


function closeMultiplicator(){
   document.getElementById("multiplicatorBackground").style.display = 'none';
return false; 
}

//Function - no input on submit
function noInput(){
  var outputBox = document.getElementById("numberBox_boxOutput"); 
  outputBox.style.display = 'block';
  outputBox.innerHTML = 'Please enter at least two numbers...!';
  return false;
}

//Function - not a number
function wrongInput(){
  var outputBox = document.getElementById("numberBox_boxOutput"); 
  outputBox.style.display = 'block';
  outputBox.innerHTML = 'Input has to be a number...!';
  return false;
}


function callFunctionMultiplication(){
  
  var getNumbers = document.getElementById("inputNumbers").value;
  
  var splitInputNumbers = getNumbers.split("");
  var numberOne = splitInputNumbers[0];
  var numberTwo = splitInputNumbers[1];
  var numberThree = splitInputNumbers[2];
  var numberFour = splitInputNumbers[3];
  
  if(numberOne == undefined){
      noInput();
      return false;
  }
  if(numberTwo == undefined){
      noInput();
      return false;
  }
  if(numberThree == undefined){
     numberThree = 1;
  }
  if(numberFour == undefined){
     numberFour = 1;
  }
  
  if(isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree) || isNaN(numberFour)){ 
    wrongInput();
    return false;
  }
   
  var showCalc = numberOne+' x '+numberTwo+' x '+numberThree+' x '+numberFour;
  var result = numberOne*numberTwo*numberThree*numberFour; 
  
  var outputBox = document.getElementById("numberBox_boxOutput"); 
  outputBox.style.display = 'block';
  outputBox.innerHTML = showCalc+' = <span>'+result+'</span>';
  
return false;  
}

function closeNavigation(){
  document.getElementById("responsiveNavi").style.display = 'none';
return false;
}




