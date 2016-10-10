window.onload = init;

var storyOutput;
var answers = []; // Array of the questions + answers
var answer;
var storyCompleted = Boolean('false'); // turns to true once story is completed
var openQuestion = Boolean('false'); //true when open question, false if not

function init()
{
storyOutput = "Hey! This is an interactive story. Do you want to take part?";
updateStory(); 
}

//Clears input field and replaces text
function updateStory() {
    var nextQuestion = storyOutput;
    document.getElementById('story').innerHTML = nextQuestion;
    openQuestion=true;
    
    //HTML Elements. Wanted to move them to the top, but for some reason the boolean stops working. Not sure why..
    var inputField = document.getElementById('answerField');
    var optionOne = document.getElementById('option1');
    var optionTwo = document.getElementById('option2');
    var answerBtn = document.getElementById('submit');
    
    
    //Hides or show the buttons depending on the question.
    //TODO: Change the boolean somewhere. 
    if (openQuestion == true)
        {
            optionOne.style.visibility="hidden";
            optionTwo.style.visibility="hidden";
            inputField.style.visibility="visible";  
            answerBtn.style.visibility="visisble";
            inputField.value = "";
         
        }
    else if (openQuestion == false){
        optionOne.style.visibility="visible";
        optionTwo.style.visibility="visible";
        inputField.style.visibility="hidden";
        answerBtn.style.visibility="hidden";
        
        optionOne.firstChild.data ="Option One"; // Enter nextOption1 here
        optionTwo.firstChild.data ="Option Two"; //Enter nextOption2 here
        }
};

// There are currently three functions for input: One for text field, one for one button and another one for the second button..
function interpretAnswer() {

  //Retrieve question and answer
  var question = document.getElementById('story').innerHTML;
  answer = document.getElementById('answerField').value;
 
  //Creates an entry (q+a)
  var entry = new Array();
  entry.push({
		question: question,
        answer: answer
   });
    //Push array of (q+a)  into total q+a list
    answers.push(entry);
    alert(JSON.stringify(answers));
    sendResults();
  checkAnswer();
};

function interpretButtonAnswer(answeredElement) {

  //Retrieve question and answer
  var question = document.getElementById('story').innerHTML;
  answer = answeredElement.firstChild.data;
 
  //Creates an entry (q+a)
  var entry = new Array();
  entry.push({
		question: question,
        answer: answer
   });
    //Push array of (q+a)  into total q+a list
    answers.push(entry);
    alert(JSON.stringify(answers));
    sendResults();
  checkAnswer();
};

//
function checkAnswer() {
    
    // Story line tree logic in here
    
  if (answer === "YES") { 
    storyOutput = "Excellent!";
  }
  else if (answer === "CAN I THINK ABOUT IT?") {
    storyOutput = "Sure! Type something else in whenever you're ready.";
  }
  else if (answer === 'NO') { 
    storyOutput = "Aw! Okay. See you later." ;
  }
  else { 
    // With no results, or bad results, repeat the question with more detail:
    storyOutput = "Hey! This is an interactive story. Do you want to take part? YES or NO";
  };
  updateStory();
}

function sendResults()
{
  //E-mail got banned while using some library(EmailJS) for sending emails. Only other way is to use a download button, tho I am not sure if this is a good idea to put in the storyboard itself....?
    
}

