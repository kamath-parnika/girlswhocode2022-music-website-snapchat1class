// counter for questions
var questionCount=0;
var hiphopScore=0;
var popScore=0;

//Storing HTML using DOM
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1q2");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var result = document.getElementById("result");
var restart = document.getElementById("restart");

//event listeners
q1a1.addEventListener("click", hiphop);
q1a2.addEventListener("click", pop);

q2a1.addEventListener("click", hiphop);
q2a2.addEventListener("click", pop);

q3a1.addEventListener("click", hiphop);
q3a1.addEventListener("click", pop);



//functions setup
function hiphop(){
  hiphopScore++;
  questionCount++;

  console.log("questionCount = " + questionCount);
  condole.log("hiphopScore = " + hiphopScore + "and popScore = " + popScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function pop(){
  popScore++;
  questionCount++;

  console.log("questionCount = " + questionCount);
  condole.log("hiphopScore = " + hiphopScore + "and popScore = " + popScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}

// Update quiz result
  function updateResult() {
      if (hiphopScore >= 2) {
        result.innerHTML = "Try this hip hop playlist!";
        console.log("Try this hip hop playlist!");
      } else if (popScore >= 2) {
        result.innerHTML = "Try this pop playlist!";
        console.log("Try this pop playlist!");
      }
  }

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  hiphopScore = 0;
  popScore = 0;
  console.log(`questionCount = ${questionCount} hiphopScore = ${hiphopScore} popScore = ${popScore}`);
}



 function AddData(){   
    if(typeOf(hiphopScore)>=2){ 
      var data =  "<div><h1>My data</h1>";
          data += "  <p>The JSVariable is present on page </p>";                
          data += "</div>";
       $('.myDiv').after("<br/>"+data);     
      }
 }
