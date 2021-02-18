// Code your initialPrompt function here:
function initialPrompt()
{
   console.log("Welcome to the Scrabble score calculator!");
   console.log("\n");
   console.log("Which scoring algorithm would you like to use?");
   console.log("\n");
   console.log("0 - Scrabble: The traditional scoring algorithm.");
   console.log("1 - Simple Score: Each letter is worth 1 point.");
   console.log("2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.");
   console.log("\n");
const input = require('readline-sync');
let algoName = Number(input.question("Enter 0, 1, or 2: "));

function loop(str)
  {
    while (str!="stop")
    {
 algoName = input.question("Enter a word to be scored, or 'Stop' to quit: ");
 if(algoName==='stop')
 {
  //console.log("hi");
   return "Exit"
 }
 console.log("Score for " + algoName, ":", scoringAlgorithms[0].scoreFun(algoName, newPointStructure));
    }
  }
 
  
/*while (algoName<0 || algoName>2 || !Number.isInteger(algoName))
{
  algoName=input.question("Invalid entry. Enter 0, 1, or 2: ");
  algoName=Number(algoName);
}*/
  if(algoName===0||algoName<0 || algoName>2 || !Number.isInteger(algoName))
{
  console.log("\n");
  console.log("Using algorithm: ", scoringAlgorithms[0].name, "\n");
 // algoName = input.question("Enter a word to be scored, or 'Stop' to quit: ");
  loop(algoName);
  }
if (algoName===1)
{
  console.log("\n");
  console.log("Using algorithm: ", scoringAlgorithms[1].name, "\n");
  
  algoName = input.question("Enter a word to be scored, or 'Stop' to quit: ");
  if(algoName==="stop")
  {
  return "Exit";
  }else
  {
  console.log("Score for " + algoName, ":", scoringAlgorithms[1].scoreFun(algoName));
}
}
if (algoName===2)
{
  console.log("\n");
  console.log("Using algorithm: ", scoringAlgorithms[2].name);
  
  algoName = input.question("Enter a word to be scored, or 'Stop' to quit: ");
  if(algoName==="stop")
  {
  return "Exit";
  }else
  {
  console.log("Score for " + algoName, ":", scoringAlgorithms[2].scoreFun(algoName));
}
}
}
// Code your transform function here: 
// Use the transform function to create the newScoreKey object here:
// Here is the oldScoreKey object:
 
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};
let newPointStructure={};
function transform(structure)
{
  let obj;
  let keys=Object.keys(structure);
 for(let i=0;i<keys.length;i++)
 {
   for (let j=0; j<structure[keys[i]].length; j++)
 {
   obj =structure[keys[i]][j].toLowerCase();
   newPointStructure[obj]=keys[i];
   }
}
return newPointStructure;
}

transform(oldPointStructure);  

// Create your scoringAlgorithms array here:
let scoringAlgorithms= [];
let scrab = {
  name:'Scrabble',
  description: "The traditional scoring algorithm",
  scoreFun: function scrabbleScore(word,structure)
  {
  let score =0;
  let whiteSpace=0;
  let word1=word.toLowerCase().split('');
  for(let i=0; i<word1.length; i++)
  {
    if(word1[i]===" ")
    {
    whiteSpace = 0;
      
    }else
    {
    let j=Number(structure[word1[i]]);
    score=score+j;
    }
   }
  score=score+whiteSpace;
  return score;
}};
//console.log(scrabbleScore("JAVA SCRIPT",newPointStructure));

let simpSco = {
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoreFun: function simpleScore(word)
{
  let score =0;
  let whiteSpace=0;
  let word1=word.toLowerCase().split('');
  for(let i=0; i<word1.length; i++)
  {
    if(word1[i] === " ")
    {
      whiteSpace = 0;
    }else
    {
    score=score+1;
  }}
  return score;
}};
//console.log(simpleScore("sunitha"));

let BonVow = {
  name: "Bonus Vowels",
  description: "Vowels are  pts. consonants are 1 pt.",
  scoreFun: function bonusVowels(word)
{
  let score =0;
  let whiteSpace=0;
  let word1=word.toLowerCase();
  for(let i=0; i<word1.length; i++)
  {
    if(word1[i] === " ")
    {
      whiteSpace = 0;
    }else{
    if(word1[i]==='a'||word1[i]==='e'||word1[i]==='i'||word1[i]==='o'||word1[i]==='u')
    {
  score=score+3;
    }else{
  score = score+1;
  }
  }}
  return score;
}};
scoringAlgorithms.push(scrab, simpSco,BonVow);
//run program
function runProgram(arrAlgo)
{
  console.log(initialPrompt());
}
runProgram(scoringAlgorithms);




