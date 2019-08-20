//trivia question ideas
    //pokemon
        //who are the elite four
    //legend of zelda
        //goron
        //kokiri
        //name of his sword
        //original console released on
        //number of zelda games
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
        //


        //use objects?
        //https://codepen.io/agnosticdev/pen/ZbWjaB?editors=1010#0

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



var questions = [
    "Test question 1",
    "Test question 2"

]
var answers = [
    ["test a incc. 1", "test a incc. 2", "correct a 1", "test a incc. 3"],
    ["correct a 2", "test a incc. 4", "test a incc. 5", "test a incc. 6"]
]
var correctAnswer = [2,0];
var qNum = 0;

document.onclick = function gameStart() {
    document.getElementById("startBtn").style.display = "none";

    var button1 = document.createElement("button");
    button1.setAttribute("id","btn1");
    var button2 = document.createElement("button");
    button2.setAttribute("id", "btn2");
    var button3 = document.createElement("button");
    button3.setAttribute("id", "btn3")
    var button4 = document.createElement("button");
    button4.setAttribute("id", "btn4")

    document.getElementById("answers").appendChild(button1);
    document.getElementById("answers").appendChild(button2);
    document.getElementById("answers").appendChild(button3);
    document.getElementById("answers").appendChild(button4);
    
    var btnIndex = ["#btn1", "#btn2", "#btn3", "#btn4"]

    if (qNum != questions.length) {
        document.getElementById("questions").innerHTML = questions[qNum];
        document.getElementById("btn1").innerHTML = answers[qNum][0];
        document.getElementById("btn2").innerHTML = answers[qNum][1];
        document.getElementById("btn3").innerHTML = answers[qNum][2];      
        document.getElementById("btn4").innerHTML = answers[qNum][3];
//tells me which button is clicked
//to test for correct answer
    //if btnIndex.indexOf(btnClicked) === correctAnswers[qNum]
    //then user got correct answer
        $("button").click(function() {
            var btnClicked = this.id;
            if (btnIndex.indexOf(btnClicked) === correctAnswer[qNum]) {
                console.onclick("corect answer was chosen");
            } else if (btnIndex.indexOf(btnClicked) != correctAnswer[qNum]) {
                console.log("inccorect answer was chosen");
            }
        });
        qNum++;
    }

    
}