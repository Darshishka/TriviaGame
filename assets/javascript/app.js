var questions = [
    "Which is not a region in pokemon?",
    "Which is not a Pokemon type?",
    "What was the name of Link's fairy companion in Link to the Past?",
    "Who is villan in Legend of Zelda?",
    "Who are the Kokiri?",
    "What is the name of Link's iconic weapon?",
    "What platform was Legend of Zelda origially released on?",
    "What was the air date of the first episode of Doctor Who?",
    "What does does the name TARDIS stand for?",
    "Who played the first Doctor in Doctor Who?",
    "In Harry Potter, what is Gryffindor's house animal?",
    "Where is the Gryffindor's common room located?",
    "What is Ravenclaw's house animal?",
    "Where is the Ravenclaws's common room located?",
    "What is Hufflepuff's house animal?",
    "Where is the Hufflepuff's common room located?",
    "What is Slytherins's house animal?",
    "Where is the Slytherin's common room located?",
    "Which house does The Bloody Barron belong to?",
    "Which house does The Fat Frier belong to?",
    "Which house does The Grey Lady belong to?",
    "Which house does Nearly Headless Nick belong to?"
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
    ["Christopher Eccleston", "Tom Baker", "David Tennant", "William Hartnell"],
    ["Lion", "Eagle", "Serpent", "Badger"],
    ["In the dungeons", "In the basement near the kitches", "In a tower on the west side of the castle", "In a tower on the east side of the castle"],
    ["Lion", "Eagle", "Serpent", "Badger"],
    ["In the dungeons", "In the basement near the kitches", "In a tower on the west side of the castle", "In a tower on the east side of the castle"],
    ["Lion", "Eagle", "Serpent", "Badger"],
    ["In the dungeons", "In the basement near the kitches", "In a tower on the west side of the castle", "In a tower on the east side of the castle"],
    ["Lion", "Eagle", "Serpent", "Badger"],
    ["In the dungeons", "In the basement near the kitches", "In a tower on the west side of the castle", "In a tower on the east side of the castle"],
    ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
]
var correctAnswer = [3, 1, 0, 2, 0, 3, 2, 1, 1, 3, 0, 3, 1, 2, 3, 1, 1, 0, 3, 1, 2, 0];
var btnMade = false;
var btnIndex = ["btn1", "btn2", "btn3", "btn4"]
var qNum = 0;
var wins = 0;
var losses = 0;
var timeLeft = 60;
var nextQuestionTimer;
var timerIterator;


function gameStart() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("score").innerHTML = "Score: " + wins;

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
        $("button").click(function() {
            var btnClickedId = this.id;
            var userAnswer = btnIndex.indexOf(btnClickedId);
            console.log("user answer " + userAnswer);
            console.log("correct answer " + correctAnswer[qNum]);
            if (userAnswer === correctAnswer[qNum]) {
                console.log("corect answer was chosen");
                wins++;
                document.getElementById("score").innerHTML = "Score: " + wins;
                userCorrect();
                clearInterval(nextQuestionTimer);
                clearTimeout(timerIterator);
            } else {
                console.log("inccorect answer was chosen");
                losses++;
                userIncorrect();
                clearInterval(nextQuestionTimer);
                clearTimeout(timerIterator);
            }
        });
    }
    gameQuestions();
}

function countdownTimer() {
    document.getElementById("qTimer").innerHTML = "Time left: " + timeLeft;
    nextQuestionTimer = setTimeout(function() {
        losses++;
        nextQuestion();
    }, 60000);
    timeLeft = 60;
    timerIterator = setInterval(function() {
        timeLeft -= 1;
        document.getElementById("qTimer").innerHTML = "Time left: " + timeLeft;
    }, 1000);
}

function gameQuestions() {
    document.getElementById("questions").innerHTML = questions[qNum];
    document.getElementById("btn1").innerHTML = answers[qNum][0];
    document.getElementById("btn2").innerHTML = answers[qNum][1];
    document.getElementById("btn3").innerHTML = answers[qNum][2];      
    document.getElementById("btn4").innerHTML = answers[qNum][3];
    countdownTimer();
    console.log(qNum);
}

function userCorrect(){
    document.getElementById("answers").style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("wlStatus").innerHTML = "Correct!";
    document.getElementById("qTimer").style.display = "none"
    setTimeout(() => {
        document.getElementById("answers").style.display = "block";
        document.getElementById("questions").style.display = "block";
        document.getElementById("wlStatus").innerHTML = "";
        document.getElementById("qTimer").style.display = "block";
        nextQuestion();
    }, 3000);
}

function userIncorrect() {
    document.getElementById("answers").style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("wlStatus").innerHTML = "Incorrect!";
    var trueAnswer = correctAnswer[qNum];
    document.getElementById("trueAnswer").innerHTML = "The correct answer was " + answers[qNum][trueAnswer];
    document.getElementById("qTimer").style.display = "none"
    setTimeout(() => {
        document.getElementById("answers").style.display = "block";
        document.getElementById("questions").style.display = "block";
        document.getElementById("wlStatus").innerHTML = "";
        document.getElementById("trueAnswer").innerHTML = "";
        document.getElementById("qTimer").style.display = "block";
        nextQuestion();
    }, 4000);
}
// timers being set but not cleared
// functions being called multiple times 

function nextQuestion() {
    if (qNum === 21) {
        $("button").hide();
        endGame();
    } else if (qNum < questions.length) {
        clearInterval(timerIterator);
        clearTimeout(nextQuestionTimer);
        timeLeft = 60;
        qNum++;
        console.log("next question");
        gameQuestions();
    }
}
function endGame() {
    document.getElementById("qTimer").style.display = "none"
    document.getElementById("answers").style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("score").innerHTML = "# of correct answers: " + wins + "<br> # of incorrect answers: " + losses;
    document.getElementById("startBtn").style.display = "block";
    document.getElementById("startBtn").innerHTML = "Play again?"
}