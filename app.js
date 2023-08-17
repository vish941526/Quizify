let kuler = require("kuler");
let readlineSync = require("readline-sync");
let userName= readlineSync.question("Enter your Name: ");
console.log(kuler(` Hello Mr.${userName} `,"#facc15"));
let Score =0;




const database={
  data:[
    {
      Question:"Which is a reserved word in the Java   programming language?",
      Options:{
        a:"method",
        b:"Array",
        c:"Native",
        d:"class"
      },
      Correctanswer:"c"
    },
    {
      Question:"Which is a valid keyword in java?",
      Options:{
        a:"interface",
        b:"string",
        c: "Float",
        d:"unsigned",
      },
      Correctanswer:"a"
      },
    {
      Question:"Which is the valid declarations withininterface  definition?",
      Options:{
          a:"public double methoda();",
          b:"public final double methoda();",
          c:"static void methoda(double d1);",
          d:"protected void methoda(double d1);"
      },
        Correctanswer:"a"
    } 
  ]
}

let leaderboard ={
  data:[
    {
      Name:"Rahul",
      Score: 1
    },
    {
      Name:"Raman",
      Score: 2
    },
    {
      Name:"Rohan",
      Score:1
    }
  ]
}



function playGame(userAnswer,Correctanswer){
  if(userAnswer === Correctanswer){
    console.log(kuler("Correct Answer","#3f6212"));
    Score++;
  }
  else{
    console.log(kuler("Wrong Answer","#b91c1c"));
    console.log(kuler(`Correct answe is : ${Correctanswer}`,"#2dd4bf"));
  }
}


// showing the questions and Options
function showQuestionAndOptions(){
  for(let i=0;i<database.data.length;i++){
    console.log(kuler(`\nQ${i+1}: ${database.data[i].Question }\n`,"#ea580c"));
    for(let key in database.data[i].Options){
      console.log(`${key}- ${database.data[i].Options[key]}`);
    }
    let userAnswer = readlineSync.question("Enter your answer (a/b/c/d):").toLowerCase();
     playGame(userAnswer,database.data[i].Correctanswer);
  }
}



// Creating the leader board;
function HighScorer(leaderboard){
  leaderboard.data.push({Name:userName,Score:Score});
  let sortedScoreList = leaderboard.data.sort((a,b)=>b.Score-a.Score);
  for(let leader of sortedScoreList){
    console.log(kuler(`${leader.Name} - Score:${leader.Score}`,"#881337"));
  }
}



showQuestionAndOptions();
console.log(`\n Wow Your Score is ${Score} \n`);
console.log("\n----------Leader Board----------\n");
HighScorer(leaderboard);

