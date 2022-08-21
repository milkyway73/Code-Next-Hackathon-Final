$('.carousel').carousel()
$('.carousel').carousel({
  interval: 20
})

var yesScore = 0; 
var noScore = 0;

var questionCount = 0;//number of answers clicked on

var result = document.getElementById("result");

var button = document.getElementById("restart");

//Store HTML elements using DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");


//Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", yes);
q1a2.addEventListener("click", no);

q2a1.addEventListener("click", yes);
q2a2.addEventListener("click", no);


button.addEventListener("click", restartOver);

//Track dog score and check if quiz is complete
function no(){
  noScore += 1;
  questionCount += 1;

  if (questionCount == 2){
  updateResult();
}
}

function yes(){
  yesScore += 1;
  questionCount += 1;

  if (questionCount == 2){
  updateResult();
}
}

function updateResult(){
  //Update quiz result
   if (noScore >= 1){
  result.innerHTML = "You should learn more food safety!";
  
  }else if (yesScore == 2){
  result.innerHTML = "You are a food safety master";
  
}
}

function restartOver(){
  result.innerHTML = "You...";
  questionCount = 0;
  yesScore = 0;
  noScore = 0;
  
  
  
}

/* .js files add interaction to your website */
var factList = ["Do you check if your peers have a food allergy?", "Do you inform others about your food allergies?"];

var fact = document.getElementById("fact");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if(count == factList.length){
    count=0;
  }
}