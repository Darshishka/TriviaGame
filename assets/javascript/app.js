//trivia question ideas
    //doctor who
        //first doctor
        //what does the tardis look like
    //harry potter
        //voldemorts real name
        //what certian spells do
        //name of all the weasles
        //name of harrys owl
        //in goblet of fire, who was mad eye moody really
        //first book release date
        //what does the pollyjuice potion do
        //effects of other potions
        //name of weasleys shop
        //name of the bank
        //hagrids first name
    //star trek
        //how many itterations of star trek are there
        //name of the enterprise
        //enterprise serial number (NCC-1701)
        //actors names
        //what itteration was Data in
        //what itteration was patrick stewart in
    //location of worlds biggest comic convention
    //lotr
    //what does larp stand for
    //what is cosplay
    //mario
    //marvel
        //when was the first comic published


//Doctor Who

    //Q: 
    //A:
    //C:


//set up question themes
//set up timer
//set up correct answer page
//set up incorrect answer page
//answer button click only working on second button click
    //or after changing button to #answers on line 106
    //correct answer is givien a value of -1
//after selecting correct answer for 2nd question
    //also returns response for 3rd question then moves
    //to 4th question
    //responce for the 4th question skips to 7th

var questions = [
    "Which is not a region in pokemon?",
    "Which is not a Pokemon type?",
    "What was the name of Link's fairy companion in Link to the Past?",
    "Who is villan in Legend of Zelda?",
    "In Legend of Zelda, who are the Kokiri?",
    "In Legend of Zelda, what is the name of Link's iconic weapon?",
    "What platform was Legend of Zelda origially released on?",
    "What was the air date of the first episode of Doctor Who?",
    "In the show, Doctor who, what does does the name TARDIS stand for?",
    "",

]
var answers = [
    ["Shinnoh", "Kanto", "Unova", "Jinto"],
    ["Dark", "Shadow", "Fairy", "Normal"],
    ["Navi", "Nani", "Nini", "Havi"],
    ["Gandalf", "Gandhi", "Ganon", "Gandly"],
    ["A tribe of forest children", "A tribe of rock people", "A tribe of fish people", "A tribe of people consisting only of women"],
    ["Master blade", "Master dagger", "Master knife", "Master sword"],
    ["GameCube", "Nintendo 64", "NES", "Super Nintendo"],
    ["November 22nd, 1963", "November 23rd, 1963" , "November 24th, 1963" , "July 18th, 2005"],
    ["Tornado Advanced Radar Display Information System", "Time And Relative Dimension In Space", "Tethered Arial Release Developed In Style", "Theraputic Aeromatic Dispersal In Sessions"],

]
var correctAnswer = [3, 1, 0, 2, 0, 3, 2, 1, 1];
var btnMade = false;

var btnIndex = ["btn1", "btn2", "btn3", "btn4"]
var qNum = 0;
var wins = 0;
var losses = 0;

document.onclick = function gameStart() {
    document.getElementById("startBtn").style.display = "none";
    
//set 60 second countdown timer
    //when time is up nextQuestion() then repeat

    console.log("qnum " + qNum);

    
    $("button").click(function() {
        var btnClickedId = this.id;
        var userAnswer = btnIndex.indexOf(btnClickedId);
        console.log(userAnswer);
        
        console.log(correctAnswer[qNum]);
        if (userAnswer === correctAnswer[qNum]) {
            console.log("corect answer was chosen");
            wins++;
            qNum++;
            console.log(wins);
            document.getElementById("score").innerHTML = "Score: " + wins;
        } else {
            console.log("inccorect answer was chosen");
            losses++;
            qNum++;
        }
        
        if (qNum === questions.length) {
            $("button").hide()
            endGame();
        } else if (qNum < questions.length) {
            //gameQuestions();
            nextQuestion();
        }
    });
    if (!btnMade) {
        var button1 = document.createElement("button");
        button1.setAttribute("id","btn1");
        var button2 = document.createElement("button");
        button2.setAttribute("id", "btn2");
        var button3 = document.createElement("button");
        button3.setAttribute("id", "btn3")
        var button4 = document.createElement("button");
        button4.setAttribute("id", "btn4");
        document.getElementById("answers").appendChild(button1);
        document.getElementById("answers").appendChild(button2);
        document.getElementById("answers").appendChild(button3);
        document.getElementById("answers").appendChild(button4);        
        btnMade = true;
    }
    gameQuestions();
}

function gameQuestions() {

    if (qNum < questions.length) {
        document.getElementById("questions").innerHTML = questions[qNum];
        document.getElementById("btn1").innerHTML = answers[qNum][0];
        document.getElementById("btn2").innerHTML = answers[qNum][1];
        document.getElementById("btn3").innerHTML = answers[qNum][2];      
        document.getElementById("btn4").innerHTML = answers[qNum][3];
    }
}




function nextQuestion() {
    gameQuestions();
}
function endGame() {
    console.log("game end");
    clearInterval();
}