var readlineSync = require("readline-sync");


var score = 0;
var userName = readlineSync.question("What's your name ?\n");

console.log("Welcome " + userName + " to DO YOU KNOW Kshitiz?");

function play(question , answer){
    var userAnswer = readlineSync.question(question );
    
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log("Correct)!");
      score++;
    }else{
      console.log("InCorrect!");
  
    }
    console.log("Current Score : " , score);
    console.log("---------------");
  }
  
  
  var questions = [{
    question:"Q1.What is Kshitiz Full Name ?\n",
    answer:"Kshitiz Vaya"
  },{
    question:"Q2.In which Sector Does Kshitiz Live(only number)\n" ,
    answer:"6"
  },{
    question:"Q3. In Which College is Kshtiz studying?\n" ,
    answer:"CTAE"
  },{
    question:"Q4.What Sport Does Kshitiz Play?\n" ,
    answer:"Chess"
  },{
    question:"Q5. Kshitiz Likes DC or Marvel?\n",
    answer:"Marvel"
  }];
  
  
  //LOOP
  for(var i = 0 ; i < questions.length ;i++){
    var CurrentQuestion = questions[i];
    play(CurrentQuestion.question , CurrentQuestion.answer);
  }