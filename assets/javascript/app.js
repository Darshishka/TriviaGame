//trivia question ideas
    //doctor who
        //first doctor
        //first episode
        //date of reboot
        //what does tardis stand for
        //what does the tardis look like
        //original network released on
        //what two words followed rose and the doctor
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


//Q: Which is not a region in pokemon?
//A: ["Shinnoh", "Kanto", "Unova", "Jinto"]
//C: jinto 4

//Q: Which is not a Pokemon type?
//A: ["Dark", "Shadow", "Fairy", "Normal"]
//C: shadow 2

//Q: What was the name of Link's fairy companion in Link to the Past?
//A: ["Navi", "Nani", "Nini", "Havi"]
//C: navi 1

//Q: Who is villan in Legend of Zelda?
//A: ["Gandalf", "Gandhi", "Ganon", "Gandly"]
//C: ganon 3

//Q: In Legend of Zelda, who are the Kokiri?
//A: ["A tribe of forest children", "A tribe of rock people", "A tribe of fish people", "A tribe of people consisting only of women"]
//C: forest children 1

//Q: In Legend of Zelda, what is the name of Link's iconic weapon?
//A: ["Master blade", "Master dagger", "Master knife", "Master sword"]
//C: master sword 4

//Q: What platform was Legend of Zelda origially released on?
//A: ["GameCube", "Nintendo 64", "NES", "Super Nintendo"]
//C: NES 3

//Q: 
//A: 
//C: 



var questions = [
    "Test question 1",
    "Test question 2"

]
var answers = [
    ["test a incc. 1", "test a incc. 2", "correct a 1", "test a incc. 3"],
    ["correct a 2", "test a incc. 4", "test a incc. 5", "test a incc. 6"]
]
var correctAnswer = [2,0];
var btnMade = false;

var btnIndex = ["btn1", "btn2", "btn3", "btn4"]
var qNum = 0;
var score = 0;

document.onclick = function gameStart() {
    document.getElementById("startBtn").style.display = "none";

    if (btnMade === false) {
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
    document.getElementById("questions").innerHTML = questions[qNum];
    document.getElementById("btn1").innerHTML = answers[qNum][0];
    document.getElementById("btn2").innerHTML = answers[qNum][1];
    document.getElementById("btn3").innerHTML = answers[qNum][2];      
    document.getElementById("btn4").innerHTML = answers[qNum][3];

    if (qNum < questions.length) {
//
//need to figure out how to end
//

    //tells me which button is clicked
    //tests for correct answer
        $("button").click(function() {
            var btnClickedId = this.id;
            var userAnswer = btnIndex.indexOf(btnClickedId);
            console.log(userAnswer);
                
            console.log(correctAnswer[qNum]);
            if (userAnswer === correctAnswer[qNum]) {
                console.log("corect answer was chosen");
                score++;
                console.log(score);
                document.getElementById("score").innerHTML = "Score: " + score;
                nextQuestion();
            } else {
                console.log("inccorect answer was chosen");
                nextQuestion();
            }
        });
    }
}

function nextQuestion() {
    qNum++;
    gameQuestions();
}
function endGame() {

}