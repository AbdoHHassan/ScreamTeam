window.onload = init;

var storyOutput;
var answers = []; // Array of the questions + answers
var answer;
var storyCompleted = Boolean('false'); // turns to true once story is completed

function init()
{
storyOutput = "Hey! This is an interactive story. Do you want to take part?";
updateStory(); 
}

//Clears input field and replaces text
function updateStory() {
  var nextQuestion = storyOutput;
  document.getElementById('answerField').value= "";
  document.getElementById('story').innerHTML = nextQuestion;
  document.getElementById('option1').firstChild.data ="Option One"; // Enter nextOption1 here
  document.getElementById('option2').firstChild.data ="Option Two"; //Enter nextOption2 here
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

function optionOne() {
    alert("option one pressed");
  //Retrieve question and answer
  var question = document.getElementById('story').innerHTML;
  answer = document.getElementById('option1').firstChild.data;
 
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

function optionTwo() {
    alert("option two pressed");
  //Retrieve question and answer
  var question = document.getElementById('story').innerHTML;
  answer = document.getElementById('option2').firstChild.data;
 
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
  //E-mail got banned while using some library for sending emails. Not again please :D
    
}

